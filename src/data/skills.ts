import type { SkillGroup } from '@/types'

/**
 * Stack tecnológica.
 *
 * - professional: use somente o que você aplicou em trabalho ou em projetos concluídos.
 * - learning:     o que está estudando. Aparece em "Currently learning", separado.
 *
 * Grupos com as duas listas vazias ficam ocultos no site publicado.
 *
 * TODO(LinkedIn): preencher com as competências listadas no perfil.
 * Exemplos (NÃO confirmados — apenas formato):
 *   professional: ['Python', 'Java']
 *   learning: ['Kubernetes']
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    icon: 'server',
    title: { pt: 'Backend', en: 'Backend' },
    professional: [],
    learning: [],
  },
  {
    id: 'frontend',
    icon: 'layout',
    title: { pt: 'Frontend', en: 'Frontend' },
    professional: [],
    learning: [],
  },
  {
    id: 'devops-cloud',
    icon: 'cloud',
    title: { pt: 'DevOps / Cloud', en: 'DevOps / Cloud' },
    professional: [],
    learning: [],
  },
  {
    id: 'databases',
    icon: 'database',
    title: { pt: 'Bancos de dados', en: 'Databases' },
    professional: [],
    learning: [],
  },
  {
    id: 'networking',
    icon: 'network',
    title: { pt: 'Redes', en: 'Networking' },
    professional: [],
    learning: [],
  },
  {
    id: 'tools',
    icon: 'wrench',
    title: { pt: 'Ferramentas', en: 'Tools' },
    professional: [],
    learning: [],
  },
]
