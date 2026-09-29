import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import { LinkButton } from '@/components/ui/Button'
import { LanguageToggle } from '@/components/LanguageToggle'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useLanguage } from '@/hooks/useLanguage'

export default function NotFound() {
  const { t } = useLanguage()

  useEffect(() => {
    document.title = `404 · ${t.notFound.title}`
    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.name = 'robots'
      document.head.appendChild(robots)
    }
    robots.content = 'noindex'
  }, [t])

  return (
    <div className="relative grid min-h-dvh place-items-center overflow-hidden px-4">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_70%)]" />
      <div className="absolute top-4 right-4 flex items-center gap-1.5">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <main className="text-center">
        <p className="font-mono text-sm text-accent">HTTP 404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.notFound.title}</h1>
        <p className="mt-3 text-muted">{t.notFound.text}</p>
        <pre className="mx-auto mt-8 w-fit rounded-lg border border-border bg-surface px-4 py-3 text-left font-mono text-xs text-muted">
          <span className="text-subtle">$</span> curl -I {window.location.pathname.slice(0, 40)}
          {'\n'}
          <span className="text-danger">HTTP/2 404</span>
        </pre>
        <LinkButton href="/" className="mt-8">
          <ArrowLeft className="size-4" aria-hidden />
          {t.notFound.back}
        </LinkButton>
      </main>
    </div>
  )
}
