/**
 * Edit this file to update copy, links, prices, and portfolio/reel entries.
 * Replace sample video URLs with your own hosted files or CDN links.
 */

export type PortfolioSite = {
  id: string
  title: string
  subtitle: string
  url: string
  previewImage?: string
  cardGradient: string
}

export type ReelItem = {
  id: string
  title: string
  videoSrc: string
  posterSrc?: string
  statsLabel: string
  externalUrl?: string
}

export type PricingPackage = {
  id: string
  packTag: string
  quoteTitle: string
  name: string
  features: string[]
  priceFrom: string
  note?: string
  ctaLabel: string
  ctaHref: string
  highlighted?: boolean
}

const CONTACT_EMAIL = 'chomawerka@gmail.com'

/** Opens Gmail “Compose” in the browser (logged-in user). */
function gmailComposeUrl(to: string, subject?: string): string {
  const url = new URL('https://mail.google.com/mail/')
  url.searchParams.set('view', 'cm')
  url.searchParams.set('fs', '1')
  url.searchParams.set('to', to)
  if (subject) url.searchParams.set('su', subject)
  return url.toString()
}

export const siteMeta = {
  name: 'Weronika',
  /** Large hero name — can be uppercase styling in CSS */
  displayName: 'Weronika',
  role: 'Strony internetowe · montaż social media · marka osobista',
  roleShort: 'Strony www · montaż · marka osobista',
  title: 'Weronika — strony i montaż pod Twoją markę',
  email: CONTACT_EMAIL,
  /** Primary CTA: new message in Gmail to you, with subject preset. */
  consultationUrl: gmailComposeUrl(CONTACT_EMAIL, 'Konsultacja'),
  /** Inline email link / contact button: compose to you without a preset subject. */
  emailComposeUrl: gmailComposeUrl(CONTACT_EMAIL),
  location: 'Lublin · współpraca zdalnie',
  social: {
    instagram: 'https://instagram.com/',
    instagramHandle: '@twoj_instagram',
  },
}

export const heroContent = {
  portfolioLabel: 'Portfolio',
  /** Two lines for big statement block (Canva-style) */
  statementLines: ['Tworzę spójny wizerunek,', 'który zostaje w pamięci.'],
  lead:
    'Łączę projektowanie stron z montażem treści na social media — od layoutu po gotowe rolki. Brief, tempo i estetyka dopasowane pod Twój biznes.',
  ctaLabel: 'Zapytaj o wycenę',
  photoSrc: '/photo.jpg',
  photoAlt: 'Zdjęcie profilowe',
}

export const exploreChips = [
  { href: '#o-mnie', label: 'O mnie' },
  { href: '#portfolio', label: 'Strony www' },
  { href: '#rolki', label: 'Rolki i shorty' },
  { href: '#cennik', label: 'Oferta' },
  { href: '#kontakt', label: 'Kontakt' },
]

export const aboutContent = {
  eyebrow: 'Kilka słów',
  headline: 'Działam tak, żebyś mógł/mogła spokojnie pokazać efekt',
  paragraphs: [
    'Zaangażowanie i konkret zamiast pustych obietnic — najpierw słucham, potem proponuję układ strony, styl graficzny i formę treści w social.',
    'Komunikacja na bieżąco, terminowe oddania i rozwiązania dopasowane do Ciebie, nie do szablons „dla wszystkich”.',
  ],
}

export const pricingContent = {
  intro:
    'Orientacyjne widełki — dokładną wycenę ustalamy po krótkiej rozmowie. Wybierz zakres, który Ci odpowiada.',
  introEyebrow: 'Co oferuję',
  packages: [
    {
      id: 'web',
      packTag: 'Strona www',
      quoteTitle: 'Twoja wizytówka w sieci',
      name: 'Projekt i wdrożenie strony',
      features: [
        'Landing lub strona wizytówka pod Twoją ofertę',
        'Układ responsywny i czytelna typografia',
        'Sekcje pod konwersję (CTA, kontakt)',
        'Podstawowe SEO techniczne i szybkość ładowania',
      ],
      priceFrom: 'od 2 500 PLN',
      note: 'Końcowa kwota zależy od liczby podstron, integracji i treści.',
      ctaLabel: 'Zapytaj o wycenę — klik!',
      ctaHref: siteMeta.consultationUrl,
    },
    {
      id: 'edit',
      packTag: 'Montaż',
      quoteTitle: 'Rolki pod algorytm',
      name: 'Montaż reels / shortów',
      features: [
        'Cięcie, rytm i dopracowanie dźwięku',
        'Napisy i prosty motion',
        'Pliki gotowe pod Instagram / TikTok / YouTube Shorts',
        'Możliwość pakietu przy większej liczbie materiałów',
      ],
      priceFrom: 'od 300 PLN / rolka',
      note: 'Przy serii nagrań — pakiet z rabatem.',
      ctaLabel: 'Zapytaj o wycenę — klik!',
      ctaHref: gmailComposeUrl(CONTACT_EMAIL, 'Brief na montaż'),
      highlighted: true,
    },
    {
      id: 'brand',
      packTag: 'Marka',
      quoteTitle: 'Spójny obraz marki',
      name: 'Konsultacja marki osobistej',
      features: [
        '60 min online: profil, przekaz, kanały social',
        'Jak spiąć stronę z publikacjami i rolkami',
        'Sugestie tonów i tematów pod Twoją grupę odbiorców',
      ],
      priceFrom: '350 PLN / 60 min',
      note: 'Możliwość łączenia z realizacją strony lub montażu.',
      ctaLabel: 'Zapytaj o wycenę — klik!',
      ctaHref: siteMeta.consultationUrl,
    },
  ] satisfies PricingPackage[],
}

export const portfolioSites: PortfolioSite[] = [
  {
    id: '1',
    title: 'Przykładowy projekt A',
    subtitle: 'Landing — branża usługowa',
    url: 'https://example.com',
    cardGradient:
      'linear-gradient(135deg, #8b4d5c 0%, #c56b5c 40%, #f0c09a 75%, #f5ddd4 100%)',
  },
  {
    id: '2',
    title: 'Przykładowy projekt B',
    subtitle: 'Strona wizytówka',
    url: 'https://example.org',
    cardGradient:
      'linear-gradient(135deg, #6b4f63 0%, #8fa985 42%, #c5d4c0 70%, #fce8dc 100%)',
  },
  {
    id: '3',
    title: 'Przykładowy projekt C',
    subtitle: 'Portfolio klienta',
    url: 'https://example.net',
    cardGradient:
      'linear-gradient(135deg, #a6554a 0%, #f0c09a 35%, #fcded0 70%, #fff8f1 100%)',
  },
]

export const reelItems: ReelItem[] = [
  {
    id: 'r1',
    title: 'Kampania produktowa',
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    statsLabel: 'Wyświetlenia: 24 tys. · zaangażowanie: 7,1% · udostępnienia: 312',
    posterSrc: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
  },
  {
    id: 'r2',
    title: 'Hook edukacyjny',
    videoSrc: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    statsLabel: 'Wyświetlenia: 18 tys. · zaangażowanie: 5,4% · zapisów: 890',
  },
  {
    id: 'r3',
    title: 'Za kulisami marki',
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    statsLabel: 'Wyświetlenia: 41 tys. · zaangażowanie: 8,9% · komentarze: 156',
  },
]

export const contactContent = {
  eyebrow: 'Kontakt',
  headline: 'Zróbmy to razem!',
  lead: 'Napisz, czego potrzebujesz — odezwę się z wolnym terminem i kolejnymi krokami.',
  trustLine: 'Zaufane współprace, konkretne terminy i materials gotowe do publikacji.',
}
