import { focusAreas } from '@/data/focusAreas'
import { useLanguage } from '@/hooks/useLanguage'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

export function Infrastructure() {
  const { t, l } = useLanguage()
  return (
    <Section id="infrastructure" eyebrow={t.infrastructure.eyebrow} title={t.infrastructure.title} intro={t.infrastructure.intro}>
      <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {focusAreas.map((area, i) => (
          <li key={area.id} className="bg-surface">
            <Reveal delay={(i % 5) * 0.04} className="h-full">
              <div className="group flex h-full flex-col p-5 transition-colors hover:bg-elevated">
                <span className="grid size-9 place-items-center rounded-lg border border-border bg-bg text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent">
                  <Icon name={area.icon} className="size-4" />
                </span>
                <h3 className="mt-4 font-medium">{l(area.title)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{l(area.description)}</p>
                <p className="mt-auto pt-4 font-mono text-[11px] leading-relaxed text-subtle">{area.topics.join(' · ')}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
