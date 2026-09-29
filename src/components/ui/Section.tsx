import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  intro?: ReactNode
  children: ReactNode
  className?: string
  aside?: ReactNode
}

/** Wrapper padrão de seção: âncora, cabeçalho e espaçamento consistentes. */
export function Section({ id, eyebrow, title, intro, children, className, aside }: SectionProps) {
  const headingId = `${id}-title`
  return (
    <section id={id} aria-labelledby={headingId} className={cn('border-t border-border py-20 sm:py-24', className)}>
      <div className="container-page">
        <Reveal>
          <header className="mb-10 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-xs font-medium tracking-wider text-accent uppercase">{eyebrow}</p>
              <h2 id={headingId} className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                {title}
              </h2>
              {intro && <p className="mt-3 text-base leading-relaxed text-muted text-pretty">{intro}</p>}
            </div>
            {aside}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
