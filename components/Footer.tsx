'use client'
import { useLang } from '@/lib/useLang'
import { t } from '@/lib/i18n'

export default function Footer() {
  const { lang } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer style={{
      backgroundColor: '#0f0f0f',
      paddingTop: '6rem',
    }}>

      {/* ── Big headline ── */}
      <div style={{ textAlign: 'center', padding: '0 2.5rem', marginBottom: '0' }}>
        <h2 style={{
          fontFamily: "var(--font-ui), sans-serif",
          fontSize: 'clamp(3.5rem, 6vw, 7rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          margin: 0,
          color: 'var(--ink)',
        }}>Let&apos;s build</h2>
        <h2 style={{
          fontFamily: "var(--font-ui), sans-serif",
          fontSize: 'clamp(3.5rem, 6vw, 7rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          margin: 0,
          color: 'var(--ink-faint)',
        }}>websites and <span style={{
          fontFamily: 'var(--font-italic), serif',
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'var(--crimson)',
        }}>AI systems</span> together.</h2>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2.5rem' }}>

        {/* ── Three contact columns ── */}
        <div className="footer-cols" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem',
          marginTop: '4rem', paddingBottom: '3rem',
        }}>
          {/* Email */}
          <div>
            <p style={{ fontFamily: "var(--font-ui), sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '0.5rem' }}>
              Email
            </p>
            <a href="mailto:roberts@gutmanistudio.lv" style={{
              fontFamily: "var(--font-ui), sans-serif", fontSize: '0.95rem', fontWeight: 500,
              color: 'var(--ink)', textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--crimson)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--ink)'}
            >roberts@gutmanistudio.lv</a>
          </div>

          {/* WhatsApp */}
          <div>
            <p style={{ fontFamily: "var(--font-ui), sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '0.5rem' }}>
              WhatsApp
            </p>
            <a href="https://wa.me/37122122027" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "var(--font-ui), sans-serif", fontSize: '0.95rem', fontWeight: 500,
              color: 'var(--ink)', textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--crimson)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--ink)'}
            >+371 22 122 027</a>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontFamily: "var(--font-ui), sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '0.5rem' }}>
              Social
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { label: 'Instagram', href: 'https://instagram.com/rguutmanis', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                { label: 'TikTok', href: 'https://www.tiktok.com/@gutmanis', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg> },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/roberts-g%C5%ABtmanis-9a425a364', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 11-.01-4.12 2.06 2.06 0 01.01 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    border: '1px solid var(--line-strong)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--ink-mute)', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--crimson)'; e.currentTarget.style.color = 'var(--ink)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line-strong)'; e.currentTarget.style.color = 'var(--ink-mute)' }}
                >{s.icon}</a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ width: '100%', height: '1px', background: 'var(--line)' }} />

        {/* ── Bottom row ── */}
        <div className="footer-bottom" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.5rem 0', flexWrap: 'wrap', gap: '1rem',
        }}>
          {/* Menu links */}
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[
              { label: t.nav.work[lang], href: '/work' },
              { label: t.nav.about[lang], href: '/about' },
              { label: t.nav.blog[lang], href: '/blog' },
              { label: t.nav.contact[lang], href: '/contact' },
              { label: t.nav.privacy[lang], href: '/privacy' },
            ].map(l => (
              <a key={l.href} href={l.href} style={{
                fontFamily: "var(--font-ui), sans-serif", fontSize: '0.72rem', fontWeight: 500,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--ink-mute)', textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-mute)'}
              >{l.label}</a>
            ))}
          </div>

          {/* Copyright */}
          <span style={{ fontFamily: "var(--font-ui), sans-serif", fontSize: '0.68rem', color: 'var(--ink-faint)' }}>
            &copy; {year} Gutmanis Studio
          </span>

          {/* Email */}
          <a href="mailto:roberts@gutmanistudio.lv" style={{
            fontFamily: "var(--font-ui), sans-serif", fontSize: '0.68rem',
            color: 'var(--ink-faint)', textDecoration: 'none', transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--ink-mute)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-faint)'}
          >roberts@gutmanistudio.lv</a>
        </div>
      </div>

      {/* ── Massive watermark text ── */}
      <div style={{
        overflow: 'hidden', textAlign: 'center', marginTop: '-2rem',
        userSelect: 'none', pointerEvents: 'none',
        width: '100%', maxWidth: '100vw',
      }}>
        <span style={{
          fontFamily: "var(--font-ui), sans-serif",
          fontSize: 'clamp(3.5rem, 20vw, 18rem)',
          fontWeight: 800,
          color: 'rgba(255,255,255,0.04)',
          letterSpacing: '-0.02em',
          lineHeight: 0.85,
          display: 'block',
          whiteSpace: 'nowrap',
        }}>
          GUTMANIS <span style={{ color: 'oklch(0.58 0.22 25 / 0.10)' }}>STUDIO</span>
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-cols {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            margin-top: 2.5rem !important;
            padding-bottom: 2rem !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.25rem !important;
          }
          .footer-bottom > div:first-child {
            flex-wrap: wrap !important;
            gap: 1rem 1.25rem !important;
          }
        }
      `}</style>
    </footer>
  )
}
