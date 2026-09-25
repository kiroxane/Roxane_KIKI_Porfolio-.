/**
 * Écrit `public/robots.txt` et `public/sitemap.xml` à partir de VITE_SITE_URL.
 * Lancé automatiquement par `npm run build` : les deux fichiers suivent donc
 * toujours l'adresse déclarée dans `.env`, sans recopie manuelle.
 */
import { readFileSync, writeFileSync } from 'node:fs'

function readSiteUrl() {
  const fromEnv = process.env.VITE_SITE_URL
  if (fromEnv) return fromEnv
  const line = readFileSync('.env', 'utf8').match(/^VITE_SITE_URL=(.+)$/m)
  if (!line) throw new Error('VITE_SITE_URL est absent de .env.')
  return line[1].trim()
}

const siteUrl = readSiteUrl().replace(/\/+$/, '')
const today = new Date().toISOString().slice(0, 10)

// Les deux seules pages du site. Ajouter ici toute nouvelle route.
const pages = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/cv', priority: '0.8', changefreq: 'monthly' },
]

writeFileSync('public/robots.txt', `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`)

writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${siteUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`)

console.log(`SEO : robots.txt et sitemap.xml générés pour ${siteUrl}`)
