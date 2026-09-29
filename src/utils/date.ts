import type { Locale } from '@/types'

/** Formata 'AAAA' ou 'AAAA-MM' como "jan. 2024" / "Jan 2024". */
export function formatYearMonth(value: string, locale: Locale) {
  const [year, month] = value.split('-').map(Number)
  if (!month) return String(year)
  return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-GB', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(year, month - 1, 1))
}

export function formatPeriod(start: string, end: string | null, locale: Locale, presentLabel: string) {
  return `${formatYearMonth(start, locale)} — ${end ? formatYearMonth(end, locale) : presentLabel}`
}

export function formatDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(iso))
}
