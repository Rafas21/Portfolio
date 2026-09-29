// Copia index.html → 404.html. Vercel, Netlify e Cloudflare Pages servem 404.html
// com status 404 para rotas inexistentes; o app detecta o caminho e mostra a página 404.
import { copyFileSync } from 'node:fs'
copyFileSync('dist/index.html', 'dist/404.html')
console.log('✓ dist/404.html created')
