import type { Education } from '@/types'

/** Formação acadêmica. Fontes: LinkedIn e currículo. */
export const education: Education[] = [
  {
    course: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis and Development' },
    degree: { pt: 'Tecnólogo (graduação)', en: 'Higher-education Technologist degree' },
    institution: 'Anhanguera Educacional',
    start: '2022-01',
    end: '2025-12',
    // Áreas do currículo do curso de ADS. Ajuste se quiser destacar outras disciplinas.
    topics: [
      { pt: 'Engenharia de software', en: 'Software engineering' },
      { pt: 'Análise e modelagem de sistemas', en: 'Systems analysis and modeling' },
      { pt: 'Programação e algoritmos', en: 'Programming and algorithms' },
      { pt: 'Banco de dados e SQL', en: 'Databases and SQL' },
      { pt: 'Redes de computadores', en: 'Computer networks' },
      { pt: 'Desenvolvimento web', en: 'Web development' },
      { pt: 'Metodologias ágeis', en: 'Agile methodologies' },
    ],
  },
]
