import { useCallback, useEffect, useState } from 'react'
import { storage } from '@/utils/storage'

export type Theme = 'dark' | 'light'

/** O tema inicial é aplicado por um script inline em index.html (evita flash). */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#09090b' : '#ffffff')
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      storage.set('theme', next)
      return next
    })
  }, [])

  return { theme, toggle }
}
