import type { Experience } from '@/types'

/**
 * Experiência profissional — mais recente primeiro.
 * Fontes: LinkedIn (cargos, períodos, descrições) e currículo (detalhes técnicos).
 * Adicione conquistas em `achievements` somente com dados reais.
 */

const fullTime = { pt: 'Tempo integral', en: 'Full-time' }
const onSite = { pt: 'Presencial', en: 'On-site' }
const goiania = { pt: 'Goiânia, GO', en: 'Goiânia, Brazil' }

export const experiences: Experience[] = [
  {
    company: 'Terrano Urbanismo',
    role: { pt: 'Analista de DevOps', en: 'DevOps Analyst' },
    start: '2026-06',
    end: null,
    location: goiania,
    employmentType: fullTime,
    workplace: onSite,
    summary: {
      pt: 'Responsável pelas decisões de tecnologia da empresa: implantação de aplicações internas como GLPI (Help Desk) e Booked, sistemas de logs e consultas com integrações ao Grafana e Zabbix, e definição do ciclo de vida de servidores físicos e em nuvem (VPS, Linux Server e AWS).',
      en: "Responsible for the company's technology decisions: rolling out internal applications such as GLPI (help desk) and Booked, logging and reporting systems integrated with Grafana and Zabbix, and defining the lifecycle of physical and cloud servers (VPS, Linux Server and AWS).",
    },
    responsibilities: [
      { pt: 'Administração de servidores Linux (Ubuntu) e Windows.', en: 'Administration of Linux (Ubuntu) and Windows servers.' },
      { pt: 'Gerenciamento de infraestrutura AWS e conexões VPN.', en: 'Management of AWS infrastructure and VPN connections.' },
      { pt: 'Implantação de servidores via VPS, com acesso SSH e certificados SSL.', en: 'Provisioning of VPS servers with SSH access and SSL certificates.' },
      { pt: 'Conteinerização de aplicações com Docker e orquestração com Kubernetes.', en: 'Containerization of applications with Docker and orchestration with Kubernetes.' },
      { pt: 'Implementação e manutenção de pipelines de CI/CD com GitHub Actions.', en: 'Implementation and maintenance of CI/CD pipelines with GitHub Actions.' },
      { pt: 'Gerenciamento de redes WAN, LAN e WLAN e de regras de firewall no pfSense e Fortinet, incluindo whitelist/blacklist e filtragem de conteúdo.', en: 'Management of WAN, LAN and WLAN networks and firewall rules on pfSense and Fortinet, including allow/deny lists and content filtering.' },
      { pt: 'Gerenciamento de soluções Ubiquiti UniFi para otimização das redes Wi-Fi.', en: 'Management of Ubiquiti UniFi solutions to optimize Wi-Fi networks.' },
      { pt: 'Troubleshooting de infraestrutura, redes e sistemas; suporte técnico N2 e N3.', en: 'Troubleshooting across infrastructure, networks and systems; L2 and L3 technical support.' },
    ],
    technologies: ['Linux', 'Ubuntu', 'Windows Server', 'AWS', 'VPS', 'VPN', 'Docker', 'Kubernetes', 'GitHub Actions', 'pfSense', 'Fortinet', 'Ubiquiti UniFi', 'Grafana', 'Zabbix', 'GLPI'],
  },
  {
    company: 'CAST',
    role: { pt: 'Desenvolvedor Pleno', en: 'Software Developer (Mid-level)' },
    start: '2025-10',
    end: '2026-06',
    location: goiania,
    employmentType: fullTime,
    workplace: { pt: 'Híbrido', en: 'Hybrid' },
    summary: {
      pt: 'Desenvolvimento, arquitetura e suporte de um sistema de visualização de dados de controle de benefícios do Estado de Goiás, incluindo o benefício Passe Livre. Participação em um projeto de controladoria para visualização de fontes de renda da Secretaria de Desenvolvimento do Estado de Goiás, voltado a controle de caixa e aprovação em auditorias.',
      en: 'Development, architecture and support of a data visualization system for public benefits of the State of Goiás, including the Passe Livre transit benefit. Contributed to a financial controllership project for the State Development Department of Goiás, supporting cash control and audit approval.',
    },
    responsibilities: [
      { pt: 'Desenvolvimento com Java/Spring e APIs RESTful para sistemas de benefícios em larga escala.', en: 'Development with Java/Spring and RESTful APIs for large-scale benefits systems.' },
      { pt: 'Integração do sistema com a camada de segurança via Keycloak e front-end em React.', en: 'Integration with the security layer through Keycloak and a React front end.' },
      { pt: 'Criação de páginas e integração com painéis de BI para visualização de dados.', en: 'Built pages and integrated BI dashboards for data visualization.' },
      { pt: 'Testes unitários e de integração; controle de versão com Git e GitHub.', en: 'Unit and integration testing; version control with Git and GitHub.' },
      { pt: 'Administração de bancos de dados SQL e melhorias no monitoramento e alertas.', en: 'SQL database administration and improvements to monitoring and alerting.' },
      { pt: 'Suporte aos usuários do sistema e liderança em projetos e reuniões de equipe, com Scrum e Kanban.', en: 'User support and leadership in projects and team meetings, using Scrum and Kanban.' },
    ],
    technologies: ['Java', 'Spring', 'React', 'REST APIs', 'Keycloak', 'SQL', 'BI', 'Git', 'GitHub', 'Scrum', 'Kanban'],
  },
  {
    company: 'OM Incorporadora',
    role: { pt: 'Auxiliar de TI', en: 'IT Assistant' },
    start: '2025-04',
    end: '2025-10',
    location: goiania,
    employmentType: fullTime,
    workplace: onSite,
    summary: {
      pt: 'Responsável pelo controle de patrimônio de equipamentos eletrônicos, cadastro de novos usuários e suporte técnico N2, além do desenvolvimento de um ambiente para comunicação entre as áreas que facilitou o fluxo de contratos e a liberação de verbas.',
      en: 'Responsible for IT asset control, onboarding of new users and L2 technical support, and built a shared environment between departments that streamlined contract workflows and budget approvals.',
    },
    responsibilities: [
      { pt: 'Administração do Active Directory.', en: 'Active Directory administration.' },
      { pt: 'Lançamento de notas fiscais no sistema UAU.', en: 'Invoice processing in the UAU ERP system.' },
      { pt: 'Suporte aos usuários e aos sistemas da empresa.', en: 'Support for users and company systems.' },
      { pt: 'Manutenção de equipamentos e softwares como AutoCAD, Office e Adobe Acrobat.', en: 'Maintenance of equipment and software such as AutoCAD, Office and Adobe Acrobat.' },
      { pt: 'Participação em projetos de implementação e inovação.', en: 'Participation in implementation and innovation projects.' },
    ],
    technologies: ['Active Directory', 'Windows', 'UAU ERP', 'Microsoft Office'],
  },
  {
    company: 'Grupo Pinauto',
    role: { pt: 'Suporte Técnico', en: 'IT Support Technician' },
    start: '2022-11',
    end: '2025-01',
    location: goiania,
    employmentType: fullTime,
    workplace: onSite,
    summary: {
      pt: 'Responsável pela tecnologia na área financeira: automação de processos longos de pagamento e vínculos bancários, com foco em segurança contra fraudes e erros. Suporte N1 e N2, criação de usuários e controle de permissões, treinamento da área comercial e apoio à diretoria em problemas de rede.',
      en: 'Responsible for technology in the finance department: automated long-running payment and bank-linking processes, with a focus on preventing fraud and errors. L1 and L2 support, user provisioning and access control, training for the sales team and network support for senior management.',
    },
    responsibilities: [
      { pt: 'Desenvolvimento em Python para automação de processos financeiros e de vendas, incluindo conciliação bancária e integração de pagamentos PIX.', en: 'Python development to automate finance and sales processes, including bank reconciliation and PIX payment integration.' },
      { pt: 'Migração de servidores para a AWS, com monitoramento 24h via Grafana.', en: 'Migration of servers to AWS, with 24/7 monitoring through Grafana.' },
      { pt: 'Práticas de integração e entrega contínua (CI/CD) no desenvolvimento.', en: 'Continuous integration and delivery (CI/CD) practices in development.' },
      { pt: 'Gerenciamento de redes WAN, LAN e WLAN, firewall pfSense e soluções Ubiquiti UniFi.', en: 'Management of WAN, LAN and WLAN networks, pfSense firewall and Ubiquiti UniFi solutions.' },
      { pt: 'Administração do Active Directory.', en: 'Active Directory administration.' },
      { pt: 'Suporte a sistemas do setor automotivo (Dealernet, MobiAuto, Auto Avaliar) e participação em projetos com a ViaNuvem.', en: 'Support for automotive-industry systems (Dealernet, MobiAuto, Auto Avaliar) and participation in projects with ViaNuvem.' },
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'MySQL', 'AngularJS', 'AWS', 'Hostinger VPS', 'Docker', 'Grafana', 'pfSense', 'Fortinet', 'Ubiquiti UniFi', 'Active Directory', 'Linux', 'Windows'],
  },
]
