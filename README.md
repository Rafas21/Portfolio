# Rafael Souza — Portfolio

Portfólio profissional (PT/EN) com foco em desenvolvimento de software, backend, DevOps e cloud.

- **LinkedIn:** https://www.linkedin.com/in/rafael-souza-dev21/
- **GitHub:** https://github.com/Rafas21

## Tecnologias

| Camada | Escolha | Motivo |
| --- | --- | --- |
| Build | **Vite** | Build estático rápido; o site não precisa de SSR nem de backend. |
| UI | **React 19 + TypeScript** | Componentes tipados e reutilizáveis. |
| Estilo | **Tailwind CSS v4** | Tokens de tema (dark/light) em CSS variables, sem CSS morto. |
| Ícones | **Lucide** | Tree-shaking: só os ícones usados entram no bundle. |
| Animações | **IntersectionObserver + CSS** | Fade-in ao rolar sem biblioteca extra. Framer Motion foi avaliado e removido: adicionava ~27 KB gzip para um único efeito. |
| Fontes | **Inter / JetBrains Mono** (self-hosted via Fontsource) | Sem requisição ao Google Fonts; `unicode-range` baixa só o necessário. |
| i18n | Contexto React próprio | Dois idiomas não justificam uma biblioteca. |

Não há roteador: a página única usa âncoras, e qualquer outro caminho renderiza a página 404.

## Como instalar e executar

Requisitos: Node.js 20.19+ (ou 22+) e npm.

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # typecheck + build em dist/ + gera dist/404.html
npm run preview    # serve o build em http://localhost:4173
npm run typecheck  # apenas verificação de tipos
```

## Estrutura do projeto

```
public/                 favicon, og-image, robots.txt, sitemap.xml, manifest
scripts/postbuild.mjs   copia index.html → 404.html
src/
├── components/         seções do site (Hero, About, Skills, Experience, Projects,
│   │                   Architecture, Infrastructure, Education, Certifications,
│   │                   GitHub, Contact, Footer, Navbar…)
│   └── ui/             primitivas reutilizáveis (Section, Card, Tag, Button, Reveal,
│                       Placeholder, Skeleton, ícones)
├── data/               ← TODO o conteúdo pessoal fica aqui
│   ├── profile.ts        nome, headline, resumo, sobre, e-mail, links, localização
│   ├── skills.ts         stack: professional vs. currently learning
│   ├── experience.ts     timeline profissional
│   ├── projects.ts       projetos em destaque + categorias de filtro
│   ├── education.ts      formação
│   ├── certifications.ts certificações
│   ├── focusAreas.ts     áreas de foco (seção DevOps/Cloud) e tags do Hero
│   └── site.ts           URL do site, endpoint do formulário, placeholders
├── hooks/              useLanguage, useTheme, useActiveSection, useGithubRepos…
├── i18n/               textos de interface PT/EN + provider de idioma
├── layouts/            MainLayout (navbar, skip link, footer, back-to-top)
├── pages/              Home, NotFound
├── types/              tipos do conteúdo
└── utils/              datas, validação, visibilidade das seções
```

## Como alterar suas informações

1. Edite os arquivos em `src/data/`. Todo texto exibido usa o formato `{ pt: '...', en: '...' }`.
2. Rode `npm run dev`. Em desenvolvimento, **cards tracejados "A preencher"** indicam onde falta
   conteúdo e qual arquivo editar.
3. No build de produção, os placeholders somem e **seções vazias são ocultadas automaticamente**
   (inclusive da navbar). Nada incompleto aparece para recrutadores.
   Para visualizar placeholders em produção: `VITE_SHOW_PLACEHOLDERS=true npm run build`.

Regras que o site segue:

- **Skills:** coloque em `professional` apenas o que já usou em trabalho ou projetos concluídos;
  o resto vai em `learning` (exibido separadamente como *Currently learning*).
- **Highlights / métricas:** só números comprováveis. A lista vazia não exibe nada.
- **Arquitetura (seção Engenharia):** é um modelo de referência, rotulado como ilustrativo.
  Edite `src/components/Architecture.tsx` se quiser trocar pela arquitetura de um projeto real.
- **GitHub:** os repositórios são lidos em tempo real da API pública (`useGithubRepos`), com cache
  de 30 min na sessão, skeleton durante o carregamento e estado de erro com "tentar novamente".
  Para mudar o usuário, altere `githubUsername` em `profile.ts`.
- **Textos de interface** (rótulos de botões, títulos de seção) ficam em `src/i18n/ui.ts`.

### SEO

Ao definir o domínio final, substitua `https://rafael-souza.vercel.app` em:
`src/data/site.ts`, `index.html` (canonical, Open Graph, Twitter, JSON-LD), `public/robots.txt`
e `public/sitemap.xml`. Se mudar o headline, atualize também os `<meta>` do `index.html`
e a imagem `public/og-image.png` (1200×630).

## Formulário de contato

O formulário tem validação no cliente (nome, e-mail válido, mensagem ≥ 10 caracteres),
mensagens acessíveis por campo e honeypot anti-spam. O envio funciona em três modos:

1. **`VITE_CONTACT_ENDPOINT` definido** → `POST` JSON `{ name, email, message }` para o endpoint
   (ex.: [Formspree](https://formspree.io): crie um form e use `https://formspree.io/f/<id>`).
2. **Sem endpoint, mas com `email` em `profile.ts`** → abre o cliente de e-mail (`mailto:`) já preenchido.
3. **Nenhum dos dois** → informa que o envio não está configurado e sugere o LinkedIn.

Copie `.env.example` para `.env.local` para configurar localmente.

## Deploy (Vercel — recomendado)

O projeto já inclui `vercel.json` (build, cache imutável para `/assets`, cabeçalhos de segurança).

1. Envie o repositório para o GitHub.
2. Em https://vercel.com → **Add New… → Project** → importe o repositório.
   A Vercel detecta Vite automaticamente (`npm run build`, saída `dist`).
3. (Opcional) Em **Settings → Environment Variables**, adicione `VITE_CONTACT_ENDPOINT`.
4. **Deploy.** Cada push na branch principal publica uma nova versão; PRs ganham preview.
5. (Opcional) **Settings → Domains** para um domínio próprio. Depois, atualize as URLs de SEO.

Rotas inexistentes recebem `dist/404.html` com status 404, e o app exibe a página de erro.

**Alternativas:** Netlify e Cloudflare Pages funcionam sem mudanças (build `npm run build`,
diretório `dist`, ambos servem `404.html`). Na AWS: S3 (site estático) + CloudFront, com
`404.html` configurado como resposta de erro.

## Acessibilidade e qualidade

- HTML semântico (`header`, `nav`, `main`, `section` com `aria-labelledby`, `footer`), skip link.
- Navegação completa por teclado, foco visível, menu mobile fecha com `Esc` e devolve o foco.
- `aria-pressed` nos filtros e toggles, `aria-live` nos resultados e no status do formulário.
- Contraste AA nos dois temas; respeita `prefers-reduced-motion`.
- Testado em 320, 375, 768, 1024, 1440 e 1920 px, sem rolagem horizontal.
