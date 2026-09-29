import {
  Activity,
  Bot,
  Cloud,
  CodeXml,
  Container,
  Database,
  GitBranch,
  Globe,
  LayoutTemplate,
  Network,
  Server,
  ShieldCheck,
  SquareTerminal,
  Workflow,
  Wrench,
  type LucideProps,
} from 'lucide-react'
import type { ComponentType } from 'react'
import type { IconName } from '@/types'

const icons: Record<IconName, ComponentType<LucideProps>> = {
  server: Server,
  layout: LayoutTemplate,
  cloud: Cloud,
  database: Database,
  network: Network,
  wrench: Wrench,
  terminal: SquareTerminal,
  container: Container,
  git: GitBranch,
  workflow: Workflow,
  activity: Activity,
  shield: ShieldCheck,
  bot: Bot,
  globe: Globe,
  code: CodeXml,
}

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name]
  return <Component aria-hidden {...props} />
}
