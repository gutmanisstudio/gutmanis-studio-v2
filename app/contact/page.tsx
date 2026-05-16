'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/useLang'
import { t } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { NeonButton } from '@/components/NeonButton'

const inputBase: React.CSSProperties = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.82rem',
  fontWeight: 300,
  color: '#fff',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.07)',
  padding: '13px 16px',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s',
  borderRadius: 0,
}

export default function ContactPage() {
  const { lang } = useLang()
  const [focused, setFocused] = useState('')

  const fi = (name: string): React.CSSProperties => ({
    ...inputBase,
    borderColor: focused === name ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.07)',
  })

  const fl: React.CSSProperties = {
    fontFamily: 'var(--font-body), sans-serif', fontSize: '0.55rem', fontWeight: 400,
    letterSpacing: '0.2em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.2)', display: 'block', marginBottom: '7px',
  }

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: '64px', background: 'transparent', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        {/* Full-bleed background art */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/blog.jpg"
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            zIndex: 0,
            opacity: 0.9,
          }}
        />
        {/* Darken / vignette for legibility */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: [
            'linear-gradient(180deg, rgba(8,5,10,0.55) 0%, rgba(8,5,10,0.35) 40%, rgba(8,5,10,0.7) 100%)',
            'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(8,5,10,0.35) 100%)',
          ].join(', '),
        }} />

        <section style={{ padding: '6rem 2.5rem', maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'start' }}>

            {/* ── LEFT — Info ── */}
            <motion.div
              initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.58rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>
                {t.contact.eyebrow[lang]}
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 300, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '16px' }}>
                {t.contact.headline[lang]}
              </h2>
              <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, marginBottom: '36px' }}>
                {t.contact.sub[lang]}
              </p>

              {/* Contact info rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  { label: t.contact.emailLabel[lang], value: 'roberts@gutmanistudio.lv' },
                  { label: t.contact.based[lang], value: t.contact.basedVal[lang] },
                  { label: t.contact.wa[lang], value: '+371 22122027' },
                  { label: t.contact.response[lang], value: t.contact.responseVal[lang] },
                  { label: t.contact.status[lang], value: t.contact.statusVal[lang] },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
                    <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.52rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', minWidth: '60px' }}>
                      {row.label}
                    </span>
                    <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT — Form ── */}
            <motion.form
              initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              action="https://formspree.io/f/mlgodjbz"
              method="POST"
              style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
            >
              <input type="hidden" name="_subject" value="New project enquiry — Gutmanis Studio" />
              <input type="hidden" name="_replyto" value="roberts@gutmanistudio.lv" />

              {/* Name + Email */}
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={fl}>{t.contact.name[lang]}</label>
                  <input className="fi" type="text" name="name" placeholder={t.contact.namePh[lang]} required style={fi('name')}
                    onFocus={() => setFocused('name')} onBlur={() => setFocused('')} />
                </div>
                <div>
                  <label style={fl}>{t.contact.email[lang]}</label>
                  <input className="fi" type="email" name="email" placeholder={t.contact.emailPh[lang]} required style={fi('email')}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused('')} />
                </div>
              </div>

              {/* Service */}
              <div>
                <label style={fl}>{t.contact.service[lang]}</label>
                <select name="service" style={{ ...fi('svc'), color: 'rgba(255,255,255,0.45)', appearance: 'none', cursor: 'pointer' }}
                  onFocus={() => setFocused('svc')} onBlur={() => setFocused('')}>
                  <option value="" style={{ background: '#111' }}>{t.contact.svc0[lang]}</option>
                  <option style={{ background: '#111' }}>{t.contact.svc1[lang]}</option>
                  <option style={{ background: '#111' }}>{t.contact.svc2[lang]}</option>
                  <option style={{ background: '#111' }}>{t.contact.svc3[lang]}</option>
                  <option style={{ background: '#111' }}>{t.contact.svc4[lang]}</option>
                  <option style={{ background: '#111' }}>{t.contact.svc5[lang]}</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label style={fl}>{t.contact.budget[lang]}</label>
                <select name="budget" style={{ ...fi('bud'), color: 'rgba(255,255,255,0.45)', appearance: 'none', cursor: 'pointer' }}
                  onFocus={() => setFocused('bud')} onBlur={() => setFocused('')}>
                  <option value="" style={{ background: '#111' }}>{t.contact.bud0[lang]}</option>
                  <option style={{ background: '#111' }}>{t.contact.bud1[lang]}</option>
                  <option style={{ background: '#111' }}>{t.contact.bud2[lang]}</option>
                  <option style={{ background: '#111' }}>{t.contact.bud3[lang]}</option>
                  <option style={{ background: '#111' }}>{t.contact.bud4[lang]}</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={fl}>{t.contact.message[lang]}</label>
                <textarea name="message" placeholder="What are you building? Who is it for? Any references?"
                  style={{ ...fi('msg'), resize: 'none', height: '110px' }}
                  onFocus={() => setFocused('msg')} onBlur={() => setFocused('')} />
              </div>

              {/* Consent */}
              <label style={{
                display: 'flex', alignItems: 'flex-start', gap: '10px',
                marginTop: '6px', cursor: 'pointer',
                fontFamily: 'var(--font-body), sans-serif', fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.55)', lineHeight: 1.6,
              }}>
                <input
                  type="checkbox"
                  name="consent"
                  required
                  style={{
                    marginTop: '3px', width: '14px', height: '14px',
                    accentColor: 'var(--crimson)', flexShrink: 0, cursor: 'pointer',
                  }}
                />
                <span>
                  {t.contact.consent[lang]}{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{
                    color: 'rgba(255,255,255,0.85)', textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}>{t.contact.consentLink[lang]}</a>
                  {t.contact.consentSuffix[lang]}
                </span>
              </label>

              {/* Submit */}
              <NeonButton type="submit" fullWidth style={{ padding: '15px', marginTop: '4px' }}>
                {t.contact.send[lang]}
              </NeonButton>
            </motion.form>

          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
