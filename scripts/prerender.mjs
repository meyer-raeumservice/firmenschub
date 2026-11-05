/**
 * Statisches Vorrendern: Jede Seite wird beim Build als fertiges HTML ausgeliefert.
 * → schneller erster Seitenaufbau, beste Voraussetzungen für SEO, funktioniert auch ohne JavaScript.
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')
const { render, headTags } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

// Wichtigste Schriftdatei vorladen (latin-Subset)
const assets = await fs.readdir(path.join(dist, 'assets'))
const font = assets.find((f) => /^manrope-latin-wght-normal.*\.woff2$/.test(f))
const preload = font
  ? `<link rel="preload" href="./assets/${font}" as="font" type="font/woff2" crossorigin />`
  : ''

const pages = [
  { file: 'index.html', page: 'home' },
  { file: 'impressum.html', page: 'impressum' },
  { file: 'datenschutz.html', page: 'datenschutz' },
]

for (const { file, page } of pages) {
  const target = path.join(dist, file)
  let html = await fs.readFile(target, 'utf8')
  const app = render(page)
  html = html.replace('<!--app-html-->', () => app).replace('<!--head-tags-->', () => preload + headTags(page))
  await fs.writeFile(target, html)
  console.log(`✓ vorgerendert: ${file} (${(Buffer.byteLength(html) / 1024).toFixed(1)} kB)`)
}

await fs.rm(ssrDir, { recursive: true, force: true })
