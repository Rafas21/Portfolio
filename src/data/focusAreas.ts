import type { FocusArea } from '@/types'

/**
 * Seção DevOps / Cloud. Cada área lista as ferramentas usadas nas experiências profissionais
 * (ver src/data/experience.ts).
 */
export const focusAreas: FocusArea[] = [
  {
    id: 'linux',
    icon: 'terminal',
    title: { pt: 'Servidores', en: 'Servers' },
    description: {
      pt: 'Administração de servidores Linux (Ubuntu) e Windows, físicos e em VPS.',
      en: 'Administration of Linux (Ubuntu) and Windows servers, on-premises and on VPS.',
    },
    topics: ['Ubuntu', 'Windows Server', 'SSH', 'Active Directory'],
  },
  {
    id: 'containers',
    icon: 'container',
    title: { pt: 'Contêineres', en: 'Containers' },
    description: {
      pt: 'Conteinerização de aplicações e orquestração de contêineres.',
      en: 'Application containerization and container orchestration.',
    },
    topics: ['Docker', 'Kubernetes'],
  },
  {
    id: 'cicd',
    icon: 'workflow',
    title: { pt: 'CI/CD', en: 'CI/CD' },
    description: {
      pt: 'Construção e sustentação de pipelines de integração e entrega contínua.',
      en: 'Building and maintaining continuous integration and delivery pipelines.',
    },
    topics: ['GitHub Actions', 'Git', 'GitHub'],
  },
  {
    id: 'cloud',
    icon: 'cloud',
    title: { pt: 'Cloud', en: 'Cloud' },
    description: {
      pt: 'Infraestrutura em AWS e VPS, incluindo migração de servidores para a nuvem.',
      en: 'Infrastructure on AWS and VPS, including migrating servers to the cloud.',
    },
    topics: ['AWS', 'VPS', 'VPN'],
  },
  {
    id: 'monitoring',
    icon: 'activity',
    title: { pt: 'Monitoramento', en: 'Monitoring' },
    description: {
      pt: 'Métricas, logs e alertas de infraestrutura com monitoramento contínuo.',
      en: 'Infrastructure metrics, logs and alerts with continuous monitoring.',
    },
    topics: ['Grafana', 'Zabbix'],
  },
  {
    id: 'networking',
    icon: 'network',
    title: { pt: 'Redes', en: 'Networking' },
    description: {
      pt: 'Gerenciamento de redes corporativas cabeadas e sem fio.',
      en: 'Management of wired and wireless corporate networks.',
    },
    topics: ['WAN', 'LAN', 'WLAN', 'Ubiquiti UniFi'],
  },
  {
    id: 'security',
    icon: 'shield',
    title: { pt: 'Segurança', en: 'Security' },
    description: {
      pt: 'Regras de firewall, filtragem de conteúdo, controle de acesso e autenticação.',
      en: 'Firewall rules, content filtering, access control and authentication.',
    },
    topics: ['pfSense', 'Fortinet', 'SSL/TLS', 'Keycloak'],
  },
  {
    id: 'automation',
    icon: 'bot',
    title: { pt: 'Automação', en: 'Automation' },
    description: {
      pt: 'Automação de processos financeiros, de vendas e administrativos.',
      en: 'Automation of finance, sales and administrative processes.',
    },
    topics: ['Python', 'Power Automate'],
  },
  {
    id: 'backend',
    icon: 'server',
    title: { pt: 'Backend', en: 'Backend' },
    description: {
      pt: 'APIs RESTful e sistemas de grande escala para o setor público.',
      en: 'RESTful APIs and large-scale systems for the public sector.',
    },
    topics: ['Java', 'Spring', 'Python', 'Django'],
  },
  {
    id: 'support',
    icon: 'wrench',
    title: { pt: 'Suporte e ITSM', en: 'Support & ITSM' },
    description: {
      pt: 'Troubleshooting e suporte técnico N1 a N3, com help desk estruturado.',
      en: 'Troubleshooting and L1–L3 technical support with a structured help desk.',
    },
    topics: ['GLPI', 'Troubleshooting', 'N2/N3'],
  },
]

/** Tecnologias do headline do LinkedIn, exibidas no Hero. */
export const heroFocus = ['Linux', 'Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Python', 'Grafana', 'pfSense']
