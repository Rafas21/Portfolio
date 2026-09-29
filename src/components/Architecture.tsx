import { ArrowDown, ArrowRight, Boxes, Container, Database, GitCommitHorizontal, Globe, Hammer, Rocket, Server, ShieldCheck, TestTube2, User } from 'lucide-react'
import { useState, type ComponentType } from 'react'
import type { LucideProps } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import type { Localized } from '@/types'
import { cn } from '@/utils/cn'
import { Card } from './ui/Card'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

interface Node {
  id: string
  label: string
  icon: ComponentType<LucideProps>
  detail: Localized
}

/** Arquitetura de referência (ilustrativa). Ajuste para refletir um projeto real, se desejar. */
const requestFlow: Node[] = [
  {
    id: 'client',
    label: 'Client',
    icon: User,
    detail: { pt: 'Navegador ou cliente HTTP que consome a aplicação via HTTPS.', en: 'Browser or HTTP client consuming the application over HTTPS.' },
  },
  {
    id: 'dns',
    label: 'DNS / TLS',
    icon: Globe,
    detail: { pt: 'Resolução de nome para o servidor e certificado TLS para tráfego criptografado.', en: 'Name resolution to the server and a TLS certificate for encrypted traffic.' },
  },
  {
    id: 'nginx',
    label: 'Nginx',
    icon: ShieldCheck,
    detail: { pt: 'Proxy reverso: termina TLS, serve estáticos, aplica limites e encaminha para a API.', en: 'Reverse proxy: terminates TLS, serves static files, applies limits and forwards to the API.' },
  },
  {
    id: 'app',
    label: 'Application',
    icon: Server,
    detail: { pt: 'API stateless com regras de negócio, validação e logs estruturados.', en: 'Stateless API holding business rules, validation and structured logging.' },
  },
  {
    id: 'docker',
    label: 'Docker',
    icon: Container,
    detail: { pt: 'Cada serviço roda em um contêiner com imagem versionada e configuração via variáveis de ambiente.', en: 'Each service runs in a container from a versioned image, configured through environment variables.' },
  },
  {
    id: 'db',
    label: 'Database',
    icon: Database,
    detail: { pt: 'Banco relacional em rede privada, com volume persistente e backups.', en: 'Relational database on a private network, with a persistent volume and backups.' },
  },
]

const deliveryFlow: Node[] = [
  { id: 'commit', label: 'git push', icon: GitCommitHorizontal, detail: { pt: 'Alteração enviada para o repositório dispara o pipeline.', en: 'A change pushed to the repository triggers the pipeline.' } },
  { id: 'build', label: 'Build', icon: Hammer, detail: { pt: 'Instalação de dependências, lint e compilação.', en: 'Dependency install, linting and compilation.' } },
  { id: 'test', label: 'Test', icon: TestTube2, detail: { pt: 'Testes automatizados bloqueiam alterações com regressão.', en: 'Automated tests block changes that introduce regressions.' } },
  { id: 'image', label: 'Image', icon: Boxes, detail: { pt: 'Imagem de contêiner gerada e publicada em um registry com tag imutável.', en: 'Container image built and pushed to a registry with an immutable tag.' } },
  { id: 'deploy', label: 'Deploy', icon: Rocket, detail: { pt: 'Nova versão implantada com possibilidade de rollback para a anterior.', en: 'New version deployed with the ability to roll back to the previous one.' } },
]

function Flow({ nodes, direction, selected, onSelect, title }: { nodes: Node[]; direction: 'vertical' | 'horizontal'; selected: string; onSelect: (id: string) => void; title: string }) {
  const Arrow = direction === 'vertical' ? ArrowDown : ArrowRight
  return (
    <div>
      <h3 className="mb-4 font-mono text-xs tracking-wider text-subtle uppercase">{title}</h3>
      <ol className={cn('flex gap-2', direction === 'vertical' ? 'flex-col items-stretch' : 'flex-col sm:flex-row sm:flex-wrap sm:items-center')}>
        {nodes.map((node, i) => {
          const NodeIcon = node.icon
          const isSelected = selected === node.id
          return (
            <li key={node.id} className={cn('flex gap-2', direction === 'vertical' ? 'flex-col items-center' : 'flex-col items-center sm:flex-row')}>
              <button
                type="button"
                onClick={() => onSelect(node.id)}
                aria-pressed={isSelected}
                className={cn(
                  'flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-left font-mono text-sm transition-all',
                  direction === 'horizontal' && 'sm:w-auto',
                  isSelected
                    ? 'border-accent/60 bg-accent/10 text-fg'
                    : 'border-border bg-elevated text-muted hover:border-border-strong hover:text-fg',
                )}
              >
                <NodeIcon className={cn('size-4 shrink-0', isSelected ? 'text-accent' : 'text-subtle')} aria-hidden />
                {node.label}
              </button>
              {i < nodes.length - 1 && (
                <Arrow aria-hidden className={cn('size-4 shrink-0 text-subtle', direction === 'horizontal' && 'max-sm:rotate-90')} />
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export function Architecture() {
  const { t, l } = useLanguage()
  const [selected, setSelected] = useState('nginx')
  const all = [...requestFlow, ...deliveryFlow]
  const current = all.find((n) => n.id === selected) ?? requestFlow[0]

  return (
    <Section
      id="engineering"
      eyebrow={t.engineering.eyebrow}
      title={t.engineering.title}
      intro={t.engineering.intro}
      aside={<span className="self-start rounded-full border border-border px-3 py-1 font-mono text-xs text-subtle md:self-end">{t.engineering.badge}</span>}
    >
      <Reveal>
        <Card className="bg-grid overflow-hidden p-5 sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-14">
            <Flow nodes={requestFlow} direction="vertical" selected={selected} onSelect={setSelected} title={t.engineering.requestFlow} />
            <div className="flex flex-col gap-10">
              <Flow nodes={deliveryFlow} direction="horizontal" selected={selected} onSelect={setSelected} title={t.engineering.deliveryFlow} />
              <div aria-live="polite" className="mt-auto rounded-lg border border-border bg-bg/80 p-5 backdrop-blur-sm">
                <p className="font-mono text-xs text-subtle">
                  <span className="text-accent">$</span> describe <span className="text-fg">{current.label}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{l(current.detail)}</p>
                <p className="mt-4 text-xs text-subtle">{t.engineering.selectHint}</p>
              </div>
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  )
}
