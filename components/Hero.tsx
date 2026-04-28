'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/lib/useLang'
import { t } from '@/lib/i18n'
import { projects } from '@/lib/projects'
import { NeonButton } from '@/components/NeonButton'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const heroSlugs = ['bouquets-by-liz', 'table7', 'sevarch', 'flower-station']
const featured = heroSlugs.map(s => projects.find(p => p.slug === s)!)
const rotations = ['0deg', '2deg', '-1deg', '1.5deg']
const offsets = [0, -15, -30, -45]

const reviewKeys = [
  { q: 'r1q' as const, a: 'r1a' as const },
  { q: 'r2q' as const, a: 'r2a' as const },
  { q: 'r3q' as const, a: 'r3a' as const },
]

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <svg
        style={{ width: '100%', height: '100%', color: 'rgba(255,255,255,0.8)' }}
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.03 + path.id * 0.008}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function Hero() {
  const { lang } = useLang()
  const [reviewIndex, setReviewIndex] = useState(0)

  useEffect(() => {
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
      background: 'transparent',
    }}>
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 0.04 }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves={3} stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="0.4" />
        </svg>
      </div>

      <div className="hero-grid" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        <div className="hero-left">
          <motion.div {...fadeUp(0.1)} style={{ marginBottom: '2rem' }}>
            <span style={{
              fontFamily: "var(--font-body), sans-serif", fontSize: '0.72rem', fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.12)',
              padding: '0.4rem 1rem', borderRadius: '999px', display: 'inline-block',
            }}>{t.hero.badge[lang]}</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontSize: 'clamp(4rem, 10vw, 9rem)',
            lineHeight: 0.95, letterSpacing: '0.02em',
            color: '#fff', marginBottom: '2rem',
            maxWidth: '900px',
          }}>
            {t.hero.headline[lang].split(' ').map((word, i) => (
              <span key={i} style={{ display: 'inline-block', marginRight: '0.2em' }}>
                {i === 1 ? <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.45)' }}>{word}</em> : word}
              </span>
            ))}
          </motion.h1>

          <motion.p {...fadeUp(0.35)} style={{
            fontFamily: "var(--font-body), sans-serif", fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            fontWeight: 300, color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.7, maxWidth: '520px', marginBottom: '3rem',
          }}>{t.hero.sub[lang]}</motion.p>

          <motion.div {...fadeUp(0.45)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <NeonButton href="/contact">{t.hero.btn1[lang]}</NeonButton>
            <a href="/work" style={{
              fontFamily: "var(--font-body), sans-serif", fontSize: '0.82rem', fontWeight: 500,
              letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)',
              transition: 'color 0.2s', padding: '0.9rem 0',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >{t.hero.btn2[lang]}</a>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.5)}
          className="hero-right"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0px',
          }}
        >
          <div className="hero-review-card" style={{
            position: 'relative', alignSelf: 'flex-end', marginBottom: '1.2rem',
            zIndex: 3, minHeight: '90px',
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={reviewIndex}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '1rem 1.2rem',
                  maxWidth: '220px',
                }}
              >
                <p style={{
                  fontFamily: "var(--font-body), sans-serif", fontSize: '0.72rem',
                  color: '#fff', lineHeight: 1.5, fontWeight: 400, marginBottom: '0.5rem',
                }}>&ldquo;{t.reviews[reviewKeys[reviewIndex].q][lang]}&rdquo;</p>
                <p style={{
                  fontFamily: "var(--font-body), sans-serif", fontSize: '0.62rem',
                  color: 'rgba(255,255,255,0.4)', fontWeight: 500, letterSpacing: '0.03em',
                }}>{t.reviews[reviewKeys[reviewIndex].a][lang]}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {featured.map((project, i) => (
            <motion.a
              key={project.slug}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                display: 'block',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
                transform: `rotate(${rotations[i]}) translateY(${offsets[i]}px)`,
                border: '1px solid rgba(255,255,255,0.08)',
                position: 'relative',
                zIndex: featured.length - i,
                width: '100%',
                maxWidth: '380px',
              }}
            >
              <div style={{
                background: '#1a1a1a',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
                <span style={{
                  fontFamily: "var(--font-body), sans-serif", fontSize: '0.6rem',
                  color: 'rgba(255,255,255,0.3)', marginLeft: '8px',
                  letterSpacing: '0.03em',
                }}>{project.title}</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '160px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 55% 45%;
          align-items: center;
          gap: 2rem;
        }
        .hero-right {
          display: flex;
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { display: none !important; }
          .hero-review-card { display: none !important; }
        }
      `}</style>
    </section>
  )
}
