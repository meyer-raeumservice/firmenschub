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
 * Unternehmensangaben
 * -------------------
 * `null` = noch nicht hinterlegt → es wird ein klar gekennzeichneter Platzhalter angezeigt.
 */
export const COMPANY = {
  email: null, // z. B. 'hallo@firmenschub.de'
  phone: null, // z. B. '+49 123 456789'
  address: null, // z. B. 'Musterstraße 1, 12345 Musterstadt'
}
