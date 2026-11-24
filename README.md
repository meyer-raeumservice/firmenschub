# firmenschub. – Website

Die Onepage-Website der Digitalagentur **firmenschub.** – *Wir bringen dein Unternehmen nach vorne.*
Umgesetzt mit **React 19**, **Tailwind CSS 4** und **Vite**. Jede Seite wird beim Build **statisch vorgerendert**: Die Inhalte stehen also sofort als fertiges HTML im Quelltext. Das sorgt für schnelle Ladezeiten und ist gut für SEO.

---

## Schnellstart

```bash
npm install
```

```bash
npm run dev
```

Danach läuft die Seite lokal unter `http://localhost:5173`.

### Produktions-Build

```bash
npm run build
```

Das Ergebnis liegt im Ordner **`dist/`**. Diesen Ordner lädst du bei einem beliebigen Hoster hoch, z. B. Netlify, Vercel, Cloudflare Pages, Strato oder IONOS. Alle Pfade sind relativ, die Seite funktioniert also auch in einem Unterordner.

```bash
npm run preview
```

### Einzeldatei-Vorschau

```bash
npm run build:vorschau
```

Erzeugt `vorschau.html`: die komplette Startseite als **eine** Datei mit eingebettetem CSS, JS und eingebetteter Schrift. Du kannst sie per Doppelklick öffnen oder weitergeben. Für den Live-Betrieb nimmst du bitte den Ordner `dist/`.

---

## Vor dem Livegang: bitte ergänzen

| Was | Wo | Status |
| --- | --- | --- |
| Unternehmensdaten (Footer, Kontakt, Impressum) | `src/config.js` → `COMPANY` | ✅ eingetragen |
| Formularversand | per E-Mail-Programm an info@firmenschub.de (optional: `FORM_ENDPOINT`) | ✅ |
| Hosting in der Datenschutzerklärung | `src/components/LegalPage.jsx` | ✅ GitHub Pages |
| Formular-Dienst in der Datenschutzerklärung | nur nötig, falls `FORM_ENDPOINT` genutzt wird | – |
| Domain (Canonical, Social-Media-Vorschau, Sitemap) | `index.html`, `public/` | ✅ www.firmenschub.de |
| Veröffentlichung | GitHub Pages über `.github/workflows/deploy.yml`, live auf https://www.firmenschub.de | ✅ |

> **Hinweis zu den Rechtstexten:** Das Impressum ist mit deinen Angaben ausgefüllt. Die Datenschutzerklärung nennt GitHub Pages als Hosting; das Formular nutzt das E-Mail-Programm des Besuchers, es ist kein Drittanbieter beteiligt. Beides ersetzt keine Rechtsberatung – bitte vor der Veröffentlichung prüfen lassen.

### Kontaktformular

Das Formular arbeitet **ohne externen Dienst**: Nach erfolgreicher Prüfung der Eingaben öffnet sich das E-Mail-Programm des Besuchers mit einer fertig ausgefüllten Anfrage an `info@firmenschub.de` (Betreff, Name, Unternehmen, Kontakt, gewünschte Leistung, Nachricht). Gesendet wird erst, wenn der Besucher dort auf „Senden“ tippt – die Seite zeigt deshalb keinen „Erfolgreich gesendet"-Hinweis, sondern bittet darum, die E-Mail abzuschicken, und nennt E-Mail und Telefon als Ausweichweg.

Optional kann später ein Formular-Dienst (z. B. Formspree) genutzt werden, damit direkt aus der Seite gesendet wird:

```js
// src/config.js
export const FORM_ENDPOINT = 'https://formspree.io/f/DEINE-ID'
export const FORM_PROVIDER = { name: 'Formspree, Inc.', address: '…', privacyUrl: 'https://formspree.io/legal/privacy-policy' }
```

Eine Erfolgsmeldung erscheint dann erst, wenn der Server mit einem 2xx-Status antwortet. Der Anbieter wird automatisch in der Datenschutzerklärung genannt.

---

## Texte anpassen

Alle Inhalte stehen zentral in **`src/content.js`**: Leistungen, Vorteile, Branchen, Ablauf, FAQ und die Szenen der Hero-Animation. Für Textänderungen musst du also nicht in die Komponenten.

## Projektstruktur

```
src/
  content.js          Alle Texte & Inhalte
  config.js           Formular-Endpunkt & Unternehmensdaten
  index.css           Designsystem (Farben, Typografie, Buttons, Animationen)
  App.jsx             Startseite (Reihenfolge der Sektionen)
  components/
    Header.jsx        Sticky Header, Scroll-Spy, mobiles Menü
    Hero.jsx          Hero inkl. Branchen-Laufband
    HeroVisual.jsx    Animierte Interface-Visualisierung
    Services.jsx      Leistungen mit interaktiven Mini-Visuals
    WhyUs.jsx         Warum firmenschub.
    Industries.jsx    Branchen
    Process.jsx       Ablauf als Scroll-Timeline
    About.jsx         Über uns
    Faq.jsx           FAQ-Akkordeon
    Contact.jsx       Kontakt & validiertes Formular
    Footer.jsx        Footer
    LegalPage.jsx     Impressum & Datenschutz
  lib/interactions.js Reveal-, Spotlight- & Scroll-Effekte
scripts/
  prerender.mjs       Statisches Vorrendern nach dem Build
  build-single-file.mjs
```

## Designsystem in Kürze

- **Farben:** Navy `#0B1120`, Orange `#FF6B35` (nur als Akzent), Weiß, Off-White `#F8FAFC`, Slate-Grautöne. Für kleine orange Texte auf hellem Grund gibt es `ember-ink` (`#C9440F`), damit der Kontrast nach WCAG AA reicht.
- **Typografie:** Manrope (variabel). Die Schrift ist **lokal eingebunden**, es gibt also keine Verbindung zu Google-Servern (DSGVO-freundlich).
- **Markenzeichen:** Der orange Punkt aus dem Logo taucht als Schlusspunkt jeder Headline wieder auf, außerdem als leuchtender Punkt in Animationen und in der Timeline.
- **Aufbau:** Helle Sektionen wechseln sich mit eingerückten, abgerundeten dunklen Panels ab. So entstehen weiche Übergänge.

## Technik, Performance & Barrierearmut

- Statisch vorgerendertes HTML, semantische Struktur (eine `h1`, logische Überschriftenhierarchie) und strukturierte Daten (`Organization`, `FAQPage`)
- Animationen nur über `transform`/`opacity`, ausgelöst per IntersectionObserver; **„Reduzierte Bewegung"** wird vollständig respektiert
- Die Inhalte sind auch ohne JavaScript sichtbar (Progressive Enhancement)
- Tastaturbedienung, sichtbare Fokuszustände, Skip-Link, ARIA für Menü, Akkordeon und Formular, Fokus-Trap im mobilen Menü
- Keine Tracking-Tools und keine Cookies. Außer React gibt es keine Laufzeit-Abhängigkeiten, die Icons sind eigene SVGs.
