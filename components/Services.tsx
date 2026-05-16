'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/useLang'
import { t } from '@/lib/i18n'
import { TiltCard } from '@/components/TiltCard'

const cards = [
  { num: '01', titleKey: 's1title' as const, descKey: 's1desc' as const, bullets: ['s1b1', 's1b2', 's1b3', 's1b4'] as const, badge: null },
  { num: '02', titleKey: 's2title' as const, descKey: 's2desc' as const, bullets: ['s2b1', 's2b2', 's2b3', 's2b4'] as const, badge: 's2badge' as const },
  { num: '03', titleKey: 's3title' as const, descKey: 's3desc' as const, bullets: ['s3b1', 's3b2', 's3b3', 's3b4'] as const, badge: null },
  { num: '04', titleKey: 's4title' as const, descKey: 's4desc' as const, bullets: ['s4b1', 's4b2', 's4b3', 's4b4'] as const, badge: null },
]

export default function Services() {
  const { lang } = useLang()

  return (
    <section id="services" style={{ padding: '6rem 2.5rem', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ fontFamily: "var(--font-ui), sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '3rem', textAlign: 'center', paddingLeft: '0.5em' }}>
          {t.services.eyebrow[lang]}
        </motion.p>

        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              style={{ height: '100%' }}
            >
            <TiltCard
              tiltLimit={10}
              scale={1.02}
              effect="gravitate"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(18,10,13,0.86), rgba(8,5,10,0.92) 70%, rgba(8,5,10,0.96)), ' +
                  'url(/images/product-cards-background.jpg)',
                backgroundSize: 'cover, cover',
                backgroundPosition: 'center, center',
                backgroundRepeat: 'no-repeat, no-repeat',
                border: '1px solid var(--line-strong)',
                borderRadius: '16px',
                padding: '1.8rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {/* Badge */}
              {card.badge && (
                <span style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  fontFamily: "var(--font-ui), sans-serif", fontSize: '0.6rem', fontWeight: 700,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: '#0a0a0b', background: 'linear-gradient(180deg, #ffffff 0%, #e8e8e8 55%, #b8b8b8 100%)',
                  padding: '0.28rem 0.65rem', borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.6)',
                }}>
                  {t.services[card.badge][lang]}
                </span>
              )}

              {/* Number */}
              <span style={{ fontFamily: "var(--font-ui), sans-serif", fontSize: '0.68rem', fontWeight: 600, color: 'var(--ink-faint)', letterSpacing: '0.16em', marginBottom: '1rem' }}>
                {card.num}
              </span>

              {/* Title */}
              <h3 style={{ fontFamily: "var(--font-ui), sans-serif", fontSize: '1.55rem', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: '0.8rem', minHeight: '3.5rem', lineHeight: 1.1 }}>
                {t.services[card.titleKey][lang]}
              </h3>

              {/* Description */}
              <p style={{ fontFamily: "var(--font-ui), sans-serif", fontSize: '0.82rem', fontWeight: 400, color: 'var(--ink-mute)', lineHeight: 1.65, marginBottom: '1.5rem', minHeight: '7rem' }}>
                {t.services[card.descKey][lang]}
              </p>

              {/* Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {card.bullets.map(bKey => (
                  <div key={bKey} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{ fontFamily: "var(--font-ui), sans-serif", fontSize: '0.78rem', fontWeight: 400, color: 'var(--ink-mute)' }}>
                      {t.services[bKey][lang]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ width: '100%', height: '1px', background: 'var(--line)', marginBottom: '1.2rem', marginTop: 'auto' }} />

              {/* Price + CTA row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: "var(--font-ui), sans-serif", fontSize: '0.72rem', fontWeight: 600, color: 'var(--ink-faint)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                  {t.services.pricing[lang]}
                </span>
                <a href="/contact" style={{
                  fontFamily: "var(--font-ui), sans-serif", fontSize: '0.7rem', fontWeight: 600,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'var(--ink)', textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '0.35rem',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--crimson)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--ink)'}
                >
                  {t.services.getStarted[lang]}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
