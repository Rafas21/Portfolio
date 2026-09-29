import { ArrowUpRight, GitFork, RefreshCw, Star } from 'lucide-react'
import { useMemo } from 'react'
import { profile } from '@/data/profile'
import { useGithubRepos, type GithubRepo } from '@/hooks/useGithubRepos'
import { useLanguage } from '@/hooks/useLanguage'
import { formatDate } from '@/utils/date'
import { GithubIcon } from './ui/BrandIcons'
import { Button, LinkButton } from './ui/Button'
import { Card } from './ui/Card'
import { Section } from './ui/Section'
import { Skeleton } from './ui/Skeleton'
import { Tag } from './ui/Tag'

const MAX_REPOS = 6

function RepoCard({ repo }: { repo: GithubRepo }) {
  const { t, locale } = useLanguage()
  return (
    <Card className="group relative flex h-full flex-col p-5 hover:border-border-strong">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-mono text-sm font-medium break-all">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0 after:rounded-xl group-hover:text-accent">
            {repo.name}
          </a>
        </h3>
        <ArrowUpRight className="size-4 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" aria-hidden />
      </div>
      <p className="mt-2 line-clamp-3 text-sm text-muted">{repo.description || t.github.noDescription}</p>
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5 text-xs text-subtle">
        {repo.language && <Tag>{repo.language}</Tag>}
        {repo.fork && <Tag variant="dashed">{t.github.fork}</Tag>}
        {repo.stargazers_count > 0 && (
          <span className="inline-flex items-center gap-1">
            <Star className="size-3.5" aria-hidden /> {repo.stargazers_count}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span className="inline-flex items-center gap-1">
            <GitFork className="size-3.5" aria-hidden /> {repo.forks_count}
          </span>
        )}
        <span>
          {t.github.updated} {formatDate(repo.pushed_at, locale)}
        </span>
      </div>
    </Card>
  )
}

export function GitHub() {
  const { t } = useLanguage()
  const state = useGithubRepos(profile.githubUsername)

  const { repos, languages, total } = useMemo(() => {
    if (state.status !== 'success') return { repos: [], languages: [], total: 0 }
    const own = state.repos.filter((r) => !r.archived)
    const sorted = [...own].sort(
      (a, b) => Number(a.fork) - Number(b.fork) || b.stargazers_count - a.stargazers_count || b.pushed_at.localeCompare(a.pushed_at),
    )
    const counts = new Map<string, number>()
    own.forEach((r) => r.language && counts.set(r.language, (counts.get(r.language) ?? 0) + 1))
    return {
      repos: sorted.slice(0, MAX_REPOS),
      languages: [...counts.entries()].sort((a, b) => b[1] - a[1]),
      total: state.repos.length,
    }
  }, [state])

  return (
    <Section
      id="github"
      eyebrow={t.github.eyebrow}
      title={t.github.title}
      intro={t.github.intro}
      aside={
        <LinkButton href={profile.social.github} variant="secondary" external className="self-start md:self-end">
          <GithubIcon className="size-4" />
          {t.github.viewProfile}
        </LinkButton>
      }
    >
      {state.status === 'loading' && (
        <div role="status" aria-busy="true" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <span className="sr-only">Loading…</span>
          {Array.from({ length: 3 }, (_, i) => (
            <Card key={i} className="space-y-3 p-5">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-4/5" />
              <Skeleton className="mt-6 h-5 w-20" />
            </Card>
          ))}
        </div>
      )}

      {state.status === 'error' && (
        <Card className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">{t.github.error}</p>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={state.retry}>
              <RefreshCw className="size-4" aria-hidden />
              {t.github.retry}
            </Button>
            <LinkButton href={profile.social.github} external variant="ghost">
              {t.github.viewProfile}
            </LinkButton>
          </div>
        </Card>
      )}

      {state.status === 'success' && (
        <>
          <div className="mb-6 flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted">
              <span className="font-mono text-fg">{total}</span> {t.github.repos}
            </p>
            {languages.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-subtle">{t.github.languages}:</span>
                {languages.map(([lang, count]) => (
                  <Tag key={lang}>
                    {lang} <span className="text-subtle">{count}</span>
                  </Tag>
                ))}
              </div>
            )}
          </div>
          {repos.length > 0 ? (
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo) => (
                <li key={repo.id}>
                  <RepoCard repo={repo} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-xl border border-dashed border-border py-12 text-center text-sm text-muted">{t.github.empty}</p>
          )}
        </>
      )}
    </Section>
  )
}
