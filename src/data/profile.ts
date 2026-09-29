import type { Profile } from '@/types'
import { fullYearsSince } from '@/utils/experience'

/** Início da carreira em tecnologia (Grupo Pinauto). Usado no indicador de experiência. */
export const CAREER_START = '2022-11'

/**
 * Dados pessoais. Edite este arquivo para alterar Hero, Sobre, Contato e Footer.
 * Fontes: LinkedIn (linkedin.com/in/rafael-souza-dev21) e currículo.
 */
export const profile: Profile = {
  name: 'Rafael Souza',

  headline: {
    pt: 'Engenheiro DevOps · Cloud & Infraestrutura',
    en: 'DevOps Engineer · Cloud & Infrastructure',
  },

  summary: {
    pt: 'Administro servidores Linux e Windows, infraestrutura AWS, contêineres com Docker e Kubernetes e pipelines CI/CD no GitHub Actions — com base em redes, Python e automação.',
    en: 'I manage Linux and Windows servers, AWS infrastructure, containers with Docker and Kubernetes, and CI/CD pipelines on GitHub Actions — built on a foundation of networking, Python and automation.',
  },

  about: [
    {
      pt: 'Sou Analista DevOps na Terrano Urbanismo, em Goiânia, e trabalho com tecnologia desde 2022. Comecei no suporte técnico e na infraestrutura de redes, passei pelo desenvolvimento de software e hoje concentro minha atuação em DevOps e infraestrutura em nuvem.',
      en: 'I am a DevOps Analyst at Terrano Urbanismo in Goiânia, Brazil, and have worked in technology since 2022. I started in technical support and network infrastructure, moved through software development, and now focus on DevOps and cloud infrastructure.',
    },
    {
      pt: 'No dia a dia trabalho com Linux, redes, Git e Python. Administro servidores Linux e Windows, AWS e VPS, contêineres com Docker e Kubernetes, pipelines no GitHub Actions, firewalls pfSense e Fortinet e monitoramento com Grafana e Zabbix. Como desenvolvedor, atuei com Java/Spring, React e APIs REST em um sistema de benefícios do Estado de Goiás.',
      en: 'Day to day I work with Linux, networking, Git and Python. I manage Linux and Windows servers, AWS and VPS hosts, containers with Docker and Kubernetes, GitHub Actions pipelines, pfSense and Fortinet firewalls, and monitoring with Grafana and Zabbix. As a developer, I worked with Java/Spring, React and REST APIs on a public benefits system for the State of Goiás.',
    },
    {
      pt: 'Gosto de aprender na prática e de entender o porquê por trás de cada ferramenta, não só o como. Meu foco é entregar infraestrutura de forma automatizada, confiável e escalável — e transformar processos manuais em fluxos automatizados.',
      en: 'I learn best by doing and like to understand the why behind each tool, not just the how. My focus is delivering infrastructure that is automated, reliable and scalable — and turning manual processes into automated workflows.',
    },
  ],

  location: { pt: 'Goiânia, GO, Brasil', en: 'Goiânia, Brazil' },

  email: 'fael62485@gmail.com',

  githubUsername: 'Rafas21',

  social: {
    linkedin: 'https://www.linkedin.com/in/rafael-souza-dev21/',
    github: 'https://github.com/Rafas21',
  },

  // Para oferecer download do CV: coloque o PDF em /public e informe o caminho,
  // ex.: { pt: '/cv-rafael-souza-pt.pdf', en: '/cv-rafael-souza-en.pdf' }.
  resumeUrl: null,

  // Ex.: { pt: 'Aberto a oportunidades · híbrido, remoto ou presencial', en: 'Open to opportunities · hybrid, remote or on-site' }
  availability: null,

  highlights: [
    {
      value: `${fullYearsSince(CAREER_START)}+`,
      label: { pt: 'anos em tecnologia', en: 'years in tech' },
    },
    { value: '4', label: { pt: 'empresas', en: 'companies' } },
    { value: 'ADS', label: { pt: 'tecnólogo · Anhanguera', en: 'systems development degree' } },
    { value: 'B1', label: { pt: 'inglês', en: 'English level' } },
  ],

  languages: [
    { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'Nativo', en: 'Native' } },
    { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'Intermediário (B1)', en: 'Intermediate (B1)' } },
    { name: { pt: 'Espanhol', en: 'Spanish' }, level: { pt: 'Básico (A2)', en: 'Elementary (A2)' } },
    { name: { pt: 'Francês', en: 'French' }, level: { pt: 'Iniciante (A1)', en: 'Beginner (A1)' } },
  ],

  // Conforme o LinkedIn: "estou expandindo meu conhecimento em Docker, banco de dados e AWS".
  currentlyLearning: [
    { pt: 'Docker', en: 'Docker' },
    { pt: 'Bancos de dados', en: 'Databases' },
    { pt: 'AWS', en: 'AWS' },
  ],
}
