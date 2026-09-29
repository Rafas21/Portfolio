import type { Project, ProjectCategory } from '@/types'

/**
 * Projetos em destaque (com contexto: problema, arquitetura, tecnologias).
 * Os repositórios públicos também aparecem automaticamente na seção GitHub.
 *
 * TODO: adicionar projetos reais. Modelo:
 * {
 *   name: 'Nome do projeto',
 *   description: { pt: 'O que é.', en: 'What it is.' },
 *   problem: { pt: 'Problema resolvido.', en: 'Problem it solves.' },
 *   architecture: { pt: 'Nginx → API → PostgreSQL, em Docker Compose.', en: '...' },
 *   categories: ['backend', 'devops'],
 *   technologies: ['...'],
 *   repoUrl: 'https://github.com/Rafas21/...',
 *   demoUrl: '',
 *   featured: true,
 * },
 */
export const projects: Project[] = []

export const projectCategories: ProjectCategory[] = [
  'backend',
  'frontend',
  'devops',
  'cloud',
  'automation',
  'other',
]
