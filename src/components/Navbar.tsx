import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { profile } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useLanguage } from '@/hooks/useLanguage'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/utils/cn'
import { navSections } from '@/utils/sections'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const { t } = useLanguage()
  const scrolled = useScrolled()
  const active = useActiveSection(navSections)
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = ''
    }
  }, [open])

  const initials = profile.name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'border-b border-border bg-bg/80 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5 rounded-md" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center rounded-lg border border-border bg-surface font-mono text-xs font-semibold text-accent transition-colors group-hover:border-accent/50">
            {initials}
          </span>
          <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
        </a>

        <nav aria-label={t.nav.primary} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navSections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={cn(
                    'relative rounded-md px-3 py-2 text-sm transition-colors',
                    active === id ? 'text-fg' : 'text-muted hover:text-fg',
                  )}
                >
                  {t.nav[id]}
                  {active === id && (
                    <span aria-hidden className="absolute inset-x-3 -bottom-px h-px bg-accent" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <LanguageToggle />
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="grid size-9 place-items-center rounded-lg text-muted hover:bg-surface hover:text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label={t.nav.primary} className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-bg lg:hidden">
          <ul className="container-page flex flex-col py-4">
            {navSections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === id ? 'true' : undefined}
                  className={cn(
                    'flex items-center justify-between border-b border-border py-4 text-base',
                    active === id ? 'text-fg' : 'text-muted',
                  )}
                >
                  {t.nav[id]}
                  {active === id && <span aria-hidden className="size-1.5 rounded-full bg-accent" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
