/**
 * Erzeugt aus dem fertigen Build (dist/) eine einzelne, eigenständige HTML-Datei
 * (CSS, JavaScript, Schrift und Favicon eingebettet) – praktisch als Vorschau zum
 * Weitergeben oder Öffnen ohne Webserver. Für den Live-Betrieb bitte den Ordner dist/ verwenden.
 */
import fs from 'node:fs/promises'
import path from 'node:path'

const dist = path.resolve('dist')
const out = path.resolve('vorschau.html')
let html = await fs.readFile(path.join(dist, 'index.html'), 'utf8')
const assetsDir = path.join(dist, 'assets')

const b64 = async (file) => (await fs.readFile(file)).toString('base64')

// CSS einbetten – nur latin/latin-ext-Schriftschnitte, um die Datei schlank zu halten
const cssMatch = html.match(/<link rel="stylesheet"[^>]*href="\.\/assets\/([^"]+\.css)"[^>]*>/)
let css = await fs.readFile(path.join(assetsDir, cssMatch[1]), 'utf8')
const fontFaces = css.match(/@font-face\{[^}]*\}/g) || []
for (const face of fontFaces) {
  const m = face.match(/url\(\.\/([^)]+\.woff2)\)/)
  if (!m) continue
  if (!/manrope-latin(-ext)?-wght/.test(m[1])) {
    css = css.replace(face, '')
    continue
  }
  const data = await b64(path.join(assetsDir, m[1]))
  css = css.replace(face, face.replace(m[0], `url(data:font/woff2;base64,${data})`))
}
html = html.replace(cssMatch[0], () => `<style>${css}</style>`)

// JavaScript einbetten
const jsMatch = html.match(/<script type="module" crossorigin src="\.\/assets\/([^"]+\.js)"><\/script>/)
const js = (await fs.readFile(path.join(assetsDir, jsMatch[1]), 'utf8')).replace(/<\/script/gi, '<\\/script')
html = html.replace(jsMatch[0], '')
html = html.replace('</body>', () => `<script type="module">${js}</script>\n</body>`)

// Preloads entfernen, Favicon einbetten
html = html.replace(/<link rel="(modulepreload|preload)"[^>]*>/g, '')
const fav = await fs.readFile(path.join(dist, 'favicon.svg'), 'utf8')
html = html.replace(/href="\.\/favicon\.svg"/, `href="data:image/svg+xml,${encodeURIComponent(fav)}"`)

await fs.writeFile(out, html)
console.log(`✓ Einzeldatei-Vorschau: ${path.relative(process.cwd(), out)} (${(Buffer.byteLength(html) / 1024).toFixed(0)} kB)`)
