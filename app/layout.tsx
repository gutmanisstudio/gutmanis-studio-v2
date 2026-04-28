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

export const metadata: Metadata = {
  title: "Gutmanis Studio — Web Design Riga, Latvia | Custom Websites",
  description: "Custom web design studio in Riga, Latvia. Premium landing pages, business websites, and e-commerce — no templates. Fast delivery, built to convert. Start from €300.",
  keywords: [
    "web design riga", "web dizains rīga", "mājas lapu izstrāde",
    "website design latvia", "landing page design", "business website riga",
    "web developer riga", "custom website design", "e-commerce riga",
    "gutmanis studio", "web design studio latvia", "mājas lapas izveide",
    "website development riga", "web dizaineris latvija",
    "создание сайтов рига", "веб-дизайн латвия",
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
    title: "Gutmanis Studio — Web Design Riga, Latvia",
    description: "Custom websites for businesses that care how they look online. No templates. Landing pages, business websites, e-commerce. Based in Riga.",
    images: [
      {
        url: "/images/gutmanistudiologo1.png",
        width: 1200,
        height: 630,
        alt: "Gutmanis Studio — Web Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutmanis Studio — Web Design Riga",
    description: "Custom websites for businesses. No templates. Based in Riga, Latvia.",
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
  description: "Custom web design studio in Riga, Latvia. Premium landing pages, business websites, and e-commerce.",
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
  serviceType: ["Web Design", "Landing Page Design", "Business Website", "E-Commerce"],
  sameAs: [
    "https://instagram.com/rguutmanis",
    "https://www.tiktok.com/@gutmanis",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div style={{
          minHeight: '100vh',
          background: 'radial-gradient(ellipse 35% 70% at 2% 50%, rgba(255,255,255,0.12) 0%, transparent 100%), radial-gradient(ellipse 35% 70% at 98% 50%, rgba(255,255,255,0.12) 0%, transparent 100%), #0f0f0f',
        }}>
          <LangProvider><SmoothScroll>{children}</SmoothScroll></LangProvider>
        </div>
      </body>
    </html>
  );
}
