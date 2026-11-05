import { useEffect, useRef, useState } from 'react'
import { FORM_ENDPOINT } from '../config.js'
import { SERVICE_OPTIONS } from '../content.js'
import { Icon } from './Icon.jsx'
import { Button, Dot, SectionLabel } from './ui.jsx'

const EMPTY = { name: '', company: '', email: '', phone: '', services: [], message: '', privacy: false, hp: '' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^\+?[0-9\s/()-]{6,20}$/

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Bitte gib deinen Namen an.'
  if (v.company.trim().length < 2) e.company = 'Bitte gib den Namen deines Unternehmens an.'
  if (!v.email.trim()) e.email = 'Bitte gib deine E-Mail-Adresse an.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Bitte gib eine gültige E-Mail-Adresse an (z. B. name@firma.de).'
  if (v.phone.trim() && !PHONE_RE.test(v.phone.trim()))
    e.phone = 'Bitte gib eine gültige Telefonnummer an – erlaubt sind Ziffern, Leerzeichen sowie + / ( ) -.'
  if (v.services.length === 0) e.services = 'Bitte wähle mindestens eine Leistung aus.'
  if (v.message.trim().length < 10) e.message = 'Bitte beschreibe dein Anliegen kurz (mindestens 10 Zeichen).'
  if (!v.privacy) e.privacy = 'Bitte stimme der Verarbeitung deiner Angaben gemäß Datenschutzerklärung zu.'
  return e
}

const ORDER = ['name', 'company', 'email', 'phone', 'services', 'message', 'privacy']

export function Contact() {
  const nameRef = useRef(null)

  const focusForm = (e) => {
    e.preventDefault()
    const form = document.getElementById('anfrage')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    form?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    setTimeout(() => nameRef.current?.focus({ preventScroll: true }), reduce ? 0 : 450)
  }

  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="panel panel-join-bottom grain">
      <div
        className="pointer-events-none absolute -left-1/4 top-0 -z-10 aspect-square w-[64rem] max-w-[160vw] rounded-full bg-[radial-gradient(closest-side,rgb(255_107_53/0.2),transparent)]"
        aria-hidden="true"
      />
      <div
        className="bg-grid-dark pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_55%_at_15%_20%,#000,transparent)]"
        aria-hidden="true"
      />

      <div className="shell section grid grid-cols-1 gap-14 lg:!pb-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32" data-reveal>
            <SectionLabel index="07" tone="dark">
              Kontakt
            </SectionLabel>
            <h2 id="kontakt-title" className="h2 mt-6 text-white">
              Bereit, dein Unternehmen <span className="text-gradient-ember">nach vorne</span> zu bringen
              <Dot char="?" />
            </h2>
            <p className="lead mt-6 max-w-lg text-white/70">
              Lass uns gemeinsam herausfinden, wie wir deinen Online-Auftritt verbessern und neue Kunden erreichen können.
            </p>

            <Button href="#anfrage" size="lg" className="mt-9 w-full sm:w-auto" onClick={focusForm}>
              Jetzt kostenloses Erstgespräch anfragen
            </Button>

            <ol className="mt-12 space-y-5">
              {[
                ['Du sendest uns deine Anfrage', 'Ein paar Angaben genügen – ganz ohne Verpflichtung.'],
                ['Wir melden uns persönlich bei dir', 'Und vereinbaren einen Termin, der dir passt.'],
                ['Kostenloses Erstgespräch', 'Wir lernen dich kennen und zeigen dir deine Möglichkeiten.'],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/8 text-sm font-bold tabular-nums text-ember shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1)]">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{t}</p>
                    <p className="mt-0.5 text-[0.95rem] text-white/60">{d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <ul className="mt-10 flex flex-wrap gap-2" aria-label="Das Erstgespräch auf einen Blick">
              {['Kostenlos', 'Unverbindlich', 'Persönlich'].map((t) => (
                <li key={t} className="chip bg-white/6 text-white/80 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1)]">
                  <Icon name="check" strokeWidth={2.6} className="size-3.5 text-ember" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7" data-reveal="scale" style={{ '--delay': '0.1s' }}>
          <ContactForm nameRef={nameRef} />
        </div>
      </div>
    </section>
  )
}

function ContactForm({ nameRef }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | success | error | not-configured
  const [summary, setSummary] = useState(false)
  const formRef = useRef(null)
  const configured = Boolean(FORM_ENDPOINT)

  // Vorauswahl aus den Leistungskarten
  useEffect(() => {
    const onSelect = (e) => {
      const id = e.detail
      setValues((v) => (v.services.includes(id) ? v : { ...v, services: [...v.services, id] }))
    }
    window.addEventListener('fs:select-service', onSelect)
    return () => window.removeEventListener('fs:select-service', onSelect)
  }, [])

  const set = (key, val) => {
    const next = { ...values, [key]: val }
    setValues(next)
    if (submitted || touched[key]) setErrors(validate(next))
    if (status !== 'idle' && status !== 'sending') setStatus('idle')
  }
  const blur = (key) => {
    setTouched((t) => ({ ...t, [key]: true }))
    setErrors(validate(values))
  }
  const toggleService = (id) =>
    set('services', values.services.includes(id) ? values.services.filter((s) => s !== id) : [...values.services, id])

  const show = (key) => (submitted || touched[key]) && errors[key]

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)
    const errs = validate(values)
    setErrors(errs)
    const first = ORDER.find((k) => errs[k])
    if (first) {
      setSummary(true)
      const el = formRef.current?.querySelector(`[data-field="${first}"]`)
      el?.focus()
      return
    }
    setSummary(false)
    if (values.hp) return // Honeypot ausgefüllt → vermutlich Spam, nichts senden

    if (!configured) {
      // Ehrlich bleiben: ohne Endpunkt wird nichts versendet.
      setStatus('not-configured')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          unternehmen: values.company.trim(),
          email: values.email.trim(),
          telefon: values.phone.trim() || '—',
          leistungen: values.services
            .map((id) => SERVICE_OPTIONS.find((o) => o.id === id)?.label)
            .filter(Boolean)
            .join(', '),
          nachricht: values.message.trim(),
          datenschutz_einwilligung: true,
          _subject: `Neue Anfrage über die Website: ${values.company.trim()}`,
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
      setValues(EMPTY)
      setTouched({})
      setSubmitted(false)
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  const errorCount = Object.keys(errors).length

  return (
    <form
      id="anfrage"
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-labelledby="anfrage-title"
      className="relative rounded-[1.75rem] bg-white p-6 text-navy shadow-[0_50px_100px_-40px_rgb(0_0_0/0.8)] sm:rounded-[2rem] sm:p-10"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 id="anfrage-title" className="text-2xl font-bold tracking-[-0.035em] sm:text-[1.75rem]">
            Deine Anfrage<span className="text-ember">.</span>
          </h3>
          <p className="mt-1.5 text-slate-600">Ein paar Angaben genügen – wir melden uns persönlich bei dir.</p>
        </div>
        {!configured ? (
          <p className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800 shadow-[inset_0_0_0_1px_rgb(217_119_6/0.35)]">
            <span className="size-1.5 rounded-full bg-amber-500" aria-hidden="true" />
            Formularversand noch einzurichten
          </p>
        ) : null}
      </div>

      {summary && errorCount > 0 ? (
        <div role="alert" className="mt-6 flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-sm font-medium text-red-800">
          <Icon name="alert" className="mt-0.5 size-5 shrink-0" />
          Bitte prüfe {errorCount === 1 ? 'das markierte Feld' : `die ${errorCount} markierten Felder`}.
        </div>
      ) : null}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id="f-name" label="Name" required error={show('name')}>
          <input
            ref={nameRef}
            id="f-name"
            data-field="name"
            name="name"
            type="text"
            autoComplete="name"
            className="input"
            placeholder="Vor- und Nachname"
            value={values.name}
            onChange={(e) => set('name', e.target.value)}
            onBlur={() => blur('name')}
            aria-required="true"
            aria-invalid={show('name') ? 'true' : 'false'}
            aria-describedby={show('name') ? 'f-name-error' : undefined}
          />
        </Field>
        <Field id="f-company" label="Unternehmen" required error={show('company')}>
          <input
            id="f-company"
            data-field="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="input"
            placeholder="Name deines Unternehmens"
            value={values.company}
            onChange={(e) => set('company', e.target.value)}
            onBlur={() => blur('company')}
            aria-required="true"
            aria-invalid={show('company') ? 'true' : 'false'}
            aria-describedby={show('company') ? 'f-company-error' : undefined}
          />
        </Field>
        <Field id="f-email" label="E-Mail-Adresse" required error={show('email')}>
          <input
            id="f-email"
            data-field="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className="input"
            placeholder="name@unternehmen.de"
            value={values.email}
            onChange={(e) => set('email', e.target.value)}
            onBlur={() => blur('email')}
            aria-required="true"
            aria-invalid={show('email') ? 'true' : 'false'}
            aria-describedby={show('email') ? 'f-email-error' : undefined}
          />
        </Field>
        <Field id="f-phone" label="Telefonnummer" optional error={show('phone')}>
          <input
            id="f-phone"
            data-field="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="input"
            placeholder="Für einen schnellen Rückruf"
            value={values.phone}
            onChange={(e) => set('phone', e.target.value)}
            onBlur={() => blur('phone')}
            aria-invalid={show('phone') ? 'true' : 'false'}
            aria-describedby={show('phone') ? 'f-phone-error' : undefined}
          />
        </Field>

        <fieldset
          className={`sm:col-span-2 ${show('services') ? 'is-invalid' : ''}`}
          aria-describedby={show('services') ? 'f-services-error' : undefined}
        >
          <legend className="text-sm font-semibold text-navy">
            Gewünschte Leistung <span className="text-ember-ink" aria-hidden="true">*</span>
            <span className="ml-1.5 font-medium text-slate-500">(Mehrfachauswahl möglich)</span>
          </legend>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {SERVICE_OPTIONS.map((o, i) => (
              <label key={o.id} className="relative">
                <input
                  type="checkbox"
                  name="services"
                  value={o.id}
                  className="peer sr-only"
                  data-field={i === 0 ? 'services' : undefined}
                  checked={values.services.includes(o.id)}
                  onChange={() => toggleService(o.id)}
                  onBlur={() => blur('services')}
                />
                <span className="choice">
                  <span className="choice-box" aria-hidden="true">
                    <Icon name="check" strokeWidth={2.8} />
                  </span>
                  {o.label}
                </span>
              </label>
            ))}
          </div>
          <ErrorText id="f-services-error" error={show('services')} />
        </fieldset>

        <Field id="f-message" label="Nachricht" required error={show('message')} className="sm:col-span-2">
          <textarea
            id="f-message"
            data-field="message"
            name="message"
            rows={5}
            className="input"
            placeholder="Erzähl uns kurz von deinem Unternehmen und davon, was du vorhast."
            value={values.message}
            onChange={(e) => set('message', e.target.value)}
            onBlur={() => blur('message')}
            aria-required="true"
            aria-invalid={show('message') ? 'true' : 'false'}
            aria-describedby={show('message') ? 'f-message-error' : undefined}
          />
        </Field>

        {/* Honeypot gegen Spam – für Menschen unsichtbar */}
        <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="f-hp">Bitte leer lassen</label>
          <input
            id="f-hp"
            name="fs_hp_field"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.hp}
            onChange={(e) => set('hp', e.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3.5 text-[0.92rem] leading-relaxed text-slate-600">
            <input
              type="checkbox"
              name="privacy"
              data-field="privacy"
              className="peer sr-only"
              checked={values.privacy}
              onChange={(e) => set('privacy', e.target.checked)}
              onBlur={() => blur('privacy')}
              aria-required="true"
              aria-invalid={show('privacy') ? 'true' : 'false'}
              aria-describedby={show('privacy') ? 'f-privacy-error' : undefined}
            />
            <span className="consent-box" aria-hidden="true">
              <Icon name="check" strokeWidth={2.8} />
            </span>
            <span>
              Ich habe die{' '}
              <a
                href="./datenschutz.html"
                target="_blank"
                rel="noopener"
                className="font-semibold text-navy underline decoration-ember decoration-2 underline-offset-4 hover:text-ember-ink"
              >
                Datenschutzerklärung
              </a>{' '}
              gelesen und bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verwendet werden.{' '}
              <span className="text-ember-ink" aria-hidden="true">
                *
              </span>
            </span>
          </label>
          <ErrorText id="f-privacy-error" error={show('privacy')} />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          <span className="text-ember-ink" aria-hidden="true">
            *
          </span>{' '}
          Pflichtfelder
        </p>
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          icon={status === 'sending' ? null : 'arrowRight'}
          disabled={status === 'sending'}
          aria-disabled={status === 'sending'}
        >
          {status === 'sending' ? (
            <span className="inline-flex items-center gap-3">
              <span className="spinner" aria-hidden="true" />
              Wird gesendet …
            </span>
          ) : (
            'Anfrage senden'
          )}
        </Button>
      </div>

      <div aria-live="polite" role="status">
        {status === 'not-configured' ? (
          <Notice tone="amber" icon="info" title="Formularversand noch nicht eingerichtet">
            Deine Anfrage wurde <strong>nicht</strong> übermittelt, da die Formularanbindung noch eingerichtet werden muss.
            Deine Eingaben bleiben erhalten.
          </Notice>
        ) : null}
        {status === 'error' ? (
          <Notice tone="red" icon="alert" title="Senden fehlgeschlagen">
            Deine Anfrage konnte leider nicht übermittelt werden. Bitte versuche es in einem Moment erneut.
          </Notice>
        ) : null}
        {status === 'success' ? (
          <Notice tone="green" icon="check" title="Vielen Dank für deine Anfrage!">
            Deine Nachricht ist bei uns eingegangen. Wir melden uns persönlich bei dir.
          </Notice>
        ) : null}
      </div>
    </form>
  )
}

function Field({ id, label, required, optional, error, children, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-3 text-sm font-semibold text-navy">
        <span>
          {label}{' '}
          {required ? (
            <span className="text-ember-ink" aria-hidden="true">
              *
            </span>
          ) : null}
        </span>
        {optional ? <span className="text-xs font-medium text-slate-500">optional</span> : null}
      </label>
      {children}
      <ErrorText id={`${id}-error`} error={error} />
    </div>
  )
}

function ErrorText({ id, error }) {
  if (!error) return null
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-red-700">
      <Icon name="alert" className="mt-0.5 size-4 shrink-0" strokeWidth={1.9} />
      {error}
    </p>
  )
}

function Notice({ tone, icon, title, children }) {
  const tones = {
    amber: 'bg-amber-50 text-amber-900 shadow-[inset_0_0_0_1px_rgb(217_119_6/0.3)]',
    red: 'bg-red-50 text-red-900 shadow-[inset_0_0_0_1px_rgb(220_38_38/0.25)]',
    green: 'bg-emerald-50 text-emerald-900 shadow-[inset_0_0_0_1px_rgb(5_150_105/0.3)]',
  }
  return (
    <div className={`mt-6 flex items-start gap-3 rounded-2xl p-5 ${tones[tone]}`}>
      <Icon name={icon} className="mt-0.5 size-5 shrink-0" strokeWidth={1.9} />
      <div>
        <p className="font-bold">{title}</p>
        <p className="mt-1 text-[0.95rem] leading-relaxed opacity-90">{children}</p>
      </div>
    </div>
  )
}
