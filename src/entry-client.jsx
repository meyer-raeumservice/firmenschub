import '@fontsource-variable/manrope'
import './index.css'
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { Page } from './Page.jsx'

const root = document.getElementById('root')
const page = document.body.dataset.page || 'home'
const app = (
  <StrictMode>
    <Page page={page} />
  </StrictMode>
)

// Vorgerendertes HTML (Produktion) wird hydriert, im Dev-Modus wird neu gerendert.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
