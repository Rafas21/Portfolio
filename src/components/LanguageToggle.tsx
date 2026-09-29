import type { Locale } from '@/types'
import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/utils/cn'

const options: { value: Locale; label: string; name: string }[] = [
  { value: 'pt', label: 'PT', name: 'Português' },
  { value: 'en', label: 'EN', name: 'English' },
]

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage()
  return (
    <div role="group" aria-label={t.language.label} className="flex items-center rounded-lg border border-border p-0.5 font-mono text-xs">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          lang={opt.value === 'pt' ? 'pt-BR' : 'en'}
          aria-pressed={locale === opt.value}
          aria-label={opt.name}
          onClick={() => setLocale(opt.value)}
          className={cn(
            'rounded-md px-2 py-1 transition-colors',
            locale === opt.value ? 'bg-surface text-fg' : 'text-subtle hover:text-fg',
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
