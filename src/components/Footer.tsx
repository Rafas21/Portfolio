import { Mail } from 'lucide-react'
import { profile } from '@/data/profile'
import { useLanguage } from '@/hooks/useLanguage'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'

export function Footer() {
  const { t, l } = useLanguage()
  const year = new Date().getFullYear()
  const iconLink = 'grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg'

  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{l(profile.headline)}</p>
        </div>
        <ul className="flex items-center gap-1">
          <li>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
              <LinkedinIcon className="size-4" />
            </a>
          </li>
          <li>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
              <GithubIcon className="size-4" />
            </a>
          </li>
          {profile.email && (
            <li>
              <a href={`mailto:${profile.email}`} aria-label={`Email: ${profile.email}`} className={iconLink}>
                <Mail className="size-4" aria-hidden />
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className="container-page mt-8 flex flex-col gap-2 border-t border-border pt-6 text-xs text-subtle sm:flex-row sm:justify-between">
        <p>
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  )
}
