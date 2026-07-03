import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://regsci-consulting.com'),
  title: 'RegSci Consulting | Regulatory & Scientific Affairs',
  description: 'Global industry experts in Regulatory & Scientific Affairs for the Food, Beverage & Supplement Industries. GCC market access, dossier submissions, and compliance consulting across UAE, KSA, and the Middle East.',
  keywords: [
    'regulatory affairs consulting',
    'GCC market access',
    'food supplement regulatory consulting',
    'UAE food registration',
    'Saudi Arabia FSMP classification',
    'Middle East regulatory dossier',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'RegSci Consulting | Regulatory & Scientific Affairs',
    description: 'Global industry experts in Regulatory & Scientific Affairs for the Food, Beverage & Supplement Industries.',
    url: 'https://regsci-consulting.com',
    siteName: 'RegSci Consulting',
    images: ['/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RegSci Consulting | Regulatory & Scientific Affairs',
    description: 'Global industry experts in Regulatory & Scientific Affairs for the Food, Beverage & Supplement Industries.',
    images: ['/logo.png'],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'RegSci Consulting',
  description: 'Global industry experts in Regulatory & Scientific Affairs and Market Access for the Food, Beverage & Supplement Industries.',
  url: 'https://regsci-consulting.com',
  logo: 'https://regsci-consulting.com/logo.png',
  areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait', 'Bahrain', 'Iraq'],
  serviceType: 'Regulatory and Scientific Affairs Consulting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable}`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main style={{ paddingTop: '70px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
