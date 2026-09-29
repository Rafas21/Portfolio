import { useCallback, useEffect, useState } from 'react'

export interface GithubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  fork: boolean
  archived: boolean
  pushed_at: string
  topics?: string[]
}

type State =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'success'; repos: GithubRepo[] }

const CACHE_KEY = 'gh-repos-v1'
const CACHE_TTL = 1000 * 60 * 30

/** Busca repositórios públicos (sem token) com cache de 30 min em sessionStorage. */
export function useGithubRepos(username: string) {
  const [state, setState] = useState<State>({ status: 'loading' })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    const cacheKey = `${CACHE_KEY}:${username}`

    try {
      const cached = sessionStorage.getItem(cacheKey)
      if (cached && attempt === 0) {
        const { at, repos } = JSON.parse(cached) as { at: number; repos: GithubRepo[] }
        if (Date.now() - at < CACHE_TTL) {
          setState({ status: 'success', repos })
          return
        }
      }
    } catch {
      /* ignore cache errors */
    }

    setState({ status: 'loading' })
    fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=pushed`, {
      headers: { Accept: 'application/vnd.github+json' },
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API ${res.status}`)
        return res.json() as Promise<GithubRepo[]>
      })
      .then((repos) => {
        setState({ status: 'success', repos })
        try {
          sessionStorage.setItem(cacheKey, JSON.stringify({ at: Date.now(), repos }))
        } catch {
          /* ignore */
        }
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === 'AbortError') return
        setState({ status: 'error' })
      })

    return () => controller.abort()
  }, [username, attempt])

  const retry = useCallback(() => setAttempt((n) => n + 1), [])
  return { ...state, retry }
}
