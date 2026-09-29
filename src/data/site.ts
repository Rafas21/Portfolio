/**
 * Configurações globais do site.
 * SITE_URL também precisa ser atualizada em: index.html, public/robots.txt e public/sitemap.xml
 */
export const site = {
  url: 'https://rafael-souza.vercel.app',
  /** Placeholders (cards "preencha aqui") aparecem em dev ou quando VITE_SHOW_PLACEHOLDERS=true. */
  showPlaceholders: import.meta.env.DEV || import.meta.env.VITE_SHOW_PLACEHOLDERS === 'true',
  contactEndpoint: (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) ?? '',
}
