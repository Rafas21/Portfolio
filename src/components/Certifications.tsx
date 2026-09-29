import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '@/data/certifications'
import { site } from '@/data/site'
import { useLanguage } from '@/hooks/useLanguage'
import { formatYearMonth } from '@/utils/date'
import { Card } from './ui/Card'
import { Placeholder } from './ui/Placeholder'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

export function Certifications() {
  const { t, locale } = useLanguage()
  return (
    <Section id="certifications" eyebrow={t.certifications.eyebrow} title={t.certifications.title}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <li key={cert.name}>
            <Reveal delay={i * 0.04} className="h-full">
              <Card className="flex h-full flex-col p-5 hover:border-border-strong">
                <Award className="size-5 text-accent" aria-hidden />
                <h3 className="mt-4 font-medium">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                <p className="mt-1 font-mono text-xs text-subtle">
                  {formatYearMonth(cert.date, locale)}
                  {cert.credentialId && ` · ${t.certifications.id}: ${cert.credentialId}`}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm text-accent hover:underline"
                  >
                    {t.certifications.verify}
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                )}
              </Card>
            </Reveal>
          </li>
        ))}
        {certifications.length === 0 && site.showPlaceholders && (
          <li>
            <Placeholder file="src/data/certifications.ts" title={t.certifications.title}>
              Somente certificações existentes no LinkedIn. A seção fica oculta em produção se estiver vazia.
            </Placeholder>
          </li>
        )}
      </ul>
    </Section>
  )
}
