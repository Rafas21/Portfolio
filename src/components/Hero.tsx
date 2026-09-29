import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import { heroFocus } from '@/data/focusAreas'
import { useLanguage } from '@/hooks/useLanguage'
import { isVisible } from '@/utils/sections'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import { LinkButton } from './ui/Button'
import { Reveal } from './ui/Reveal'

export function Hero() {
  const { t, l } = useLanguage()
  const projectsTarget = isVisible('projects') ? '#projects' : '#github'

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="absolute -top-40 left-1/2 h-[28rem] w-[48rem] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]" />
      </div>

      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            {profile.availability && (
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-50" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
                {l(profile.availability)}
              </span>
            )}
            {profile.location && (
              <span className="inline-flex items-center gap-1.5 text-xs">
                <MapPin className="size-3.5" aria-hidden />
                {l(profile.location)}
              </span>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 id="hero-title" className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 font-mono text-sm text-accent sm:text-base">{l(profile.headline)}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">{l(profile.summary)}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LinkButton href={projectsTarget}>
              {t.hero.viewProjects}
              <ArrowRight className="size-4" aria-hidden />
            </LinkButton>
            <LinkButton href={profile.social.linkedin} variant="secondary" external>
              <LinkedinIcon className="size-4" />
              LinkedIn
            </LinkButton>
            <LinkButton href={profile.social.github} variant="secondary" external>
              <GithubIcon className="size-4" />
              GitHub
            </LinkButton>
            <LinkButton href="#contact" variant="secondary">
              <Mail className="size-4" aria-hidden />
              {t.hero.contact}
            </LinkButton>
            {profile.resumeUrl && (
              <LinkButton href={l(profile.resumeUrl)} variant="ghost" download>
                <Download className="size-4" aria-hidden />
                {t.hero.resume}
              </LinkButton>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="shrink-0 font-mono text-xs tracking-wider text-subtle uppercase">{t.hero.focus}</span>
            <span aria-hidden className="hidden h-px w-8 bg-border sm:block" />
            <ul className="flex flex-wrap gap-2" aria-label={t.hero.focus}>
              {heroFocus.map((tech) => (
                <li key={tech} className="rounded-md border border-border bg-surface/60 px-2.5 py-1 font-mono text-xs text-muted">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
