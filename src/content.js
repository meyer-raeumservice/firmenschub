/**
 * Alle Inhalte der Website an einem Ort – so lassen sich Texte
 * später bequem anpassen, ohne in die Komponenten einzusteigen.
 */

export const NAV = [
  { id: 'start', label: 'Startseite' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'ueber-uns', label: 'Über uns' },
  { id: 'ablauf', label: 'Ablauf' },
  { id: 'kontakt', label: 'Kontakt' },
]

/** IDs der Leistungen – werden auch im Kontaktformular verwendet */
export const SERVICE_OPTIONS = [
  { id: 'webdesign', label: 'Webdesign' },
  { id: 'google', label: 'Google & lokale Sichtbarkeit' },
  { id: 'kundengewinnung', label: 'Kundengewinnung' },
  { id: 'beratung', label: 'Noch unsicher – berate mich' },
]

export const SERVICES = [
  {
    id: 'webdesign',
    icon: 'browser',
    title: 'Webdesign',
    tagline: 'Websites, die nicht nur gut aussehen, sondern überzeugen.',
    text: 'Wir entwickeln moderne, schnelle und benutzerfreundliche Websites, die dein Unternehmen professionell präsentieren und Besucher zu potenziellen Kunden machen.',
    points: [
      'Modernes, individuelles Design',
      'Optimiert für Smartphone und Desktop',
      'Schnelle Ladezeiten',
      'Benutzerfreundliche Struktur',
      'Fokus auf Kontaktanfragen',
    ],
    cta: 'Webdesign anfragen',
  },
  {
    id: 'google',
    icon: 'searchPin',
    title: 'Google & lokale Sichtbarkeit',
    tagline: 'Werde dort gefunden, wo deine Kunden suchen.',
    text: 'Wir helfen deinem Unternehmen, seine Online-Präsenz bei Google zu verbessern, damit potenzielle Kunden deine Leistungen leichter entdecken.',
    points: [
      'Google-Unternehmensprofil',
      'Lokale Suchmaschinenoptimierung',
      'Optimierung deiner Online-Präsenz',
      'Bessere regionale Auffindbarkeit',
      'Nachhaltiger Sichtbarkeitsaufbau',
    ],
    cta: 'Sichtbarkeit verbessern',
  },
  {
    id: 'kundengewinnung',
    icon: 'growth',
    title: 'Kundengewinnung',
    tagline: 'Mach aus Online-Sichtbarkeit neue Geschäftschancen.',
    text: 'Wir entwickeln digitale Maßnahmen, die dein Unternehmen bekannter machen und dabei helfen, qualifizierte Kundenanfragen zu gewinnen.',
    points: [
      'Digitale Wachstumsstrategien',
      'Conversion-Optimierung',
      'Gezielte Marketingmaßnahmen',
      'Kontakt- und Anfrageoptimierung',
      'Individuelle Beratung',
    ],
    cta: 'Mehr Anfragen gewinnen',
  },
]

export const ADVANTAGES = [
  {
    icon: 'chat',
    title: 'Persönlich statt unpersönlich',
    text: 'Direkte Kommunikation und individuelle Betreuung.',
  },
  {
    icon: 'target',
    title: 'Design mit Strategie',
    text: 'Ein hochwertiger Auftritt mit einem klaren Ziel.',
  },
  {
    icon: 'layers',
    title: 'Alles aus einer Hand',
    text: 'Webdesign, Google und Kundengewinnung sinnvoll kombiniert.',
  },
  {
    icon: 'eye',
    title: 'Verständlich und transparent',
    text: 'Klare Abläufe und Lösungen, die du nachvollziehen kannst.',
  },
]

export const COMPARISON = [
  {
    no: 'Sieht ganz nett aus – führt aber nicht zur Anfrage.',
    yes: 'Klare Struktur, die Besucher gezielt zur Kontaktaufnahme führt.',
  },
  {
    no: 'Online, aber bei Google kaum zu finden.',
    yes: 'Aufgebaut für bessere Sichtbarkeit – gerade in deiner Region.',
  },
  {
    no: 'Von der Stange und schnell wieder vergessen.',
    yes: 'Individuell gestaltet – passend zu dir und deinem Unternehmen.',
  },
]

export const INDUSTRIES = [
  {
    icon: 'hammer',
    title: 'Handwerk',
    text: 'Zeig online, was du draufhast – und werde gefunden, wenn in deiner Region jemand einen zuverlässigen Fachbetrieb sucht.',
    tags: ['Website', 'Google-Profil', 'Anfragen'],
  },
  {
    icon: 'cloche',
    title: 'Gastronomie',
    text: 'Speisekarte, Öffnungszeiten, Reservierung: Gäste finden dich schneller – und alles, was sie vor dem Besuch wissen möchten.',
    tags: ['Google Maps', 'Website', 'Reservierungen'],
  },
  {
    icon: 'scissors',
    title: 'Beauty & Kosmetik',
    text: 'Für Friseursalons, Kosmetik- und Nagelstudios: ein Auftritt, der so gepflegt wirkt wie deine Arbeit – mit einfacher Terminanfrage.',
    tags: ['Design', 'Terminanfragen', 'Lokale Suche'],
  },
  {
    icon: 'briefcase',
    title: 'Dienstleistungen',
    text: 'Vertrauen aufbauen, bevor der erste Kontakt entsteht – mit einer klaren, professionellen Darstellung deiner Leistungen.',
    tags: ['Positionierung', 'Website', 'Kontaktanfragen'],
  },
  {
    icon: 'store',
    title: 'Einzelhandel',
    text: 'Mehr Menschen auf dich aufmerksam machen – mit einer starken lokalen Präsenz und einem Auftritt, der Lust auf deinen Laden macht.',
    tags: ['Google-Profil', 'Sichtbarkeit', 'Website'],
  },
]

export const STEPS = [
  {
    n: '01',
    title: 'Kennenlernen',
    text: 'Wir sprechen über dein Unternehmen, deine Ziele und deine Wünsche. Gemeinsam finden wir heraus, welche Lösung am besten zu dir passt.',
    tag: 'Kostenlos & unverbindlich',
  },
  {
    n: '02',
    title: 'Strategie & Umsetzung',
    text: 'Wir entwickeln ein passendes Konzept und setzen deine digitale Lösung professionell um.',
    tag: 'Konzept · Design · Umsetzung',
  },
  {
    n: '03',
    title: 'Gemeinsam wachsen',
    text: 'Nach der Umsetzung unterstützen wir dich auf Wunsch dabei, deine Online-Präsenz weiterzuentwickeln.',
    tag: 'Optional · ganz nach Bedarf',
  },
]

export const PILLARS = [
  {
    icon: 'pen',
    title: 'Modernes Design',
    text: 'Ein Auftritt, der zeitgemäß wirkt und wirklich zu deinem Unternehmen passt.',
  },
  {
    icon: 'chat',
    title: 'Verständliche Beratung',
    text: 'Klare Worte statt Fachchinesisch – du weißt immer, woran du bist.',
  },
  {
    icon: 'layers',
    title: 'Durchdachte Lösungen',
    text: 'Maßnahmen, die zusammenpassen und auf deine Ziele einzahlen.',
  },
]

export const FAQS = [
  {
    q: 'Was kostet eine professionelle Website?',
    a: [
      'Das hängt davon ab, was deine Website leisten soll – zum Beispiel vom Umfang, von den gewünschten Funktionen und davon, ob Texte, Bilder oder die Einrichtung deines Google-Profils dazugehören.',
      'Statt pauschaler Paketpreise erhältst du nach dem kostenlosen Erstgespräch ein individuelles Angebot, in dem du genau nachvollziehen kannst, welche Leistungen enthalten sind.',
    ],
  },
  {
    q: 'Wie lange dauert die Erstellung einer Website?',
    a: [
      'Die Dauer richtet sich nach dem Umfang deines Projekts und danach, wie schnell Inhalte wie Texte, Bilder oder Logos vorliegen. Eine kompakte Unternehmenswebsite ist in der Regel deutlich schneller umgesetzt als ein umfangreicher Auftritt mit vielen Unterseiten.',
      'Einen realistischen Zeitplan besprechen wir gemeinsam – damit du von Anfang an weißt, woran du bist.',
    ],
  },
  {
    q: 'Kann ich meine bestehende Website überarbeiten lassen?',
    a: [
      'Ja. Wir schauen uns deine aktuelle Website gemeinsam an und prüfen, was sich verbessern lässt – von Design und Struktur über die Ladezeit bis zur Darstellung auf dem Smartphone.',
      'Danach entscheiden wir zusammen, ob eine Überarbeitung oder ein Neustart für dich sinnvoller ist.',
    ],
  },
  {
    q: 'Unterstützt ihr mich auch bei Google?',
    a: [
      'Ja, das ist einer unserer Schwerpunkte. Wir unterstützen dich zum Beispiel bei der Einrichtung und Optimierung deines Google-Unternehmensprofils, bei der lokalen Suchmaschinenoptimierung und beim stimmigen Aufbau deiner Online-Präsenz.',
      'Bestimmte Platzierungen kann seriöserweise niemand garantieren – wir sorgen aber dafür, dass dein Unternehmen die bestmöglichen Voraussetzungen hat, gefunden zu werden.',
    ],
  },
  {
    q: 'Ist die Website für Smartphones optimiert?',
    a: [
      'Ja, immer. Jede Website, die wir entwickeln, ist für Smartphone, Tablet und Desktop optimiert. Gerade bei der Suche nach Unternehmen in der Nähe sind viele Menschen mobil unterwegs – deshalb denken wir die mobile Ansicht von Anfang an mit.',
    ],
  },
  {
    q: 'Kann ich meine Website später erweitern?',
    a: [
      'Ja. Wir bauen deine Website so auf, dass sie mit deinem Unternehmen mitwachsen kann. Neue Seiten, Leistungen oder Funktionen lassen sich auch später ergänzen – ganz nach deinem Bedarf.',
    ],
  },
  {
    q: 'Wie läuft ein kostenloses Erstgespräch ab?',
    a: [
      'Ganz entspannt: Du sendest uns über das Kontaktformular eine kurze Anfrage, wir melden uns bei dir und vereinbaren einen Termin – telefonisch oder per Video-Call.',
      'Im Gespräch lernen wir dein Unternehmen und deine Ziele kennen und zeigen dir, welche Möglichkeiten es für dich gibt. Das Erstgespräch ist kostenlos und unverbindlich.',
    ],
  },
]

/** Szenen für die animierte Hero-Visualisierung (zeigt: wir arbeiten branchenübergreifend) */
export const HERO_SCENES = [
  { query: 'Friseur in der Nähe', category: 'Friseursalon', lead: 'Neue Terminanfrage' },
  { query: 'Elektriker in der Nähe', category: 'Elektrobetrieb', lead: 'Neue Angebotsanfrage' },
  { query: 'Restaurant in der Nähe', category: 'Restaurant', lead: 'Neue Tischreservierung' },
  { query: 'Kosmetikstudio in der Nähe', category: 'Kosmetikstudio', lead: 'Neue Terminanfrage' },
  { query: 'Steuerberatung in der Nähe', category: 'Kanzlei', lead: 'Neue Kontaktanfrage' },
  { query: 'Blumenladen in der Nähe', category: 'Blumenladen', lead: 'Neue Bestellanfrage' },
]

export const MARQUEE = [
  'Handwerksbetriebe',
  'Restaurants & Cafés',
  'Friseursalons',
  'Kosmetikstudios',
  'Dienstleister',
  'Lokale Geschäfte',
  'Selbstständige',
  'Kleine & mittelständische Unternehmen',
]
