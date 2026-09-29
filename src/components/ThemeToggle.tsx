import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useLanguage()
  const label = theme === 'dark' ? t.theme.toLight : t.theme.toDark
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg"
    >
      {theme === 'dark' ? <Sun className="size-4" aria-hidden /> : <Moon className="size-4" aria-hidden />}
    </button>
  )
}
