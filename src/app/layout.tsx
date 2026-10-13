import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContactButtons from '@/components/ui/FloatingContactButtons';

const comfortaa = localFont({
  src: [
    {
      path: '../../public/fonts/Comfortaa-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Comfortaa-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Comfortaa-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Comfortaa-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Comfortaa-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-comfortaa',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'The Best You Choose',
    template: '%s | The Best You Choose',
  },
  description: 'An enterprise platform uniting brand incubation, advanced textile manufacturing, and retail distribution across South India.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/logo-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    title: 'The Best You Choose',
    description: 'An enterprise platform uniting brand incubation, advanced textile manufacturing, and retail distribution across South India.',
    siteName: 'Cluster Outfits Pvt. Ltd.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cluster Outfits - The Best You Choose',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Best You Choose',
    description: 'An enterprise platform uniting brand incubation, advanced textile manufacturing, and retail distribution across South India.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} ${comfortaa.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
