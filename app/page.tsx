import Hero from '@/components/Hero'
import Services from '@/components/Services'
import AboutSnippet from '@/components/AboutSnippet'
import PromoSection from '@/components/PromoSection'
import FAQ from '@/components/FAQ'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutSnippet />
      <PromoSection />
      <FAQ />
      <Footer />
    </>
  )
}
