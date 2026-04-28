import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mājas Lapu Izveide Rīgā | Web Dizains — Gutmanis Studio',
  description: 'Profesionāla mājas lapu izstrāde Rīgā. Individuāls web dizains bez veidnēm — galvenās lapas, biznesa mājas lapas, e-komercija. Gatavs 5 dienās. No €300.',
  keywords: [
    'mājas lapu izveide', 'mājas lapas izveide', 'mājas lapu izstrāde',
    'web dizains rīga', 'web dizaineris rīga', 'mājas lapas izstrāde rīga',
    'mājas lapas cena', 'web lapu izstrāde', 'mājaslapu izveide latvija',
    'interneta mājas lapas izveide', 'mājas lapas izveide cena',
    'biznesa mājas lapa', 'landing page izveide', 'e-komercija izveide rīga',
    'web izstrāde latvija', 'mājas lapu dizains',
  ],
  alternates: {
    canonical: 'https://gutmanistudio.lv/lv',
    languages: {
      'en': 'https://gutmanistudio.lv',
      'lv': 'https://gutmanistudio.lv/lv',
    },
  },
  openGraph: {
    title: 'Mājas Lapu Izveide Rīgā — Gutmanis Studio',
    description: 'Individuāls web dizains bez veidnēm. Galvenās lapas, biznesa vietnes, e-komercija. Rīga, Latvija.',
    locale: 'lv_LV',
    url: 'https://gutmanistudio.lv/lv',
  },
}

export default function LvLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
