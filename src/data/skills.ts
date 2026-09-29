import type { SkillGroup } from '@/types'

/**
 * Stack tecnológica, com base nas experiências do LinkedIn e do currículo.
 *
 * - professional: tecnologias usadas em trabalho (ver src/data/experience.ts).
 * - learning:     em estudo, sem experiência profissional. Exibido separadamente.
 *
 * O que está sendo aprofundado (Docker, bancos de dados, AWS) fica em profile.currentlyLearning.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'devops-cloud',
    icon: 'cloud',
    title: { pt: 'DevOps / Cloud', en: 'DevOps / Cloud' },
    professional: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'AWS', 'VPS', 'Grafana', 'Zabbix'],
    learning: [],
  },
  {
    id: 'systems',
    icon: 'terminal',
    title: { pt: 'Sistemas operacionais', en: 'Operating systems' },
    professional: ['Linux', 'Ubuntu Server', 'Windows Server', 'Active Directory', 'SSH'],
    learning: [],
  },
  {
    id: 'networking',
    icon: 'network',
    title: { pt: 'Redes e segurança', en: 'Networking & security' },
    professional: ['WAN / LAN / WLAN', 'pfSense', 'Fortinet', 'Ubiquiti UniFi', 'VPN', 'SSL/TLS', 'Keycloak'],
    learning: [],
  },
  {
    id: 'backend',
    icon: 'server',
    title: { pt: 'Backend', en: 'Backend' },
    professional: ['Python', 'Django', 'Java', 'Spring', 'REST APIs', 'Unit & integration tests'],
    learning: [],
  },
  {
    id: 'databases',
    icon: 'database',
    title: { pt: 'Bancos de dados', en: 'Databases' },
    professional: ['PostgreSQL', 'MySQL', 'SQL'],
    learning: [],
  },
  {
    id: 'frontend',
    icon: 'layout',
    title: { pt: 'Frontend', en: 'Frontend' },
    professional: ['React', 'AngularJS', 'BI dashboards'],
    learning: [],
  },
  {
    id: 'tools',
    icon: 'wrench',
    title: { pt: 'Ferramentas e práticas', en: 'Tools & practices' },
    professional: ['Git', 'GitHub', 'GLPI', 'Power Automate', 'Scrum', 'Kanban'],
    learning: [],
  },
]
