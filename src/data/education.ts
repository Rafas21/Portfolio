import type { Education } from '@/types'

/**
 * Formação acadêmica.
 * TODO(LinkedIn): preencher curso, instituição e período.
 *
 * Modelo (ex.: Análise e Desenvolvimento de Sistemas):
 * {
 *   course: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis and Development' },
 *   degree: { pt: 'Tecnólogo', en: "Associate's degree (Technology)" },
 *   institution: 'Nome da instituição',
 *   start: '2022-02',
 *   end: '2024-12',
 *   topics: [
 *     { pt: 'Engenharia de software', en: 'Software engineering' },
 *     { pt: 'Banco de dados', en: 'Databases' },
 *     { pt: 'Redes de computadores', en: 'Computer networks' },
 *   ],
 * },
 */
export const education: Education[] = []
