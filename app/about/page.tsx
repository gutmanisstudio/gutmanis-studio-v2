'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutSnippet from '@/components/AboutSnippet'
import { projects } from '@/lib/projects'

const showcaseSlugs = ['bouquets-by-liz', 'table7', 'sevarch']
const showcase = showcaseSlugs
  .map(slug => projects.find(p => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p))

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: '92px', minHeight: '100vh' }}>
        <AboutSnippet />

        {/* Project showcase — browser-window mockups */}
        <section style={{
          maxWidth: '760px', margin: '0 auto',
          padding: '20px 1.5rem 6rem',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            marginBottom: '2rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-ui), sans-serif', fontSize: '12px', fontWeight: 500,
              letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--ink-faint)',
              paddingLeft: '0.5em', margin: 0,
            }}>Recent Work</p>
            <a href="/work" style={{
              fontFamily: 'var(--font-italic), serif', fontStyle: 'italic',
              fontSize: '1.1rem', color: 'var(--crimson)',
              textDecoration: 'none',
            }}>view all →</a>
          </div>

          <div className="about-showcase" style={{
            display: 'flex', flexDirection: 'column', gap: '2.5rem',
          }}>
            {showcase.map((p, i) => (
              <motion.a
                key={p.slug}
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
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
                  }}>{p.title}</span>
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
                    src={p.image}
                    alt={`${p.title} preview`}
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
                    }}>{p.title}</span>
                    <span style={{
                      fontFamily: 'var(--font-ui), sans-serif',
                      fontSize: '0.68rem', fontWeight: 500,
                      letterSpacing: '0.16em', textTransform: 'uppercase',
                      color: 'var(--ink-faint)',
                    }}>{p.category}</span>
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
      </main>

      <Footer />
    </>
  )
}
