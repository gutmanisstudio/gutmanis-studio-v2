'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/useLang'
import { t } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const { lang } = useLang()

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: '64px', minHeight: '100vh' }}>

        {/* Photo */}
        <div style={{ position: 'relative', height: '580px', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/roberts.jpg"
            alt="Roberts Gutmanis"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block', filter: 'brightness(0.92)' }}
          />
          <div style={{
            position: 'absolute', bottom: '24px', right: '24px',
            background: 'rgba(8,8,8,0.85)', border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)', padding: '14px 20px', textAlign: 'right',
          }}>
            <div style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: '1.6rem', color: '#fff', lineHeight: 1 }}>21</div>
            <div style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginTop: '3px' }}>
              {t.about.tag1[lang]}
            </div>
          </div>
        </div>

        {/* Content */}
        <section style={{ padding: '100px 60px', maxWidth: '1280px', margin: '0 auto' }}>
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'center' }}>

            <motion.div
              initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.58rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
                {t.about.eyebrow[lang]}
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 300, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
                Roberts Gutmanis
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.88rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>
                {t.about.p1[lang]}
              </p>
              <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.88rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>
                {t.about.p2[lang]}
              </p>
              <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.88rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.45)', marginBottom: '28px' }}>
                {t.about.p3[lang]}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Next.js', 'Tailwind CSS', 'Framer Motion', 'React', 'TypeScript', t.about.tag1[lang], t.about.tag2[lang]].map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-body), sans-serif', fontSize: '0.58rem',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.07)',
                    padding: '7px 14px', transition: 'all 0.2s', cursor: 'default',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.2)' }}
                  >{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 960px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          main section { padding: 48px 14px !important; }
          main > div:first-child { height: 360px !important; }
        }
      `}</style>
    </>
  )
}
