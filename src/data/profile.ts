import type { Profile } from '@/types'

/**
 * Dados pessoais. Edite este arquivo para alterar Hero, Sobre, Contato, Footer e SEO dinâmico.
 *
 * FONTE: GitHub público (nome, usuário) e URL do LinkedIn informada.
 * O conteúdo do LinkedIn NÃO pôde ser lido automaticamente — campos marcados com TODO
 * devem ser revisados com as informações reais do perfil.
 */
export const profile: Profile = {
  name: 'Rafael Souza',

  // TODO(LinkedIn): substituir pelo headline exato do LinkedIn.
  headline: {
    pt: 'Desenvolvedor de Software · Backend · DevOps · Cloud',
    en: 'Software Developer · Backend · DevOps · Cloud',
  },

  // TODO(LinkedIn): ajustar ao resumo real do perfil.
  summary: {
    pt: 'Desenvolvo aplicações backend e cuido do caminho até produção: versionamento, contêineres, pipelines e infraestrutura em Linux e cloud.',
    en: 'I build backend applications and care about the path to production: version control, containers, pipelines and infrastructure on Linux and the cloud.',
  },

  // TODO(LinkedIn): reescrever com a trajetória real (empresas, tempo de experiência, formação).
  about: [
    {
      pt: 'Sou desenvolvedor de software com foco em backend e em tudo o que envolve colocar uma aplicação em produção de forma confiável. Meu interesse está na interseção entre código e infraestrutura: APIs bem definidas, bancos de dados, ambientes Linux, redes e automação.',
      en: 'I am a software developer focused on backend development and on everything involved in running an application reliably in production. My interest lies where code meets infrastructure: well-defined APIs, databases, Linux environments, networking and automation.',
    },
    {
      pt: 'Gosto de problemas que exigem entender o sistema de ponta a ponta — da requisição que chega ao servidor até o dado persistido — e de transformar processos manuais em fluxos automatizados e reproduzíveis.',
      en: 'I enjoy problems that require understanding a system end to end — from the request hitting the server to the data being persisted — and turning manual processes into automated, reproducible workflows.',
    },
    {
      pt: 'Busco oportunidades como desenvolvedor backend, DevOps ou Cloud Engineer, no Brasil ou no exterior, em times que valorizem boas práticas de engenharia, documentação e entrega contínua.',
      en: 'I am looking for opportunities as a backend developer, DevOps or Cloud Engineer, in Brazil or abroad, on teams that value sound engineering practices, documentation and continuous delivery.',
    },
  ],

  // TODO(LinkedIn): informar cidade/país (ex.: { pt: 'São Paulo, Brasil', en: 'São Paulo, Brazil' }).
  location: null,

  // TODO: informar o e-mail profissional que deve aparecer publicamente.
  email: '',

  githubUsername: 'Rafas21',

  social: {
    linkedin: 'https://www.linkedin.com/in/rafael-souza-dev21/',
    github: 'https://github.com/Rafas21',
  },

  // TODO: adicionar o PDF em /public e informar o caminho, ex.: { pt: '/cv-pt.pdf', en: '/cv-en.pdf' }.
  resumeUrl: null,

  // TODO: confirmar disponibilidade (ex.: aberto a remoto / relocação para a Europa).
  availability: null,

  // Somente números comprováveis. Exemplo:
  // { value: '3+', label: { pt: 'anos de experiência', en: 'years of experience' } },
  highlights: [],
}
