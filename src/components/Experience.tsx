import { ExternalLink } from 'lucide-react'
import { experiences } from '@/data/experience'
import { site } from '@/data/site'
import { useLanguage } from '@/hooks/useLanguage'
import { formatPeriod } from '@/utils/date'
import { Placeholder } from './ui/Placeholder'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'
import { Tag } from './ui/Tag'

export function Experience() {
  const { t, l, locale } = useLanguage()

  return (
    <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title}>
      {experiences.length === 0 && site.showPlaceholders ? (
        <Placeholder file="src/data/experience.ts" title={t.experience.title}>
          Empresa, cargo, período, responsabilidades e tecnologias de cada experiência listada no LinkedIn.
        </Placeholder>
      ) : (
        <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-8">
          {experiences.map((exp, i) => (
            <li key={`${exp.company}-${exp.start}`} className="relative">
              <span
                aria-hidden
                className={`absolute top-1.5 -left-[calc(1.5rem+5px)] size-2.5 rounded-full border-2 border-bg sm:-left-[calc(2rem+5px)] ${exp.end === null ? 'bg-accent' : 'bg-border-strong'}`}
              />
              <Reveal delay={i * 0.05}>
                <article>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {l(exp.role)}
                      <span className="text-muted"> · </span>
                      {exp.url ? (
                        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
                          {exp.company}
                          <ExternalLink className="size-3.5" aria-hidden />
                        </a>
                      ) : (
                        <span className="text-accent">{exp.company}</span>
                      )}
                    </h3>
                    <p className="shrink-0 font-mono text-xs text-subtle">
                      {formatPeriod(exp.start, exp.end, locale, t.experience.present)}
                    </p>
                  </div>
                  {(exp.location || exp.employmentType) && (
                    <p className="mt-1 text-sm text-subtle">
                      {[exp.employmentType && l(exp.employmentType), exp.location && l(exp.location)].filter(Boolean).join(' · ')}
                    </p>
                  )}
                  {exp.responsibilities.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted sm:text-base">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="flex gap-3">
                          <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-subtle" />
                          {l(r)}
                        </li>
                      ))}
                    </ul>
                  )}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-4">
                      <p className="mb-2 text-xs font-medium tracking-wider text-subtle uppercase">{t.experience.achievements}</p>
                      <ul className="space-y-2 text-sm text-muted sm:text-base">
                        {exp.achievements.map((a, j) => (
                          <li key={j} className="flex gap-3">
                            <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                            {l(a)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {exp.technologies.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <li key={tech}>
                          <Tag>{tech}</Tag>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      )}
    </Section>
  )
}
