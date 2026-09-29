import { lazy, Suspense } from 'react'
import Home from '@/pages/Home'

const NotFound = lazy(() => import('@/pages/NotFound'))

const KNOWN_PATHS = new Set(['/', '/index.html'])

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (!KNOWN_PATHS.has(path)) {
    return (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    )
  }
  return <Home />
}
