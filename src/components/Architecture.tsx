import { Activity, ArrowDown, ArrowRight, Boxes, Container, Database, GitCommitHorizontal, Globe, Hammer, Rocket, Server, ShieldCheck, TestTube2, User } from 'lucide-react'
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

/**
 * Arquitetura de referência (ilustrativa), montada com as ferramentas usadas nas experiências:
 * VPS/AWS, pfSense, Docker/Kubernetes, GitHub Actions, PostgreSQL/MySQL, Grafana/Zabbix.
 */
const requestFlow: Node[] = [
  {
    id: 'client',
    label: 'Client',
    icon: User,
    detail: { pt: 'Usuário ou sistema consumindo a aplicação via HTTPS.', en: 'A user or system consuming the application over HTTPS.' },
  },
  {
    id: 'dns',
    label: 'DNS / SSL',
    icon: Globe,
    detail: { pt: 'Resolução de nome e certificado SSL/TLS para tráfego criptografado.', en: 'Name resolution and an SSL/TLS certificate for encrypted traffic.' },
  },
  {
    id: 'firewall',
    label: 'Firewall · pfSense',
    icon: ShieldCheck,
    detail: { pt: 'Regras de firewall, whitelist/blacklist e VPN para acesso administrativo; só as portas necessárias ficam expostas.', en: 'Firewall rules, allow/deny lists and VPN for administrative access; only the required ports are exposed.' },
  },
  {
    id: 'k8s',
    label: 'Kubernetes',
    icon: Boxes,
    detail: { pt: 'Orquestra os contêineres: réplicas, reinício automático e atualização sem indisponibilidade.', en: 'Orchestrates containers: replicas, automatic restarts and zero-downtime updates.' },
  },
  {
    id: 'app',
    label: 'API · Docker',
    icon: Container,
    detail: { pt: 'API REST empacotada em imagem Docker, configurada por variáveis de ambiente, rodando em VPS ou AWS.', en: 'A REST API packaged as a Docker image, configured through environment variables, running on VPS or AWS.' },
  },
  {
    id: 'db',
    label: 'PostgreSQL / MySQL',
    icon: Database,
    detail: { pt: 'Banco relacional em rede privada, com volume persistente e backups.', en: 'Relational database on a private network, with a persistent volume and backups.' },
  },
  {
    id: 'monitoring',
    label: 'Grafana / Zabbix',
    icon: Activity,
    detail: { pt: 'Coleta métricas e logs de todas as camadas e dispara alertas antes que o usuário perceba o problema.', en: 'Collects metrics and logs from every layer and fires alerts before users notice a problem.' },
  },
]

const deliveryFlow: Node[] = [
  { id: 'commit', label: 'git push', icon: GitCommitHorizontal, detail: { pt: 'Alteração enviada ao GitHub dispara o workflow do GitHub Actions.', en: 'A change pushed to GitHub triggers the GitHub Actions workflow.' } },
  { id: 'build', label: 'Build', icon: Hammer, detail: { pt: 'Instalação de dependências, lint e compilação.', en: 'Dependency install, linting and compilation.' } },
  { id: 'test', label: 'Test', icon: TestTube2, detail: { pt: 'Testes unitários e de integração bloqueiam alterações com regressão.', en: 'Unit and integration tests block changes that introduce regressions.' } },
  { id: 'image', label: 'Docker image', icon: Server, detail: { pt: 'Imagem Docker gerada e publicada em um registry com tag imutável.', en: 'Docker image built and pushed to a registry with an immutable tag.' } },
  { id: 'deploy', label: 'Deploy', icon: Rocket, detail: { pt: 'Nova versão aplicada no cluster, com rollback para a anterior se necessário.', en: 'New version rolled out to the cluster, with rollback to the previous one if needed.' } },
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
  const [selected, setSelected] = useState('firewall')
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
