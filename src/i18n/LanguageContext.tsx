import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Locale, Localized } from '@/types'
import { ui, type UIStrings } from './ui'
import { storage } from '@/utils/storage'

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: UIStrings
  /** Resolve um texto de conteúdo ({ pt, en }) para o idioma atual. */
  l: (value: Localized) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'locale'

function detectLocale(): Locale {
  const saved = storage.get(STORAGE_KEY)
  if (saved === 'pt' || saved === 'en') return saved
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en'
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    storage.set(STORAGE_KEY, next)
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: ui[locale], l: (v) => v[locale] }),
    [locale, setLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
