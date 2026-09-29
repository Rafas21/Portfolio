import { ArrowUp } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/utils/cn'

export function BackToTop() {
  const { t } = useLanguage()
  const visible = useScrolled(600)
  return (
    <a
      href="#top"
      aria-label={t.backToTop}
      title={t.backToTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        'fixed right-4 bottom-4 z-40 grid size-11 place-items-center rounded-full border border-border bg-elevated/90 text-muted shadow-lg backdrop-blur transition-all duration-300 hover:text-fg sm:right-6 sm:bottom-6',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <ArrowUp className="size-4" aria-hidden />
    </a>
  )
}
