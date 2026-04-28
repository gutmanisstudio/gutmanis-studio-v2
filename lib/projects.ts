export type Project = {
  slug: string
  title: string
  category: string
  description: string
  longDescription: string
  tags: string[]
  liveUrl: string
  image: string
  year: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'flower-station',
    title: 'Flower Station',
    category: 'Local Business · Floristry · Rīga',
    description: 'Live client site for a local Riga flower shop. Product catalogue, WhatsApp ordering, Google Maps embed.',
    longDescription: 'Full business website for a Riga flower shop. Latvian copy, scrolling ticker banner, product catalogue with category filters, rose pricing grid, WhatsApp ordering, Google Maps embed, Instagram link and a contact form — fully responsive.',
    tags: ['Next.js', 'Tailwind', 'WhatsApp Integration', 'E-Commerce'],
    liveUrl: 'https://flowerstation.lv',
    image: '/images/flower.png',
    year: '2026',
    featured: true,
  },
  {
    slug: 'nfd-detailing',
    title: 'NFD Detailing Studio',
    category: 'Business Website · Auto Detailing · Rīga',
    description: 'Dark theme detailing studio site. Gold accents, animated service cards, before/after section, photo gallery.',
    longDescription: 'Next.js + Tailwind demo for a real Riga detailing studio. Gold accent palette, full-screen image hero, animated service cards, before/after section, photo gallery carousel, Google Maps + WhatsApp booking integration and smooth scroll transitions.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'WhatsApp Integration'],
    liveUrl: 'https://nfd-detailing.vercel.app',
    image: '/images/nfd.png',
    year: '2026',
    featured: true,
  },
  {
    slug: 'myofferiq',
    title: 'MyOfferIQ',
    category: 'SaaS Landing Page · PropTech',
    description: 'US real estate SaaS landing page. Dark hero, live rebate calculator, agent carousel, animated stats.',
    longDescription: 'US real estate SaaS landing page built for paid traffic conversion. Dark hero, live rebate calculator, agent carousel, animated stats counters, testimonial grid and dual CTA structure optimised for lead capture.',
    tags: ['Next.js', 'Tailwind', 'SaaS', 'Conversion Optimisation'],
    liveUrl: 'https://myofferiq.netlify.app',
    image: '/images/myoffer.png',
    year: '2026',
    featured: true,
  },
  {
    slug: 'maison-jade',
    title: 'Maison Jadé',
    category: 'E-Commerce · Fashion · 5 Pages',
    description: 'Luxury fashion e-commerce. 5 pages, working cart, cinematic hero, product detail pages.',
    longDescription: 'Luxury fashion e-commerce — 5 pages, 3 product lines, fully working cart with order summary. Cinematic hero, product detail pages, collection grid, contact enquiry form and a dark editorial footer.',
    tags: ['Next.js', 'Tailwind', 'E-Commerce', 'Cart System'],
    liveUrl: 'https://maisonjade.netlify.app',
    image: 'https://i.imgur.com/5xW3mOl.png',
    year: '2026',
    featured: false,
  },
  {
    slug: 'lingua',
    title: 'Lingua',
    category: 'Landing Page · Language Platform',
    description: 'Language platform landing page. Live course calculator, tutor carousel, pricing tiers, FAQ accordion.',
    longDescription: 'Language platform landing page. Animated hero with fluency promise, live course calculator, tutor carousel, stats section, pricing tiers, FAQ accordion and a full-width CTA — built for conversion.',
    tags: ['Next.js', 'Tailwind', 'SaaS', 'Landing Page'],
    liveUrl: 'https://linguav2.netlify.app',
    image: 'https://i.imgur.com/U5xrGe2.png',
    year: '2026',
    featured: false,
  },
  {
    slug: 'kalnins-partneri',
    title: 'Kalniņš & Partneri',
    category: 'Business Website · Legal · Rīga',
    description: 'Latvian law firm website. Booking form, practice areas, attorney profiles, client testimonials.',
    longDescription: 'Latvian law firm website. Consultation booking form, practice areas grid, attorney profile section, client testimonials, FAQ accordion and a dark CTA footer — professional and trust-focused.',
    tags: ['Next.js', 'Tailwind', 'Business Website'],
    liveUrl: 'https://kalninslaw.netlify.app',
    image: 'https://i.imgur.com/lWfeiBc.png',
    year: '2026',
    featured: false,
  },
  {
    slug: 'bouquets-by-liz',
    title: 'Bouquets by Liz',
    category: 'Business Website · Floristry · NYC',
    description: 'NYC flower shop. Dark cinematic theme, WhatsApp order form, product catalogue, Google Business setup.',
    longDescription: 'Full business website for a Queens NYC florist. Dark cinematic theme, animated gradient sections, product catalogue with 3 categories, WhatsApp order form, Google Business Profile setup, same-day delivery focus.',
    tags: ['Next.js', 'Tailwind', 'WhatsApp Integration', 'Business Website'],
    liveUrl: 'https://bouquets-by-liz.vercel.app',
    image: '/images/liz.png',
    year: '2026',
    featured: true,
  },
  {
    slug: 'table7',
    title: 'Table 7',
    category: 'Business Website · Restaurant · Rīga',
    description: 'Dark cinematic restaurant site. Full-screen video hero, menu sections, reservations, Google Maps.',
    longDescription: 'Dark luxury restaurant website for a Riga gastropub. Cinematic video hero, interactive menu with categories, reservation form, reviews section, Google Maps integration and smooth scroll transitions.',
    tags: ['Next.js', 'Tailwind', 'Restaurant', 'Framer Motion'],
    liveUrl: 'https://table7.vercel.app',
    image: '/images/table7.png',
    year: '2026',
    featured: true,
  },
  {
    slug: 'sevarch',
    title: 'SevArch Gym',
    category: 'Business Website · MMA & Combat Sports · Rīga',
    description: 'MMA gym website. Training schedule, trainer profiles, cinematic hero, achievements section.',
    longDescription: 'Premium MMA and combat sports gym website. Cinematic dark hero, training schedule, trainer profiles, achievements, about and contact — built for the Latvian MMA scene.',
    tags: ['Next.js', 'Tailwind', 'Business Website'],
    liveUrl: 'https://sevarch.eu',
    image: '/images/sevarch.png',
    year: '2026',
    featured: true,
  },
]
