export type Locale = 'pt' | 'en'

/** Texto traduzido. Todo conteúdo exibido no site passa por este tipo. */
export interface Localized {
  pt: string
  en: string
}

export interface SocialLinks {
  linkedin: string
  github: string
}

export interface Profile {
  name: string
  /** Título exibido no Hero. Confirme com o headline do LinkedIn. */
  headline: Localized
  /** Frase curta abaixo do título. */
  summary: Localized
  /** Parágrafos da seção "Sobre". */
  about: Localized[]
  /** Deixe vazio para ocultar. Nunca coloque endereço completo. */
  location: Localized | null
  /** Deixe vazio ('') para ocultar o e-mail do site. */
  email: string
  githubUsername: string
  social: SocialLinks
  /** Caminho para o CV em /public (ex.: '/cv-rafael-souza.pdf'). Vazio para ocultar. */
  resumeUrl: Localized | null
  /** Disponibilidade para oportunidades. null para ocultar. */
  availability: Localized | null
  /** Indicadores da seção Sobre. Adicione somente números comprováveis. */
  highlights: Highlight[]
}

export interface Highlight {
  value: string
  label: Localized
}

export type SkillLevel = 'professional' | 'learning'

export interface SkillGroup {
  id: string
  title: Localized
  icon: IconName
  /** Tecnologias usadas profissionalmente ou em projetos concluídos. */
  professional: string[]
  /** Tecnologias em estudo — exibidas separadamente para não sugerir experiência. */
  learning: string[]
}

export interface Experience {
  company: string
  role: Localized
  /** Formato 'AAAA-MM'. */
  start: string
  /** 'AAAA-MM' ou null para "Atual". */
  end: string | null
  location?: Localized
  employmentType?: Localized
  responsibilities: Localized[]
  /** Somente resultados com dados reais. */
  achievements?: Localized[]
  technologies: string[]
  url?: string
}

export type ProjectCategory = 'backend' | 'frontend' | 'devops' | 'cloud' | 'automation' | 'other'

export interface Project {
  name: string
  description: Localized
  problem: Localized
  architecture?: Localized
  categories: ProjectCategory[]
  technologies: string[]
  repoUrl?: string
  demoUrl?: string
  featured?: boolean
}

export interface Education {
  course: Localized
  institution: string
  start: string
  end: string | null
  /** Ex.: Tecnólogo, Bacharelado, Técnico. */
  degree?: Localized
  topics: Localized[]
}

export interface Certification {
  name: string
  issuer: string
  /** 'AAAA' ou 'AAAA-MM'. */
  date: string
  credentialUrl?: string
  credentialId?: string
}

export interface FocusArea {
  id: string
  icon: IconName
  title: Localized
  description: Localized
  topics: string[]
}

export type IconName =
  | 'server'
  | 'layout'
  | 'cloud'
  | 'database'
  | 'network'
  | 'wrench'
  | 'terminal'
  | 'container'
  | 'git'
  | 'workflow'
  | 'activity'
  | 'shield'
  | 'bot'
  | 'globe'
  | 'code'
