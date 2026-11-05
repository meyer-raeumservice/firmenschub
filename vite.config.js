import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

const r = (p) => fileURLToPath(new URL(p, import.meta.url))

export default defineConfig({
  // Relative Pfade: Die fertige Seite funktioniert in jedem (Unter-)Verzeichnis.
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: r('./index.html'),
        impressum: r('./impressum.html'),
        datenschutz: r('./datenschutz.html'),
      },
    },
  },
})
