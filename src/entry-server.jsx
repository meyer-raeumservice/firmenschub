import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { Page } from './Page.jsx'
import { FAQS, SERVICES } from './content.js'

export function render(page) {
  return renderToString(
    <StrictMode>
      <Page page={page} />
    </StrictMode>,
  )
}

/** Strukturierte Daten (Schema.org) für Suchmaschinen */
export function headTags(page) {
  if (page !== 'home') return ''
  const graph = [
    {
      '@type': 'Organization',
      name: 'firmenschub.',
      slogan: 'Wir bringen dein Unternehmen nach vorne.',
      description:
        'Digitalagentur für Webdesign, Google & lokale Sichtbarkeit sowie Kundengewinnung – für Unternehmen aus allen Branchen.',
      knowsAbout: SERVICES.map((s) => s.title),
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a.join(' ') },
      })),
    },
  ]
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')
  return `<script type="application/ld+json">${json}</script>`
}
