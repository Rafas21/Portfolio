import { GraduationCap } from 'lucide-react'
import { education } from '@/data/education'
import { site } from '@/data/site'
import { useLanguage } from '@/hooks/useLanguage'
import { formatPeriod } from '@/utils/date'
import { Card } from './ui/Card'
import { Placeholder } from './ui/Placeholder'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'
import { Tag } from './ui/Tag'

export function Education() {
  const { t, l, locale } = useLanguage()
  return (
    <Section id="education" eyebrow={t.education.eyebrow} title={t.education.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((ed, i) => (
          <Reveal key={ed.institution + ed.start} delay={i * 0.05}>
            <Card className="h-full p-6">
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-elevated text-accent">
                  <GraduationCap className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight">{l(ed.course)}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {ed.degree && <>{l(ed.degree)} · </>}
                    {ed.institution}
                  </p>
                  <p className="mt-1 font-mono text-xs text-subtle">{formatPeriod(ed.start, ed.end, locale, t.education.present)}</p>
                </div>
              </div>
              {ed.topics.length > 0 && (
                <div className="mt-5 border-t border-border pt-5">
                  <p className="mb-3 text-xs text-subtle">{t.education.topics}</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {ed.topics.map((topic) => (
                      <li key={topic.en}>
                        <Tag>{l(topic)}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          </Reveal>
        ))}
        {education.length === 0 && site.showPlaceholders && (
          <Placeholder file="src/data/education.ts" title={t.education.title}>
            Curso, instituição, período e principais conhecimentos (ex.: Análise e Desenvolvimento de Sistemas).
          </Placeholder>
        )}
      </div>
    </Section>
  )
}
