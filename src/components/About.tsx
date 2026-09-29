import { Briefcase, Globe2, MapPin, Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'
import { profile } from '@/data/profile'
import { site } from '@/data/site'
import { useLanguage } from '@/hooks/useLanguage'
import { Card } from './ui/Card'
import { Placeholder } from './ui/Placeholder'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

function Fact({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 text-subtle">{icon}</span>
      <div>
        <dt className="text-xs text-subtle">{label}</dt>
        <dd className="mt-0.5 text-sm text-fg">{children}</dd>
      </div>
    </div>
  )
}

export function About() {
  const { t, l } = useLanguage()

  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title}>
      <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16 [&>*]:min-w-0">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted text-pretty sm:text-lg">
            {profile.about.map((p, i) => (
              <p key={i}>{l(p)}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="p-6">
            <h3 className="mb-5 font-mono text-xs tracking-wider text-subtle uppercase">{t.about.quickFacts}</h3>
            <dl className="space-y-4">
              <Fact icon={<Briefcase className="size-4" aria-hidden />} label={t.about.role}>
                {l(profile.headline)}
              </Fact>
              {profile.location && (
                <Fact icon={<MapPin className="size-4" aria-hidden />} label={t.about.location}>
                  {l(profile.location)}
                </Fact>
              )}
              {profile.availability && (
                <Fact icon={<Sparkles className="size-4" aria-hidden />} label={t.about.availability}>
                  {l(profile.availability)}
                </Fact>
              )}
              <Fact icon={<Globe2 className="size-4" aria-hidden />} label={t.about.languages}>
                Português · English
              </Fact>
            </dl>
          </Card>
        </Reveal>
      </div>

      {profile.highlights.length > 0 ? (
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {profile.highlights.map((h) => (
            <div key={h.value + h.label.en} className="bg-surface p-5">
              <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">{h.value}</dd>
              <dt className="mt-1 text-sm text-muted">{l(h.label)}</dt>
            </div>
          ))}
        </dl>
      ) : (
        site.showPlaceholders && (
          <Placeholder className="mt-12" file="src/data/profile.ts → highlights" title="Highlights">
            Anos de experiência, nº de projetos, formação — apenas números comprováveis.
          </Placeholder>
        )
      )}
    </Section>
  )
}
