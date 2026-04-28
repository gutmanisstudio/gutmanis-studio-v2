'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { NeonButton } from '@/components/NeonButton'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Gutmanis Studio',
  description: 'Profesionāla mājas lapu izstrāde Rīgā. Individuāls web dizains, galvenās lapas, biznesa mājas lapas un e-komercija.',
  url: 'https://gutmanistudio.lv/lv',
  telephone: '+37122122027',
  email: 'roberts@gutmanistudio.lv',
  address: { '@type': 'PostalAddress', addressLocality: 'Rīga', addressCountry: 'LV' },
  geo: { '@type': 'GeoCoordinates', latitude: 56.9496, longitude: 24.1052 },
  priceRange: '€300–€2000+',
  areaServed: 'Rīga',
  serviceType: ['Mājas lapu izveide', 'Web dizains', 'Landing page izveide', 'E-komercija'],
  sameAs: ['https://instagram.com/rguutmanis', 'https://www.tiktok.com/@gutmanis'],
}

const faq = [
  { q: 'Cik ilgi aizņem mājas lapas izveide?', a: 'Galvenā lapa — 3–5 dienas. Biznesa mājaslapa — 7–10 dienas. E-komercija — 14–21 diena. Vienmēr apstiprinu termiņu pirms sākuma.' },
  { q: 'Cik maksā mājas lapas izveide?', a: 'Galvenā lapa no €300, biznesa mājaslapa no €500, e-komercija no €1000. Katra mājaslapa ir individuāla — cenu apstiprinu pēc projekta detaļu apspriešanas.' },
  { q: 'Vai izmantojat veidnes?', a: 'Nē. Katra mājaslapa tiek veidota no nulles — bez veidnēm, bez WordPress. Tīrs, ātrs kods ar Next.js un Tailwind CSS.' },
  { q: 'Vai strādājat ar klientiem ārpus Rīgas?', a: 'Jā. Strādāju ar klientiem visā Latvijā un starptautiski — WhatsApp, e-pasts vai video zvans.' },
  { q: 'Kas iekļauts mēneša uzturēšanā?', a: 'Hostings, drošība, rezerves kopijas un neierobežoti mazie labojumi. Rakstiet WhatsApp — parūpēšos tajā pašā dienā.' },
]

const projects = [
  { name: 'Flower Station Rīga', tag: 'Ziedu veikals · Rīga', url: 'https://flowerstation.lv' },
  { name: 'NFD Detailing Studio', tag: 'Auto dīteilings · Rīga', url: 'https://nfd-detailing.vercel.app' },
  { name: 'SevArch Gym', tag: 'MMA sporta zāle · Rīga', url: 'https://sevarch.eu' },
  { name: 'Table 7', tag: 'Restorāns · Rīga', url: 'https://table7.vercel.app' },
]

export default function LvPage() {
  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }) }} />

      <main style={{ paddingTop: '64px', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ padding: '8rem 2.5rem 6rem', maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.58rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
            Web Dizaina Studija · Rīga, Latvija
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '24px' }}>
            Mājas lapu izveide Rīgā
          </h1>
          <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, marginBottom: '40px', maxWidth: '620px' }}>
            Veidojam individuālas mājas lapas uzņēmumiem, kuriem rūp, kā viņi izskatās tiešsaistē. Bez veidnēm, bez WordPress — tikai tīrs, ātrs kods. Gatavs 5 dienās.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <NeonButton href="/contact">Sākt projektu</NeonButton>
            <a href="#darbi" style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.82rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}>Skatīt darbus →</a>
          </div>
        </section>

        {/* What we do */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '80px 2.5rem', maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: '32px' }}>
            Ko mēs piedāvājam
          </h2>
          <div className="lv-services" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px', background: 'rgba(255,255,255,0.07)' }}>
            {[
              { title: 'Galvenā Lapa', desc: 'Viena fokusēta lapa, kas piesaista uzmanību un liek rīkoties. Gatavs 3–5 dienās.', price: 'No €300' },
              { title: 'Biznesa Mājaslapa', desc: '3–5 lapas, kontaktforma, jūsu brends visur. Gatavs 7–10 dienās.', price: 'No €500' },
              { title: 'Uzturēšana', desc: 'Hostings, drošība, neierobežoti labojumi. WhatsApp atbalsts. Atceliet jebkurā laikā.', price: 'No €50/mēn' },
              { title: 'E-Komercija', desc: 'Shopify vai WooCommerce. Produktu lapas, grozs, maksājumu integrācija.', price: 'No €1000' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#0f0f0f', padding: '36px 32px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: '1.4rem', color: '#fff', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: '16px' }}>{s.desc}</p>
                <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="darbi" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '80px 2.5rem', maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: '32px' }}>
            Mūsu darbi
          </h2>
          {projects.map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.07)',
              textDecoration: 'none', transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <div>
                <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.95rem', color: '#fff', fontWeight: 400 }}>{p.name}</p>
                <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>{p.tag}</p>
              </div>
              <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Skatīt →</span>
            </a>
          ))}
        </section>

        {/* FAQ */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '80px 2.5rem', maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: '40px' }}>
            Bieži uzdotie jautājumi
          </h2>
          {faq.map((f, i) => (
            <details key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <summary style={{
                fontFamily: 'var(--font-body), sans-serif', fontSize: '0.92rem', color: '#fff', fontWeight: 300,
                padding: '22px 0', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                {f.q}
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem', flexShrink: 0 }}>+</span>
              </summary>
              <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, paddingBottom: '22px', maxWidth: '680px' }}>
                {f.a}
              </p>
            </details>
          ))}
        </section>

        {/* CTA */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '80px 2.5rem', maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
            Gatavs sākt?
          </h2>
          <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px' }}>
            Pastāstiet par savu projektu un atbildēsim 24 stundu laikā ar cenu un termiņiem.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <NeonButton href="/contact">Sākt projektu</NeonButton>
            <a href="https://wa.me/37122122027" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'var(--font-body), sans-serif', fontSize: '0.82rem', fontWeight: 500,
              color: 'rgba(255,255,255,0.5)', padding: '0.9rem 0', transition: 'color 0.2s',
            }}>WhatsApp →</a>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 600px) {
          .lv-services { grid-template-columns: 1fr !important; }
        }
        details summary::-webkit-details-marker { display: none; }
        details[open] summary span { transform: rotate(45deg); display: inline-block; }
      `}</style>
    </>
  )
}
