'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/lib/useLang'
import { t } from '@/lib/i18n'
import { NeonButton } from '@/components/NeonButton'
import HeroParticles from '@/components/HeroParticles'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const reviewKeys = [
  { q: 'r1q' as const, a: 'r1a' as const },
  { q: 'r2q' as const, a: 'r2a' as const },
  { q: 'r3q' as const, a: 'r3a' as const },
]

export default function Hero() {
  const { lang } = useLang()
  const [reviewIndex, setReviewIndex] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const interval = setInterval(() => {
      setReviewIndex(prev => (prev + 1) % reviewKeys.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 2.5rem', paddingTop: '64px', position: 'relative',
      overflow: 'hidden',
    }}>
      {/* full-bleed background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-statue.jpg"
        alt="Gutmanis Studio monolithic emblem"
        aria-hidden
        fetchPriority="high"
        decoding="async"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: '85% center',
          transform: 'scale(0.82)',
          transformOrigin: '85% center',
          zIndex: 0,
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%), ' +
            'linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskComposite: 'source-in',
          maskImage:
            'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%), ' +
            'linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%)',
          maskComposite: 'intersect',
        }}
      />
      {/* crimson particle drift over the monument */}
      <HeroParticles />

      {/* darken / vignette for legibility */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: [
          'linear-gradient(90deg, rgba(8,5,8,0.88) 0%, rgba(8,5,8,0.55) 45%, rgba(8,5,8,0.15) 75%, rgba(8,5,8,0.35) 100%)',
          'linear-gradient(180deg, rgba(8,5,8,0.45) 0%, transparent 25%, transparent 75%, rgba(8,5,8,0.45) 100%)',
          'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(200,16,31,0.12) 0%, transparent 60%)',
        ].join(', '),
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 3 }}>
        <div style={{ maxWidth: '780px' }}>
          <motion.div {...fadeUp(0.1)} style={{ marginBottom: '2rem' }}>
            <span style={{
              fontFamily: "var(--font-body), sans-serif", fontSize: '0.72rem', fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--c-silver-soft)', border: '1px solid var(--c-silver-line)',
              padding: '0.4rem 1rem', borderRadius: '999px', display: 'inline-block',
              background: 'rgba(8,5,8,0.45)', backdropFilter: 'blur(8px)',
            }}>{t.hero.badge[lang]}</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} style={{
            fontFamily: "var(--font-ui), sans-serif",
            fontSize: 'clamp(2rem, 4.4vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.05, letterSpacing: '-0.025em',
            color: '#fff', marginBottom: '1.6rem',
            maxWidth: '780px',
            textShadow: '0 4px 30px rgba(0,0,0,0.55)',
          }}>
            {t.hero.headline[lang].split(' ').map((word, i) => (
              <span key={i} style={{ display: 'inline-block', marginRight: '0.2em' }}>
                {i === 1 ? (
                  <em style={{
                    fontFamily: 'var(--font-italic), serif',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: '#c8c8c8',
                  }}>{word}</em>
                ) : word}
              </span>
            ))}
          </motion.h1>

          <motion.p {...fadeUp(0.35)} style={{
            fontFamily: "var(--font-body), sans-serif", fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            fontWeight: 300, color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.7, maxWidth: '520px', marginBottom: '3rem',
            textShadow: '0 2px 14px rgba(0,0,0,0.6)',
          }}>{t.hero.sub[lang]}</motion.p>

          <motion.div {...fadeUp(0.45)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <NeonButton href="/contact">{t.hero.btn1[lang]}</NeonButton>
            <a href="/work" style={{
              fontFamily: "var(--font-body), sans-serif", fontSize: '0.82rem', fontWeight: 500,
              letterSpacing: '0.08em', color: 'var(--c-silver-soft)',
              transition: 'color 0.2s', padding: '0.9rem 0',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(200,200,200,0.55)'}
            >{t.hero.btn2[lang]}</a>
          </motion.div>
        </div>
      </div>

      {/* floating review card, top-right of hero */}
      <div className="hero-review-card" style={{
        position: 'absolute',
        top: '120px',
        right: '40px',
        zIndex: 4,
        minHeight: '90px',
        maxWidth: '240px',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={reviewIndex}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{
              background: 'rgba(15,15,17,0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--c-silver-line)',
              borderRadius: '10px',
              padding: '1rem 1.2rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            <p style={{
              fontFamily: "var(--font-body), sans-serif", fontSize: '0.72rem',
              color: '#fff', lineHeight: 1.5, fontWeight: 400, marginBottom: '0.5rem',
            }}>&ldquo;{t.reviews[reviewKeys[reviewIndex].q][lang]}&rdquo;</p>
            <p style={{
              fontFamily: "var(--font-body), sans-serif", fontSize: '0.62rem',
              color: 'var(--c-silver-soft)', fontWeight: 500, letterSpacing: '0.03em',
            }}>{t.reviews[reviewKeys[reviewIndex].a][lang]}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-review-card { display: none !important; }
        }
      `}</style>
    </section>
  )
}
