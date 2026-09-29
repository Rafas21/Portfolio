import type { ReactNode } from 'react'
import { BackToTop } from '@/components/BackToTop'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { useLanguage } from '@/hooks/useLanguage'

export function MainLayout({ children }: { children: ReactNode }) {
  const { t } = useLanguage()
  return (
    <>
      <a
        href="#main"
        className="fixed top-3 left-3 z-[60] -translate-y-20 rounded-lg bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform focus:translate-y-0"
      >
        {t.skipToContent}
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
