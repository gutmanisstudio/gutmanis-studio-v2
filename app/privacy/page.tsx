import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Gutmanis Studio',
  description: 'How Gutmanis Studio collects, uses, and protects your personal data.',
  alternates: { canonical: '/privacy' },
}

const sectionStyle: React.CSSProperties = {
  fontFamily: 'var(--font-ui), sans-serif',
  fontSize: '1.1rem',
  fontWeight: 700,
  letterSpacing: '-0.005em',
  color: 'var(--ink)',
  margin: '2.2rem 0 0.6rem',
}

const pStyle: React.CSSProperties = {
  fontFamily: 'var(--font-ui), sans-serif',
  fontSize: '0.92rem',
  lineHeight: 1.75,
  color: 'var(--ink-mute)',
  marginBottom: '0.8rem',
}

const liStyle: React.CSSProperties = {
  ...pStyle,
  marginBottom: '0.4rem',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <section style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>
          <p style={{
            fontFamily: 'var(--font-ui), sans-serif', fontSize: '12px', fontWeight: 500,
            letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--ink-faint)',
            marginBottom: '1rem', paddingLeft: '0.5em',
          }}>Legal</p>

          <h1 style={{
            fontFamily: 'var(--font-ui), sans-serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05,
            color: 'var(--ink)', marginBottom: '1.2rem',
          }}>Privacy Policy</h1>

          <p style={{ ...pStyle, color: 'var(--ink-faint)', fontSize: '0.8rem', marginBottom: '2.5rem' }}>
            Last updated: 16 May 2026
          </p>

          <p style={pStyle}>
            This Privacy Policy explains how Gutmanis Studio (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles personal
            data collected via this website (gutmanistudio.lv). We act as the data controller
            under the EU General Data Protection Regulation (GDPR).
          </p>

          <h2 style={sectionStyle}>Who we are</h2>
          <p style={pStyle}>
            Gutmanis Studio is a one-person web design studio operated by Roberts Gūtmanis,
            based in Riga, Latvia. For any privacy-related question or to exercise your rights,
            contact us at <a href="mailto:roberts@gutmanistudio.lv" style={{ color: 'var(--crimson)' }}>roberts@gutmanistudio.lv</a>.
          </p>

          <h2 style={sectionStyle}>What data we collect</h2>
          <p style={pStyle}>When you submit the contact form on this site, we collect:</p>
          <ul style={{ paddingLeft: '1.4rem', marginBottom: '0.8rem' }}>
            <li style={liStyle}>Your name</li>
            <li style={liStyle}>Your email address</li>
            <li style={liStyle}>The service and budget range you select (if provided)</li>
            <li style={liStyle}>The message you write</li>
          </ul>
          <p style={pStyle}>
            We do not use analytics cookies, advertising trackers, or third-party tracking
            scripts on this website.
          </p>

          <h2 style={sectionStyle}>How we use it</h2>
          <p style={pStyle}>
            We use the data only to reply to your enquiry, scope and quote a potential
            project, and, if we work together, manage the engagement. Legal basis under
            GDPR Art. 6(1): your consent (form submission) and, where relevant, the
            performance of a contract or pre-contractual steps you request.
          </p>

          <h2 style={sectionStyle}>Who can see it</h2>
          <p style={pStyle}>
            Contact form submissions are delivered through Formspree (Formspree Inc., USA),
            which acts as our processor. Submissions are also stored in our email inbox
            (Google Workspace). We do not sell, rent, or share your data with anyone else.
            International transfers to the US rely on Standard Contractual Clauses where applicable.
          </p>

          <h2 style={sectionStyle}>How long we keep it</h2>
          <p style={pStyle}>
            Enquiries we don&apos;t take forward are deleted within 12 months. Project
            correspondence with active or past clients is kept for as long as needed to
            fulfil tax and accounting obligations under Latvian law (typically 5 years).
          </p>

          <h2 style={sectionStyle}>Your rights</h2>
          <p style={pStyle}>You have the right to:</p>
          <ul style={{ paddingLeft: '1.4rem', marginBottom: '0.8rem' }}>
            <li style={liStyle}>Access the personal data we hold about you</li>
            <li style={liStyle}>Ask us to correct or delete it</li>
            <li style={liStyle}>Restrict or object to processing</li>
            <li style={liStyle}>Withdraw consent at any time</li>
            <li style={liStyle}>Receive a copy in a portable format</li>
            <li style={liStyle}>Lodge a complaint with the Latvian Data State Inspectorate (Datu valsts inspekcija)</li>
          </ul>
          <p style={pStyle}>
            To exercise any of these rights, email <a href="mailto:roberts@gutmanistudio.lv" style={{ color: 'var(--crimson)' }}>roberts@gutmanistudio.lv</a>.
            We respond within 30 days.
          </p>

          <h2 style={sectionStyle}>Changes</h2>
          <p style={pStyle}>
            We may update this policy. The &ldquo;last updated&rdquo; date above will reflect
            any changes.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
