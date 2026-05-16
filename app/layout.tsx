import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { LangProvider } from "@/lib/useLang";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

// --font-ui (Cabinet Grotesk) and --font-italic (Boska) are loaded via Fontshare CDN in globals.css

export const metadata: Metadata = {
  title: "Gutmanis Studio — Web & AI Studio · Riga | Websites and AI Systems",
  description: "Web & AI studio in Riga. Custom websites and landing pages, LLM integrations and chatbots, AI-generated ad creative and Meta ad strategy. Built to move the needle.",
  keywords: [
    "web and ai studio riga", "ai integration latvia", "llm chatbot development",
    "web design riga", "ai marketing riga", "meta ads consulting",
    "website design latvia", "landing page design", "business website riga",
    "ai ad creative", "llm training", "gutmanis studio",
    "веб и ai студия рига", "ai интеграции латвия", "AI integrācijas Rīga",
  ],
  authors: [{ name: "Roberts Gutmanis", url: "https://gutmanistudio.lv" }],
  creator: "Gutmanis Studio",
  publisher: "Gutmanis Studio",
  metadataBase: new URL("https://gutmanistudio.lv"),
  alternates: {
    canonical: "https://gutmanistudio.lv",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gutmanistudio.lv",
    siteName: "Gutmanis Studio",
    title: "Gutmanis Studio — Web & AI Studio · Riga",
    description: "I build websites and AI systems for businesses. Custom sites, LLM integrations, AI marketing. Based in Riga.",
    images: [
      {
        url: "/images/gutmanistudiologo1.png",
        width: 1200,
        height: 630,
        alt: "Gutmanis Studio — Web & AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutmanis Studio — Web & AI · Riga",
    description: "I build websites and AI systems for businesses. Based in Riga.",
    images: ["/images/gutmanistudiologo1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  other: {
    "geo.region": "LV-RIX",
    "geo.placename": "Riga",
    "geo.position": "56.9496;24.1052",
    "ICBM": "56.9496, 24.1052",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Gutmanis Studio",
  description: "Web & AI studio in Riga. Custom websites, LLM integrations, and AI-driven marketing for businesses.",
  url: "https://gutmanistudio.lv",
  logo: "https://gutmanistudio.lv/images/gutmanistudiologo1.png",
  image: "https://gutmanistudio.lv/images/gutmanistudiologo1.png",
  telephone: "+37122122027",
  email: "roberts@gutmanistudio.lv",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riga",
    addressCountry: "LV",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 56.9496,
    longitude: 24.1052,
  },
  founder: {
    "@type": "Person",
    name: "Roberts Gutmanis",
  },
  priceRange: "€300–€2000+",
  areaServed: ["Riga", "Latvia", "Europe"],
  serviceType: ["Web Design", "Web Development", "AI Integration", "LLM Chatbots", "AI Marketing", "Meta Ads Consulting"],
  sameAs: [
    "https://instagram.com/rguutmanis",
    "https://www.tiktok.com/@gutmanis",
    "https://www.linkedin.com/in/roberts-g%C5%ABtmanis-9a425a364",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,600,700,800&f[]=boska@400,400i,500i,700i&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div style={{
          minHeight: '100vh',
          background: [
            // crimson beam from upper-right (mirrors statue light)
            'radial-gradient(ellipse 60% 80% at 100% 0%, rgba(200,16,31,0.18) 0%, rgba(139,10,20,0.06) 35%, transparent 70%)',
            // cool silver wash from upper-left
            'radial-gradient(ellipse 45% 70% at 0% 0%, rgba(200,200,200,0.08) 0%, transparent 65%)',
            // deep crimson floor pool (very subtle)
            'radial-gradient(ellipse 80% 30% at 50% 100%, rgba(90,8,16,0.25) 0%, transparent 70%)',
            'var(--c-bg)',
          ].join(', '),
        }}>
          <LangProvider><SmoothScroll>{children}</SmoothScroll></LangProvider>
        </div>
      </body>
    </html>
  );
}
