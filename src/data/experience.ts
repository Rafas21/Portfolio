import type { Experience } from '@/types'

/**
 * Experiência profissional — mais recente primeiro.
 * TODO(LinkedIn): preencher com as experiências do perfil. Não adicione métricas sem dados.
 *
 * Modelo:
 * {
 *   company: 'Nome da empresa',
 *   role: { pt: 'Cargo', en: 'Job title' },
 *   start: '2024-01',
 *   end: null, // null = atual
 *   location: { pt: 'Cidade, Brasil', en: 'City, Brazil' },
 *   employmentType: { pt: 'Tempo integral', en: 'Full-time' },
 *   responsibilities: [{ pt: '...', en: '...' }],
 *   achievements: [],
 *   technologies: ['...'],
 * },
 */
export const experiences: Experience[] = []
