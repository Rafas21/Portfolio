import { site } from '@/data/site'
import { skillGroups } from '@/data/skills'
import { experiences } from '@/data/experience'
import { projects } from '@/data/projects'
import { education } from '@/data/education'
import { certifications } from '@/data/certifications'
import type { UIStrings } from '@/i18n/ui'

export type SectionId = keyof Omit<UIStrings['nav'], 'openMenu' | 'closeMenu' | 'primary'>

const hasSkills = skillGroups.some((g) => g.professional.length + g.learning.length > 0)

/**
 * Seções sem conteúdo ficam ocultas (e fora da navbar) no site publicado.
 * Em desenvolvimento aparecem com placeholders para facilitar o preenchimento.
 */
const visibility: Record<SectionId, boolean> = {
  about: true,
  skills: hasSkills || site.showPlaceholders,
  experience: experiences.length > 0 || site.showPlaceholders,
  projects: projects.length > 0 || site.showPlaceholders,
  engineering: true,
  infrastructure: true,
  education: education.length > 0 || site.showPlaceholders,
  certifications: certifications.length > 0 || site.showPlaceholders,
  github: true,
  contact: true,
}

const order: SectionId[] = [
  'about',
  'skills',
  'experience',
  'projects',
  'engineering',
  'infrastructure',
  'education',
  'certifications',
  'github',
  'contact',
]

export const visibleSections = order.filter((id) => visibility[id])

/** Itens da navbar (subconjunto para não poluir o menu). */
const navCandidates: SectionId[] = ['about', 'skills', 'experience', 'projects', 'infrastructure', 'education', 'github', 'contact']
export const navSections = navCandidates.filter((id) => visibility[id])

export const isVisible = (id: SectionId) => visibility[id]
