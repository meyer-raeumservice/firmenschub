import App from './App.jsx'
import { LegalPage } from './components/LegalPage.jsx'

export function Page({ page }) {
  if (page === 'impressum' || page === 'datenschutz') return <LegalPage page={page} />
  return <App />
}
