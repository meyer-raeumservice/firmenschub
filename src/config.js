/**
 * ============================================================
 *  Zentrale Einstellungen – hier trägst du deine echten Daten ein
 * ============================================================
 */

/**
 * Formularversand
 * ----------------
 * Solange hier nichts eingetragen ist, wird KEINE Anfrage versendet.
 * Das Formular zeigt dann einen klaren Hinweis statt einer (falschen) Erfolgsmeldung.
 *
 * Trage hier die URL deines Formular-Endpunkts ein, z. B.:
 *   - Formspree:  'https://formspree.io/f/DEINE-ID'
 *   - Getform, Basin, Web3Forms o. Ä.
 *   - oder ein eigenes Backend (POST, JSON)
 *
 * Erwartet wird ein Endpunkt, der JSON per POST annimmt und bei Erfolg
 * mit einem 2xx-Status antwortet.
 */
export const FORM_ENDPOINT = ''

/**
 * Anbieter des Formular-Dienstes – wird in der Datenschutzerklärung genannt,
 * sobald FORM_ENDPOINT eingetragen ist. Beispiel für Formspree:
 *   { name: 'Formspree, Inc.', address: '…', privacyUrl: 'https://formspree.io/legal/privacy-policy' }
 */
export const FORM_PROVIDER = null

/**
 * Unternehmensangaben
 * -------------------
 * Werden im Footer, im Kontaktbereich, im Impressum, in der Datenschutzerklärung
 * und in den strukturierten Daten für Suchmaschinen verwendet.
 * `null` = nicht vorhanden → wird nicht angezeigt.
 */
export const COMPANY = {
  name: 'firmenschub.',
  owner: 'Daniel Meyer',
  legalForm: 'Einzelunternehmen',
  street: 'Am Hammersberg 5',
  postalCode: '66280',
  city: 'Sulzbach',
  email: 'info@firmenschub.de',
  phone: '0163 4737058',
  phoneIntl: '+491634737058',
  vatId: null, // Umsatzsteuer-ID, falls vorhanden, z. B. 'DE123456789'
  url: 'https://www.firmenschub.de/',
}
