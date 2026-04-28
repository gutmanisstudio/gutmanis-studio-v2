'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/useLang'
import { t } from '@/lib/i18n'
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

const fl: React.CSSProperties = {
  fontFamily: 'var(--font-body), sans-serif', fontSize: '0.55rem', fontWeight: 400,
  letterSpacing: '0.2em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.2)', display: 'block', marginBottom: '7px',
}

export default function PromoSection() {
  const { lang } = useLang()
  const [focused, setFocused] = useState('')

  const fi = (name: string): React.CSSProperties => ({
    ...inputBase,
    borderColor: focused === name ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.07)',
  })

  return (
    <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.015)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '100px 60px' }}>
        <div className="promo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'start' }}>

          {/* Left — CTA info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Discount badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)',
              padding: '6px 18px', marginBottom: '24px',
            }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80' }} />
              <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                15% off
              </span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 300,
              color: '#fff', lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '16px',
            }}>
              {lang === 'LV' ? 'Sāciet savu projektu' : lang === 'RU' ? 'Начните свой проект' : 'Start your project'}
              <br />
              <span style={{ color: 'rgba(255,255,255,0.35)' }}>
                {lang === 'LV' ? 'ar 15% atlaidi.' : lang === 'RU' ? 'со скидкой 15%.' : 'with 15% off.'}
              </span>
            </h2>

            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, marginBottom: '36px' }}>
              {t.contact.sub[lang]}
            </p>

            {/* Contact info */}
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

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            action="https://formspree.io/f/mlgodjbz"
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
          >
            <input type="hidden" name="_subject" value="New project enquiry (15% promo) — Gutmanis Studio" />
            <input type="hidden" name="_replyto" value="roberts@gutmanistudio.lv" />
            <input type="hidden" name="promo" value="15% off first project" />

            {/* Name + Email */}
            <div className="promo-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={fl}>{t.contact.name[lang]}</label>
                <input type="text" name="name" placeholder="Full name" required style={fi('name')}
                  onFocus={() => setFocused('name')} onBlur={() => setFocused('')} />
              </div>
              <div>
                <label style={fl}>{t.contact.email[lang]}</label>
                <input type="email" name="email" placeholder="your@email.com" required style={fi('email')}
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

            {/* Submit */}
            <NeonButton type="submit" fullWidth style={{ padding: '15px', marginTop: '4px' }}>
              {t.contact.send[lang]}
            </NeonButton>
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .promo-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          .promo-grid { padding: 48px 14px !important; }
          .promo-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
