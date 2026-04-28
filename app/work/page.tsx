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

        {/* Featured grid */}
        <section style={{ padding: '0 2.5rem 4rem', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {featured.map((project, i) => (
              <motion.a
                key={project.slug}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                className="work-card"
                style={{
                  background: '#141414',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  transition: 'border-color 0.3s, transform 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {/* Thumbnail */}
                <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', background: '#1a1a1a' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                {/* Info */}
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.4rem' }}>
                    {project.category.split('·')[0].trim()}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '1.15rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '0.78rem', fontWeight: 300, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} style={{
                        fontFamily: "var(--font-body), sans-serif", fontSize: '0.65rem', fontWeight: 600,
                        letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '0.25rem 0.7rem', borderRadius: '999px',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Other projects — list style */}
        {other.length > 0 && (
          <section style={{ padding: '0 2.5rem 6rem', maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem' }}>
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
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
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
