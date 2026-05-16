'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/useLang'
import { t } from '@/lib/i18n'
import { projects } from '@/lib/projects'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function WorkPage() {
  const { lang } = useLang()
  const featured = projects.filter(p => p.featured)
  const other = projects.filter(p => !p.featured)

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: '64px', background: 'transparent', minHeight: '100vh' }}>

        {/* Header */}
        <section style={{ padding: '6rem 2.5rem 3rem', textAlign: 'center' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1rem' }}>
            {t.nav.work[lang]}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: "var(--font-heading), sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '0.04em', color: '#ffffff', lineHeight: 1.1 }}>
            Selected Work
          </motion.h1>
        </section>

        {/* Featured — browser-window mockups */}
        <section style={{ padding: '0 1.5rem 4rem', maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {featured.map((project, i) => (
              <motion.a
                key={project.slug}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                style={{
                  display: 'block',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid var(--line-strong)',
                  background: '#161618',
                  boxShadow: '0 30px 80px -30px rgba(0,0,0,0.6), 0 8px 24px -8px rgba(0,0,0,0.4)',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                {/* Title bar with traffic lights */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '12px 16px',
                  background: 'linear-gradient(180deg, #2a2a2c, #1d1d1f)',
                  borderBottom: '1px solid rgba(0,0,0,0.5)',
                }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
                  <span style={{
                    flex: 1, textAlign: 'center',
                    fontFamily: 'var(--font-ui), sans-serif',
                    fontSize: '13px', fontWeight: 500,
                    color: 'rgba(255,255,255,0.7)',
                    letterSpacing: '0.01em',
                    marginLeft: '-50px',
                  }}>{project.title}</span>
                </div>

                {/* Preview image */}
                <div style={{
                  position: 'relative',
                  aspectRatio: '16 / 9',
                  background: '#08050a',
                  overflow: 'hidden',
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'top center',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Caption row */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 18px',
                  background: '#0f0f10',
                  borderTop: '1px solid rgba(255,255,255,0.04)',
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{
                      fontFamily: 'var(--font-ui), sans-serif',
                      fontSize: '0.95rem', fontWeight: 600, color: 'var(--ink)',
                      letterSpacing: '-0.005em',
                    }}>{project.title}</span>
                    <span style={{
                      fontFamily: 'var(--font-ui), sans-serif',
                      fontSize: '0.68rem', fontWeight: 500,
                      letterSpacing: '0.16em', textTransform: 'uppercase',
                      color: 'var(--ink-faint)',
                    }}>{project.category}</span>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-italic), serif', fontStyle: 'italic',
                    fontSize: '0.95rem', color: 'var(--crimson)',
                  }}>visit →</span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Other projects — list style */}
        {other.length > 0 && (
          <section style={{ padding: '0 2.5rem 6rem', maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ borderTop: '1px solid var(--c-silver-hairline)', paddingTop: '2rem' }}>
              <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.5rem' }}>
                More Projects
              </p>
              {other.map((project, i) => (
                <motion.a
                  key={project.slug}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '1.2rem 0',
                    borderBottom: '1px solid var(--c-silver-hairline)',
                    textDecoration: 'none', transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '0.72rem', fontWeight: 400, color: 'rgba(255,255,255,0.3)', minWidth: '120px' }}>
                    {project.category.split('·')[0].trim()}
                  </span>
                  <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '0.9rem', fontWeight: 500, color: '#ffffff', flex: 1, marginLeft: '1.5rem' }}>
                    {project.title}
                  </span>
                  <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '0.72rem', fontWeight: 400, color: 'rgba(255,255,255,0.25)' }}>
                    {project.year}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" style={{ marginLeft: '1rem' }}>
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </motion.a>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
