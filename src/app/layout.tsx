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
  title: 'RegSci Consulting | Regulatory & Scientific Affairs',
  description: 'Global industry experts in Regulatory & Scientific Affairs for the Food, Beverage & Supplement Industries.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable}`}>
        <Navbar />
        <main style={{ paddingTop: '70px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
