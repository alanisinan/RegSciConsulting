import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'RegSci Consulting | Regulatory & Scientific Affairs Middle East',
  description: 'Regulatory and Technical Consultancy for Food Supplements, FSMP, and FSDU across the GCC and Middle East. From product concept and formulation assessment to registration dossiers and market access.',
  keywords: 'Regulatory Consulting, Scientific Affairs, Food Supplements, FSMP, FSDU, GCC, Middle East, Regulatory Dossier, Market Access',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
