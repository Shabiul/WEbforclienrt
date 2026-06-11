import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { OrganizationSchema, WebSiteSchema } from '@/components/SchemaOrg'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://impact-technology.vercel.app'),
  title: {
    default: "Impact Technology PLC — Empowering Ethiopia's Digital Future",
    template: '%s | Impact Technology PLC',
  },
  description: "Ethiopia's leading IT solutions provider. Enterprise computing, data center, networking, cybersecurity, and managed services for over a decade.",
  keywords: ['IT solutions Ethiopia', 'data center Addis Ababa', 'cybersecurity Ethiopia', 'enterprise computing', 'managed services Ethiopia', 'networking Ethiopia', 'Dell Technologies Ethiopia', 'Cisco partner Ethiopia'],
  authors: [{ name: 'Impact Technology PLC' }],
  creator: 'Impact Technology PLC',
  publisher: 'Impact Technology PLC',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    locale: 'en_ET',
    url: 'https://impact-technology.vercel.app',
    siteName: 'Impact Technology PLC',
    title: "Impact Technology PLC — Empowering Ethiopia's Digital Future",
    description: "Ethiopia's leading IT solutions provider delivering enterprise computing, data center, networking, cybersecurity, and managed services.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Impact Technology PLC",
    description: "Ethiopia's leading IT solutions provider — enterprise computing, data center, networking, cybersecurity, and managed services.",
  },
  alternates: {
    canonical: 'https://impact-technology.vercel.app',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="geo.region" content="ET" />
        <meta name="geo.placename" content="Addis Ababa" />
        <meta name="geo.position" content="9.0248;38.7469" />
        <meta name="ICBM" content="9.0248, 38.7469" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content" style={{ paddingTop: '92px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
