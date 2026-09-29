import { skillGroups } from '@/data/skills'
import { site } from '@/data/site'
import { useLanguage } from '@/hooks/useLanguage'
import { Card } from './ui/Card'
import { Icon } from './ui/Icon'
import { Placeholder } from './ui/Placeholder'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'
import { Tag } from './ui/Tag'

export function Skills() {
  const { t, l } = useLanguage()
  const groups = site.showPlaceholders
    ? skillGroups
    : skillGroups.filter((g) => g.professional.length + g.learning.length > 0)

  return (
    <Section
      id="skills"
      eyebrow={t.skills.eyebrow}
      title={t.skills.title}
      intro={t.skills.intro}
      aside={
        <div className="flex flex-wrap gap-4 text-xs text-muted">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="size-2 rounded-full bg-accent" /> {t.skills.professional}
          </span>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="size-2 rounded-full border border-dashed border-subtle" /> {t.skills.learning}
          </span>
        </div>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => {
          const empty = group.professional.length + group.learning.length === 0
          if (empty)
            return (
              <Reveal key={group.id} delay={i * 0.04}>
                <Placeholder file="src/data/skills.ts" title={l(group.title)} className="h-full" />
              </Reveal>
            )
          return (
            <Reveal key={group.id} delay={i * 0.04}>
              <Card className="h-full p-5 hover:border-border-strong">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg border border-border bg-elevated text-accent">
                    <Icon name={group.icon} className="size-4" />
                  </span>
                  <h3 className="font-medium">{l(group.title)}</h3>
                </div>
                {group.professional.length > 0 && (
                  <div>
                    <p className="sr-only">{t.skills.professional}</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {group.professional.map((s) => (
                        <li key={s}>
                          <Tag variant="accent">{s}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {group.learning.length > 0 && (
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="mb-2 text-xs text-subtle">{t.skills.learning}</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {group.learning.map((s) => (
                        <li key={s}>
                          <Tag variant="dashed">{s}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
