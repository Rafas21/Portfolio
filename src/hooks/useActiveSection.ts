import { useEffect, useState } from 'react'

/** Retorna o id da seção visível mais próxima do topo (para destacar na navbar). */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>('')
  const key = ids.join(',')

  useEffect(() => {
    const elements = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const visible = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top)
          else visible.delete(entry.target.id)
        }
        if (visible.size === 0) return
        const [first] = [...visible.entries()].sort((a, b) => a[1] - b[1])
        setActive(first[0])
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return active
}
