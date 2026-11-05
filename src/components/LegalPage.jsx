import { useEffect } from 'react'
import { initInteractions } from '../lib/interactions.js'
import { Footer } from './Footer.jsx'
import { Header } from './Header.jsx'
import { Icon } from './Icon.jsx'

/** Deutlich markierter Platzhalter in Rechtstexten */
function Ph({ children }) {
  return (
    <mark className="rounded-md bg-ember/12 px-1.5 py-0.5 font-semibold text-ember-ink ring-1 ring-ember/30 ring-inset">
      [{children}]
    </mark>
  )
}

function H2({ children }) {
  return <h2 className="mt-12 text-2xl font-bold tracking-[-0.03em] text-navy first:mt-0">{children}</h2>
}

function Notice() {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-amber-50 p-5 text-amber-900 shadow-[inset_0_0_0_1px_rgb(217_119_6/0.3)]">
      <Icon name="info" className="mt-0.5 size-5 shrink-0" strokeWidth={1.9} />
      <p className="text-[0.95rem] leading-relaxed">
        <strong>Hinweis:</strong> Diese Seite ist eine Vorlage mit Platzhaltern und stellt keine Rechtsberatung dar.
        Bitte ergänze alle markierten Angaben und lass die Inhalte vor der Veröffentlichung rechtlich prüfen.
      </p>
    </div>
  )
}

function Impressum() {
  return (
    <>
      <H2>Angaben gemäß § 5 DDG</H2>
      <p>
        <Ph>Vor- und Nachname bzw. Firmenname inkl. Rechtsform</Ph>
        <br />
        firmenschub.
        <br />
        <Ph>Straße und Hausnummer</Ph>
        <br />
        <Ph>PLZ und Ort</Ph>
      </p>

      <H2>Kontakt</H2>
      <p>
        Telefon: <Ph>Telefonnummer</Ph>
        <br />
        E-Mail: <Ph>E-Mail-Adresse</Ph>
      </p>

      <H2>Umsatzsteuer-ID</H2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: <Ph>USt-IdNr., falls vorhanden</Ph>
      </p>

      <H2>Registereintrag</H2>
      <p>
        <Ph>Falls zutreffend: Registergericht und Registernummer – andernfalls diesen Abschnitt entfernen</Ph>
      </p>

      <H2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</H2>
      <p>
        <Ph>Vor- und Nachname</Ph>
        <br />
        <Ph>Anschrift</Ph>
      </p>

      <H2>Verbraucherstreitbeilegung</H2>
      <p>
        <Ph>Angabe, ob du bereit oder verpflichtet bist, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen</Ph>
      </p>
    </>
  )
}

function Datenschutz() {
  return (
    <>
      <H2>1. Verantwortliche Stelle</H2>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
      <p>
        <Ph>Vor- und Nachname bzw. Firmenname</Ph>
        <br />
        <Ph>Straße und Hausnummer, PLZ und Ort</Ph>
        <br />
        E-Mail: <Ph>E-Mail-Adresse</Ph>
        <br />
        Telefon: <Ph>Telefonnummer</Ph>
      </p>

      <H2>2. Hosting und Server-Logfiles</H2>
      <p>
        Diese Website wird bei <Ph>Name und Anschrift des Hosting-Anbieters</Ph> gehostet. Beim Aufruf der Website
        werden durch den Hosting-Anbieter technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs,
        aufgerufene Seite, Browsertyp) in sogenannten Server-Logfiles verarbeitet.
        <Ph>Rechtsgrundlage, Speicherdauer und ggf. Auftragsverarbeitungsvertrag ergänzen</Ph>
      </p>

      <H2>3. Kontaktformular</H2>
      <p>
        Wenn du uns über das Kontaktformular eine Anfrage sendest, verarbeiten wir die von dir angegebenen Daten (Name,
        Unternehmen, E-Mail-Adresse, optional Telefonnummer, gewünschte Leistung und Nachricht), um deine Anfrage zu
        bearbeiten und mit dir in Kontakt zu treten.
      </p>
      <p>
        Für den technischen Versand des Formulars nutzen wir <Ph>Name und Anschrift des Formular-Dienstleisters</Ph>.
        <Ph>Rechtsgrundlage (z. B. Art. 6 Abs. 1 lit. b DSGVO), Speicherdauer und Löschfristen ergänzen</Ph>
      </p>

      <H2>4. Schriftarten</H2>
      <p>
        Die auf dieser Website verwendete Schriftart „Manrope" ist lokal eingebunden. Beim Aufruf der Website wird
        dafür keine Verbindung zu Servern Dritter (z. B. Google Fonts) aufgebaut.
      </p>

      <H2>5. Cookies und Analyse-Tools</H2>
      <p>
        Die Website selbst setzt in der vorliegenden Fassung keine Cookies und keine Analyse- oder Tracking-Tools ein.
        <Ph>Bei späterem Einsatz von Cookies, Analyse- oder Marketing-Tools diesen Abschnitt anpassen</Ph>
      </p>

      <H2>6. Deine Rechte</H2>
      <p>Du hast im Rahmen der gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-ember">
        <li>Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
        <li>Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>

      <H2>7. Stand</H2>
      <p>
        <Ph>Datum der letzten Aktualisierung</Ph>
      </p>
    </>
  )
}

export function LegalPage({ page }) {
  useEffect(() => initInteractions(), [])
  const isImprint = page === 'impressum'
  const title = isImprint ? 'Impressum' : 'Datenschutzerklärung'

  return (
    <>
      <a href="#main" className="skip-link">
        Zum Inhalt springen
      </a>
      <Header base="./" solid />
      <main id="main" tabIndex={-1} className="outline-none">
        <div className="shell pb-8 pt-36 sm:pt-44">
          <div className="mx-auto max-w-3xl">
            <a
              href="./"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-navy"
            >
              <Icon name="arrowRight" strokeWidth={2} className="size-4 rotate-180 transition-transform group-hover:-translate-x-1" />
              Zurück zur Startseite
            </a>
            <h1 className="h2 mt-6 text-navy">
              {title}
              <span className="text-ember">.</span>
            </h1>
            <div className="mt-8">
              <Notice />
            </div>
            <div className="mt-12 space-y-4 text-[1.02rem] leading-relaxed text-slate-700">
              {isImprint ? <Impressum /> : <Datenschutz />}
            </div>
          </div>
        </div>
      </main>
      <Footer base="./" joined={false} />
    </>
  )
}
