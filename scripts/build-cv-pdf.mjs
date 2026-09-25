/**
 * Génère `public/cv.pdf` à partir de la page `/cv` du site.
 * La feuille de style d'impression de `src/styles/cv.css` fait toute la mise en page :
 * le PDF et la page en ligne restent la même source.
 *
 * Usage : npm run cv:pdf
 */
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync, unlinkSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { setTimeout as wait } from 'node:timers/promises'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const PORT = 4188
const URL = `http://127.0.0.1:${PORT}/cv`
const OUTPUT = 'public/cv.pdf'

if (!existsSync(CHROME)) {
  console.error(`Google Chrome est introuvable :\n  ${CHROME}\nIl sert à convertir la page en PDF.`)
  process.exit(1)
}

console.log('Compilation du site…')
const build = spawnSync('npm', ['run', 'build'], { stdio: 'inherit' })
if (build.status !== 0) process.exit(build.status ?? 1)

console.log(`Démarrage du serveur sur le port ${PORT}…`)
const server = spawn('npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', String(PORT), '--strictPort'], { stdio: 'ignore' })

let failure = null
let profile = null
try {
  // Attendre que le serveur réponde, sans dépasser dix secondes.
  let ready = false
  for (let attempt = 0; attempt < 40 && !ready; attempt++) {
    await wait(250)
    try {
      const response = await fetch(URL)
      ready = response.ok
    } catch {
      // le serveur n'écoute pas encore
    }
  }
  if (!ready) throw new Error(`Le serveur n'a pas répondu sur ${URL}.`)

  console.log('Rendu du PDF…')
  if (existsSync(OUTPUT)) unlinkSync(OUTPUT)
  // Profil jetable : sans lui, Chrome attend indéfiniment si une fenêtre
  // ordinaire est déjà ouverte avec le profil par défaut.
  profile = mkdtempSync(join(tmpdir(), 'cv-chrome-'))
  const render = spawnSync(CHROME, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--no-first-run',
    `--user-data-dir=${profile}`,
    '--no-pdf-header-footer',
    '--virtual-time-budget=8000',
    `--print-to-pdf=${OUTPUT}`,
    URL,
  ], { stdio: 'ignore', timeout: 90_000 })
  if (render.status !== 0 || !existsSync(OUTPUT)) throw new Error('Chrome n\'a pas produit le PDF.')

  const pdf = readFileSync(OUTPUT)
  const pages = pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g)?.length ?? 0
  console.log(`\n${OUTPUT} — ${pages} page(s), ${Math.round(pdf.length / 1024)} Ko`)
} catch (error) {
  failure = error
} finally {
  server.kill()
  if (profile) rmSync(profile, { recursive: true, force: true })
}

if (failure) {
  console.error(failure.message)
  process.exit(1)
}
