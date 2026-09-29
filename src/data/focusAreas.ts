import type { FocusArea } from '@/types'

/**
 * Áreas de foco (seção DevOps / Cloud).
 * Descrevem o escopo de atuação/interesse informado — não afirmam nível de experiência.
 * Os tópicos são conceitos da área; ajuste para refletir exatamente o que você domina.
 */
export const focusAreas: FocusArea[] = [
  {
    id: 'linux',
    icon: 'terminal',
    title: { pt: 'Linux', en: 'Linux' },
    description: {
      pt: 'Administração de servidores, shell, permissões, serviços e processos.',
      en: 'Server administration, shell, permissions, services and processes.',
    },
    topics: ['Shell', 'systemd', 'SSH', 'Permissions'],
  },
  {
    id: 'containers',
    icon: 'container',
    title: { pt: 'Contêineres', en: 'Containers' },
    description: {
      pt: 'Empacotamento de aplicações em imagens reproduzíveis e ambientes isolados.',
      en: 'Packaging applications as reproducible images and isolated environments.',
    },
    topics: ['Docker', 'Dockerfile', 'Compose'],
  },
  {
    id: 'web-server',
    icon: 'globe',
    title: { pt: 'Servidores web', en: 'Web servers' },
    description: {
      pt: 'Proxy reverso, TLS e roteamento de tráfego para aplicações.',
      en: 'Reverse proxying, TLS and traffic routing to applications.',
    },
    topics: ['Nginx', 'Reverse proxy', 'HTTPS'],
  },
  {
    id: 'git',
    icon: 'git',
    title: { pt: 'Git / GitHub', en: 'Git / GitHub' },
    description: {
      pt: 'Versionamento, branches, pull requests e revisão de código.',
      en: 'Version control, branching, pull requests and code review.',
    },
    topics: ['Git', 'GitHub', 'Pull requests'],
  },
  {
    id: 'cicd',
    icon: 'workflow',
    title: { pt: 'CI/CD', en: 'CI/CD' },
    description: {
      pt: 'Pipelines de build, teste e deploy automatizados a cada alteração.',
      en: 'Automated build, test and deploy pipelines on every change.',
    },
    topics: ['Pipelines', 'Build', 'Deploy'],
  },
  {
    id: 'cloud',
    icon: 'cloud',
    title: { pt: 'Cloud', en: 'Cloud' },
    description: {
      pt: 'Computação, armazenamento e rede em provedores de nuvem.',
      en: 'Compute, storage and networking on cloud providers.',
    },
    topics: ['Compute', 'Storage', 'IAM'],
  },
  {
    id: 'networking',
    icon: 'network',
    title: { pt: 'Redes', en: 'Networking' },
    description: {
      pt: 'Fundamentos que sustentam a comunicação entre serviços.',
      en: 'The fundamentals behind service-to-service communication.',
    },
    topics: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'Firewall'],
  },
  {
    id: 'monitoring',
    icon: 'activity',
    title: { pt: 'Monitoramento', en: 'Monitoring' },
    description: {
      pt: 'Logs, métricas e alertas para saber o que acontece em produção.',
      en: 'Logs, metrics and alerts to know what happens in production.',
    },
    topics: ['Logs', 'Metrics', 'Alerts'],
  },
  {
    id: 'security',
    icon: 'shield',
    title: { pt: 'Segurança', en: 'Security' },
    description: {
      pt: 'Menor privilégio, gestão de segredos e superfície de ataque reduzida.',
      en: 'Least privilege, secrets management and a reduced attack surface.',
    },
    topics: ['Least privilege', 'Secrets', 'Hardening'],
  },
  {
    id: 'automation',
    icon: 'bot',
    title: { pt: 'Automação', en: 'Automation' },
    description: {
      pt: 'Scripts e ferramentas para eliminar tarefas manuais e repetitivas.',
      en: 'Scripts and tooling to remove manual, repetitive work.',
    },
    topics: ['Scripting', 'Scheduled jobs', 'IaC'],
  },
]

/** Tecnologias exibidas no Hero (áreas de foco, não lista de experiência). */
export const heroFocus = ['Backend', 'APIs', 'Linux', 'Docker', 'CI/CD', 'Cloud', 'Networking']
