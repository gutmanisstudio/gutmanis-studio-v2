'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/useLang'
import { t } from '@/lib/i18n'
import { projects } from '@/lib/projects'

/**
 * About section — ported from the claude-design package (dist/index.html).
 * Two-card grid: left = portrait + name + socials + CTA; right = bio + chips + projects.
 */

const projectRows = ['bouquets-by-liz', 'flower-station', 'table7', 'sevarch', 'atelier']
  .map(slug => projects.find(p => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p))

const chips = ['Next.js', 'TypeScript', 'LLM Integrations', 'Meta Ads', 'Framer Motion']

const cardBase: React.CSSProperties = {
  position: 'relative',
  borderRadius: '28px',
  background:
    'linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0)) padding-box, ' +
    'linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04) 40%, rgba(255,255,255,0)) border-box',
  border: '1px solid transparent',
  overflow: 'hidden',
}

const cardFillBefore: React.CSSProperties = {
  content: '""',
  position: 'absolute', inset: 0, zIndex: 0,
  background: 'linear-gradient(180deg, var(--card), var(--card-2) 70%, #08050a)',
}
const cardGlowAfter: React.CSSProperties = {
  content: '""',
  position: 'absolute', inset: 0, zIndex: 0,
  pointerEvents: 'none',
  background: 'radial-gradient(600px 300px at 110% -10%, oklch(0.58 0.22 25 / 0.10), transparent 60%)',
}

export default function AboutSnippet() {
  const { lang } = useLang()

  return (
    <section id="about" style={{
      position: 'relative',
      padding: '80px 40px 100px',
      // local body-mirror gradients so the section sits in the same atmosphere as the package
      background: [
        'radial-gradient(1200px 700px at 80% -10%, oklch(0.58 0.22 25 / 0.10), transparent 60%)',
        'radial-gradient(900px 600px at 10% 110%, oklch(0.58 0.22 25 / 0.06), transparent 60%)',
        'transparent',
      ].join(', '),
    }}>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1480px', margin: '0 auto' }}>
        <div className="about-pkg-label" style={{
          textAlign: 'center',
          color: 'var(--ink-faint)',
          fontFamily: 'var(--font-ui), sans-serif',
          fontSize: '12px',
          letterSpacing: '0.5em',
          textTransform: 'uppercase',
          marginBottom: '36px',
          paddingLeft: '0.5em',
        }}>{t.about.eyebrow[lang]}</div>

        <div className="about-pkg-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(360px, 0.95fr) 1.4fr',
          gap: '22px',
        }}>
          {/* LEFT card */}
          <motion.section
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ ...cardBase, padding: '22px 22px 26px', display: 'flex', flexDirection: 'column' }}
          >
            <div style={cardFillBefore} aria-hidden />
            <div style={cardGlowAfter} aria-hidden />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Portrait */}
              <div style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                aspectRatio: '4 / 5',
                background: '#1a0a0e',
                boxShadow: '0 30px 80px -20px oklch(0.58 0.22 25 / 0.45), inset 0 0 0 1px rgba(255,255,255,0.05)',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/portrait-pkg.jpg"
                  alt="Roberts Gutmanis portrait"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: '50% 25%',
                    display: 'block',
                    filter: 'contrast(1.02) saturate(1.05)',
                  }}
                />
                {/* bottom shadow gradient */}
                <div aria-hidden style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.55) 100%)',
                  pointerEvents: 'none',
                }} />
                {/* Available badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px', left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '9px 16px 9px 12px',
                  borderRadius: '999px',
                  background: 'rgba(8,4,6,0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  color: 'var(--ink)',
                  whiteSpace: 'nowrap',
                  zIndex: 2,
                  fontFamily: 'var(--font-ui), sans-serif',
                }}>
                  <span className="about-pkg-dot" style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: 'var(--available)',
                    boxShadow: '0 0 0 4px rgba(52,208,119,0.18), 0 0 14px rgba(52,208,119,0.6)',
                  }} />
                  <span>{t.contact.statusVal[lang]}</span>
                </div>
              </div>

              {/* Name */}
              <div style={{ padding: '30px 6px 0' }}>
                <h2 style={{
                  fontFamily: 'var(--font-ui), sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(40px, 4.6vw, 64px)',
                  lineHeight: 0.96,
                  letterSpacing: '-0.02em',
                  margin: 0,
                  color: 'var(--ink)',
                }}>
                  Roberts
                  <span style={{ display: 'block', color: '#c8c8c8' }}>Gūtmanis</span>
                </h2>
                <p style={{
                  margin: '14px 0 0',
                  color: 'var(--ink-mute)',
                  fontSize: '14.5px',
                  letterSpacing: '0.02em',
                  fontFamily: 'var(--font-ui), sans-serif',
                }}>
                  Web &amp; AI Studio <span style={{ color: 'var(--ink-faint)', margin: '0 8px' }}>·</span> Riga
                </p>
              </div>

              {/* Socials */}
              <div style={{ display: 'flex', gap: '12px', margin: '26px 0 0', padding: '0 6px' }} aria-label="social links">
                {[
                  { href: 'https://instagram.com/rguutmanis', label: 'Instagram',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
                  { href: 'https://www.tiktok.com/@gutmanis', label: 'TikTok',
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M14 3v9.2a3.3 3.3 0 1 1-3.3-3.3v2.7a.6.6 0 0 0-.7-.6 1.5 1.5 0 1 0 1.5 1.5V3h2.2a3.4 3.4 0 0 0 3.5 3.4v2.2a5.6 5.6 0 0 1-3.2-1V3z"/></svg> },
                  { href: 'mailto:roberts@gutmanistudio.lv', label: 'Email',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg> },
                  { href: 'https://www.linkedin.com/in/roberts-g%C5%ABtmanis-9a425a364', label: 'LinkedIn',
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M4.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM3 8h3v13H3zM9 8h2.9v1.8h.04c.4-.76 1.39-1.56 2.86-1.56C17.84 8.24 19 10.07 19 12.7V21h-3v-7.36c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.83 1.92-2.83 3.89V21H9z"/></svg> },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{
                    width: '44px', height: '44px',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '999px',
                    border: '1px solid var(--line-strong)',
                    color: 'var(--ink-mute)',
                    background: 'rgba(255,255,255,0.015)',
                    transition: 'color .2s, border-color .2s, background .2s, transform .2s',
                    textDecoration: 'none',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--ink)'
                      e.currentTarget.style.borderColor = 'oklch(0.58 0.22 25)'
                      e.currentTarget.style.background = 'oklch(0.58 0.22 25 / 0.10)'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--ink-mute)'
                      e.currentTarget.style.borderColor = 'var(--line-strong)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.015)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >{s.icon}</a>
                ))}
              </div>

              {/* divider */}
              <div style={{
                margin: '28px 6px 22px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, var(--line-strong) 30%, var(--line-strong) 70%, transparent)',
              }} />

              {/* Big CTA — silver/chrome pill */}
              <a href="/contact" style={{
                margin: '0 6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: '20px 28px',
                borderRadius: '999px',
                background: 'linear-gradient(180deg, #ffffff 0%, #e8e8e8 55%, #b8b8b8 100%)',
                color: '#0a0a0b',
                fontFamily: 'var(--font-ui), sans-serif',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontSize: '13px',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow: '0 14px 36px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.95)',
                textDecoration: 'none',
                transition: 'transform .15s ease, box-shadow .2s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 18px 44px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.95)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.95)'
                }}
              >
                {t.nav.cta[lang]}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
            </div>
          </motion.section>

          {/* RIGHT card */}
          <motion.section
            className="about-pkg-right"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ ...cardBase, padding: '36px 38px 32px', display: 'flex', flexDirection: 'column', gap: '26px' }}
          >
            <div style={cardFillBefore} aria-hidden />
            <div style={cardGlowAfter} aria-hidden />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '26px' }}>
              {/* Bio */}
              <p style={{
                fontSize: 'clamp(20px, 1.55vw, 26px)',
                lineHeight: 1.45,
                color: 'var(--ink)',
                margin: 0,
                fontWeight: 400,
                letterSpacing: '-0.005em',
                maxWidth: '38ch',
                textWrap: 'pretty' as React.CSSProperties['textWrap'],
                fontFamily: 'var(--font-ui), sans-serif',
              }}>
                I build{' '}
                <span style={{
                  color: 'var(--crimson)',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-italic), serif',
                  fontWeight: 400,
                }}>websites and AI systems</span>{' '}
                for businesses. Based in Riga.{' '}
                <span style={{ color: 'var(--ink-faint)' }}>Custom sites, LLM integrations, and AI-driven marketing — built to move the needle.</span>
              </p>

              {/* Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {chips.map(chip => (
                  <span key={chip} style={{
                    padding: '10px 18px',
                    borderRadius: '999px',
                    border: '1px solid var(--line-strong)',
                    color: 'var(--ink-mute)',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    background: 'rgba(255,255,255,0.015)',
                    transition: 'color .2s, border-color .2s, background .2s',
                    fontFamily: 'var(--font-ui), sans-serif',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--ink)'
                      e.currentTarget.style.borderColor = 'oklch(0.58 0.22 25)'
                      e.currentTarget.style.background = 'oklch(0.58 0.22 25 / 0.08)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--ink-mute)'
                      e.currentTarget.style.borderColor = 'var(--line-strong)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.015)'
                    }}
                  >{chip}</span>
                ))}
              </div>

              <div style={{ height: '1px', background: 'var(--line)' }} />

              {/* Projects */}
              <div style={{ display: 'flex', flexDirection: 'column' }} className="about-pkg-projects">
                {projectRows.map((project, i) => (
                  <a
                    key={project.slug}
                    className="about-pkg-project"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1.4fr 80px',
                      alignItems: 'center',
                      gap: '24px',
                      padding: '22px 6px',
                      borderBottom: i === projectRows.length - 1 ? 'none' : '1px solid var(--line)',
                      cursor: 'pointer',
                      transition: 'padding-left .25s ease, background .25s ease',
                      position: 'relative',
                      textDecoration: 'none',
                      color: 'inherit',
                      fontFamily: 'var(--font-ui), sans-serif',
                    }}
                  >
                    <span className="about-pkg-kind" style={{ color: 'var(--ink-faint)', fontSize: '13px', letterSpacing: '0.04em' }}>
                      {project.category.split('·')[0].trim()}
                    </span>
                    <span className="about-pkg-title" style={{
                      fontWeight: 600,
                      fontSize: '22px',
                      color: 'var(--ink-mute)',
                      letterSpacing: '-0.01em',
                      transition: 'color .2s',
                    }}>{project.title}</span>
                    <span style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px',
                      color: 'var(--ink-faint)', fontSize: '14px',
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      <span className="about-pkg-arrow" style={{
                        opacity: 0,
                        transform: 'translateX(-6px)',
                        transition: 'opacity .25s ease, transform .25s ease, color .25s ease',
                        display: 'inline-flex',
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg>
                      </span>
                      {project.year}
                    </span>
                  </a>
                ))}
              </div>

              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                marginTop: '6px',
                color: 'var(--ink-faint)',
                fontSize: '12px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-ui), sans-serif',
              }}>
                <span>Selected Work · 2024–26</span>
                <span style={{
                  color: 'var(--crimson)',
                  fontFamily: 'var(--font-italic), serif',
                  fontStyle: 'italic',
                  textTransform: 'none',
                  letterSpacing: 0,
                  fontSize: '18px',
                }}>more soon</span>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      <style>{`
        @keyframes about-pkg-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.6; transform: scale(0.86); }
        }
        .about-pkg-dot { animation: about-pkg-pulse 2.4s ease-in-out infinite; }

        /* Projects hover — crimson left marker + arrow */
        .about-pkg-project::before {
          content: "";
          position: absolute;
          left: 0; top: 50%;
          width: 0; height: 1px;
          background: var(--crimson);
          transition: width .35s ease;
          transform: translateY(-50%);
        }
        .about-pkg-project:hover {
          padding-left: 22px !important;
          background: linear-gradient(90deg, oklch(0.58 0.22 25 / 0.05), transparent 60%);
        }
        .about-pkg-project:hover::before { width: 14px; }
        .about-pkg-project:hover .about-pkg-title { color: var(--ink); }
        .about-pkg-project:hover .about-pkg-arrow {
          opacity: 1 !important;
          transform: translateX(0) !important;
          color: var(--crimson);
        }

        @media (max-width: 980px) {
          .about-pkg-grid { grid-template-columns: 1fr !important; }
          section[id="about"] { padding: 60px 18px 80px !important; }
        }
        @media (max-width: 700px) {
          .about-pkg-project {
            grid-template-columns: minmax(0, 1fr) auto !important;
            gap: 14px !important;
            padding: 18px 4px !important;
          }
          .about-pkg-kind { display: none !important; }
          .about-pkg-title { font-size: 16px !important; line-height: 1.2 !important; }
        }
        @media (max-width: 560px) {
          .about-pkg-grid { gap: 14px !important; }
          .about-pkg-right { padding: 26px 22px 24px !important; }
        }
      `}</style>
    </section>
  )
}
