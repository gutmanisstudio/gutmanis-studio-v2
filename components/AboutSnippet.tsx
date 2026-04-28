'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/useLang'
import { t } from '@/lib/i18n'
import { projects } from '@/lib/projects'
import { NeonButton } from '@/components/NeonButton'

const projectRows = ['bouquets-by-liz', 'flower-station', 'table7', 'sevarch'].map(
  slug => projects.find(p => p.slug === slug)!
)

export default function AboutSnippet() {
  const { lang } = useLang()
  return (
    <section id="about" style={{
      padding: '8rem 2.5rem',
      background: 'transparent',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '3rem' }}>
        {t.about.eyebrow[lang]}
      </motion.p>

      <div className="about-cards" style={{ display: 'flex', gap: '1.5rem', maxWidth: '800px', width: '100%', alignItems: 'stretch' }}>

        {/* Card 1 — Profile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22,1,0.36,1] }}
          style={{
            background: '#0f0f0f',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: '2.5rem',
            flex: '0 0 340px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
          }}>

          {/* Photo */}
          <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', aspectRatio: '3/4', background: '#1a1a1a', position: 'relative' }}>
            <img src="/images/roberts.jpg" alt="Roberts Gutmanis" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            {/* Available badge */}
            <div style={{
              position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)',
              background: 'rgba(8,8,8,0.85)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '999px', padding: '0.4rem 1rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              whiteSpace: 'nowrap',
            }}>
              <div className="green-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
              <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '0.7rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>{t.contact.statusVal[lang]}</span>
            </div>
          </div>

          {/* Name + title */}
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: "var(--font-heading), sans-serif", fontSize: '2rem', letterSpacing: '0.06em', color: '#ffffff', marginBottom: '0.3rem' }}>Roberts Gutmanis</h2>
            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '0.82rem', fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>Web Designer · {t.about.tag1[lang]}</p>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {[
              { href: 'https://instagram.com/rguutmanis', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
              { href: 'https://www.tiktok.com/@gutmanis', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg> },
              { href: 'mailto:roberts@gutmanistudio.lv', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg> },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = '#ffffff' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
              >{s.icon}</a>
            ))}
          </div>

          <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.06)' }} />

          {/* CTA */}
          <NeonButton href="/contact" fullWidth style={{ padding: '0.9rem' }}>{t.nav.cta[lang]}</NeonButton>
        </motion.div>

        {/* Card 2 — Bio + Skills + Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22,1,0.36,1] }}
          style={{
            background: '#0f0f0f',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: '2.5rem',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
          }}>

          {/* Bio */}
          <p style={{
            fontFamily: "var(--font-body), sans-serif", fontSize: '0.85rem',
            fontWeight: 300, color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.8, marginBottom: '1.5rem',
          }}>{t.about.p1[lang]}</p>

          {/* Skill tags */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {['Next.js', 'Tailwind CSS', 'Framer Motion', 'React', 'TypeScript'].map(tag => (
              <span key={tag} style={{
                fontFamily: "var(--font-body), sans-serif", fontSize: '0.72rem', fontWeight: 600,
                letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '0.35rem 0.9rem', borderRadius: '999px',
              }}>{tag}</span>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '0.5rem' }} />

          {/* Project list */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {projectRows.map((project) => (
              <a
                key={project.slug}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  textDecoration: 'none', transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '0.72rem', fontWeight: 400, color: 'rgba(255,255,255,0.3)', minWidth: '80px' }}>Web Design</span>
                <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '0.85rem', fontWeight: 500, color: '#ffffff', flex: 1, marginLeft: '1rem' }}>{project.title}</span>
                <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '0.72rem', fontWeight: 400, color: 'rgba(255,255,255,0.3)' }}>{project.year}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px #4ade80; }
          50% { opacity: 0.4; box-shadow: 0 0 12px #4ade80; }
        }
        .green-dot { animation: pulse 2s ease-in-out infinite; }
        @media (max-width: 768px) {
          .about-cards { flex-direction: column !important; align-items: center !important; }
          .about-cards > div { flex: 1 1 auto !important; max-width: 380px !important; width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
