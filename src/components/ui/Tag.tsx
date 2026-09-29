import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export function Tag({ children, className, variant = 'default' }: { children: ReactNode; className?: string; variant?: 'default' | 'accent' | 'dashed' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 font-mono text-xs leading-5',
        variant === 'default' && 'border-border bg-elevated text-muted',
        variant === 'accent' && 'border-accent/30 bg-accent/10 text-accent',
        variant === 'dashed' && 'border-dashed border-border-strong text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
