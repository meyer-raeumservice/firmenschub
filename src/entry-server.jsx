import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { Page } from './Page.jsx'
import { FAQS, SERVICES } from './content.js'
import { COMPANY } from './config.js'

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
      '@type': 'ProfessionalService',
      name: 'firmenschub.',
      url: COMPANY.url,
      email: COMPANY.email,
      telephone: COMPANY.phoneIntl,
      founder: { '@type': 'Person', name: COMPANY.owner },
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY.street,
        postalCode: COMPANY.postalCode,
        addressLocality: COMPANY.city,
        addressCountry: 'DE',
      },
      image: `${COMPANY.url}og-image.png`,
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
