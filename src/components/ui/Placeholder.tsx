import { FilePenLine } from 'lucide-react'
import type { ReactNode } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/utils/cn'

interface PlaceholderProps {
  /** Arquivo em src/data que deve ser editado. */
  file: string
  title: string
  children?: ReactNode
  className?: string
}

/**
 * Card tracejado indicando conteúdo pendente.
 * Só é renderizado quando site.showPlaceholders está ativo (dev por padrão).
 */
export function Placeholder({ file, title, children, className }: PlaceholderProps) {
  const { t } = useLanguage()
  return (
    <div
      className={cn(
        'flex flex-col gap-3 rounded-xl border border-dashed border-border-strong bg-surface/50 p-5 text-sm',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-medium text-fg">{title}</span>
        <span className="rounded-full border border-warning/40 bg-warning/10 px-2 py-0.5 font-mono text-[11px] text-warning">
          {t.placeholder.badge}
        </span>
      </div>
      {children && <div className="text-muted">{children}</div>}
      <p className="flex flex-wrap items-center gap-1.5 text-xs text-subtle">
        <FilePenLine className="size-3.5" aria-hidden />
        {t.placeholder.hint}
        <code className="rounded bg-elevated px-1.5 py-0.5 font-mono text-fg">{file}</code>
      </p>
    </div>
  )
}
