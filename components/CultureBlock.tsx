'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/useLang'
import { t } from '@/lib/i18n'

/**
 * Culture II homage block.
 * Solid crimson panel, stacked wordmark in Space Grotesk, portrait with preserved hard shadow.
 * Sits between Services and About on the home page.
 */
export default function CultureBlock() {
  const { lang } = useLang()

  return (
    <section style={{
      position: 'relative',
      padding: '7rem 2.5rem',
      // saturated crimson with a slight vertical gradient for depth, plus a top/bottom black bleed
      background: 'linear-gradient(180deg, #0a0a0b 0%, #5a0810 8%, #8b0a14 50%, #5a0810 92%, #0a0a0b 100%)',
      overflow: 'hidden',
      borderTop: '1px solid rgba(200,200,200,0.18)',
      borderBottom: '1px solid rgba(200,200,200,0.18)',
    }}>
      {/* film grain over crimson */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 0.08, mixBlendMode: 'overlay' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <filter id="culture-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#culture-noise)" />
        </svg>
      </div>

      {/* watermark Roman numeral II */}
      <div aria-hidden style={{
        position: 'absolute',
        right: '-2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: 'var(--font-heading), sans-serif',
        fontWeight: 700,
        fontSize: 'clamp(20rem, 45vw, 44rem)',
        lineHeight: 0.8,
        color: 'transparent',
        WebkitTextStroke: '2px rgba(200,200,200,0.10)',
        letterSpacing: '-0.04em',
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 1,
      }}>II</div>

      <div className="culture-grid" style={{
        position: 'relative', zIndex: 2,
        maxWidth: '1180px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '5fr 7fr',
        gap: '3rem', alignItems: 'center',
      }}>
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="culture-portrait"
          style={{ position: 'relative' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/portrait.jpg"
            alt="Roberts Gutmanis — Founder, Gutmanis Studio"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '2px',
              boxShadow: '0 40px 80px rgba(0,0,0,0.55)',
            }}
          />
          {/* Tag chip overlay, bottom-left */}
          <div style={{
            position: 'absolute', left: '1rem', bottom: '1rem',
            padding: '0.4rem 0.8rem',
            background: 'rgba(10,10,11,0.7)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(200,200,200,0.18)',
            borderRadius: '999px',
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '0.62rem', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--c-silver)',
          }}>Roberts Gutmanis · Founder</div>
        </motion.div>

        {/* Wordmark stack */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="culture-wordmark"
        >
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '0.7rem', fontWeight: 600,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--c-silver)',
            marginBottom: '1.4rem',
            opacity: 0.9,
          }}>
            Volume II · MMXXVI · Riga
          </p>

          <h2 style={{
            fontFamily: 'var(--font-heading), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            color: '#fff',
            marginBottom: '0.4rem',
            textShadow: '0 6px 0 rgba(0,0,0,0.18), 0 18px 36px rgba(0,0,0,0.45)',
          }}>
            Gutmanis
            <br />
            <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '0.4em' }}>
              Studio
              <span style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 700,
                fontSize: '1em',
                color: 'transparent',
                WebkitTextStroke: '2px var(--c-silver)',
                letterSpacing: '-0.05em',
              }}>II</span>
            </span>
          </h2>

          <div style={{
            width: '64px', height: '1px',
            background: 'var(--c-silver)',
            margin: '1.6rem 0',
            opacity: 0.7,
          }} />

          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
            fontWeight: 300, lineHeight: 1.7,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '500px',
            marginBottom: '2rem',
          }}>
            {t.about.p1[lang]}
          </p>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontSize: '2rem', fontWeight: 700, color: '#fff', lineHeight: 1,
              }}>30+</div>
              <div style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '0.65rem', fontWeight: 600,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--c-silver)', marginTop: '0.4rem',
              }}>Sites shipped</div>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontSize: '2rem', fontWeight: 700, color: '#fff', lineHeight: 1,
              }}>100%</div>
              <div style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '0.65rem', fontWeight: 600,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--c-silver)', marginTop: '0.4rem',
              }}>Custom-built</div>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontSize: '2rem', fontWeight: 700, color: '#fff', lineHeight: 1,
              }}>EU</div>
              <div style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '0.65rem', fontWeight: 600,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--c-silver)', marginTop: '0.4rem',
              }}>Based in Riga</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .culture-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .culture-portrait { max-width: 360px; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
