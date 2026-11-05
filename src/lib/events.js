/** Leistung im Kontaktformular vorauswählen (z. B. aus einer Leistungskarte heraus) */
export function selectService(id) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('fs:select-service', { detail: id }))
}
