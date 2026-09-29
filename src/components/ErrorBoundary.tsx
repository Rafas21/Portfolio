import { Component, type ErrorInfo, type ReactNode } from 'react'
import { ui } from '@/i18n/ui'

interface State {
  hasError: boolean
}

/** Evita tela branca em caso de erro de renderização. */
export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Render error:', error, info.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children
    const t = ui[document.documentElement.lang.startsWith('pt') ? 'pt' : 'en'].error
    return (
      <main className="grid min-h-dvh place-items-center px-4 text-center">
        <div>
          <h1 className="text-2xl font-semibold">{t.title}</h1>
          <p className="mt-2 text-muted">{t.text}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-lg bg-fg px-4 py-2.5 text-sm font-medium text-bg"
          >
            {t.reload}
          </button>
        </div>
      </main>
    )
  }
}
