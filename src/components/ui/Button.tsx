import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98]'

const variants: Record<Variant, string> = {
  primary: 'bg-fg text-bg hover:opacity-90 shadow-sm',
  secondary: 'border border-border bg-elevated text-fg hover:border-border-strong hover:bg-surface',
  ghost: 'text-muted hover:text-fg hover:bg-surface',
}

export function buttonClasses(variant: Variant = 'primary', className?: string) {
  return cn(base, variants[variant], className)
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  external?: boolean
}

export function LinkButton({ variant = 'primary', external, className, ...props }: LinkButtonProps) {
  return (
    <a
      className={buttonClasses(variant, className)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    />
  )
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

export function Button({ variant = 'primary', className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, className)} {...props} />
}
