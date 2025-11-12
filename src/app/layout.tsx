import type { Metadata } from 'next';
import { Lora, Manrope } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import '@/styles/globals.css';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Grogate - Fresh Produce from Local Farmers',
  description: 'Connect directly with local farmers and get fresh, organic produce delivered to your door.',
  keywords: ['farmers market', 'local produce', 'organic food', 'fresh vegetables', 'community supported agriculture'],
  authors: [{ name: 'Grogate' }],
  openGraph: {
    title: 'Grogate - Fresh Produce from Local Farmers',
    description: 'Connect directly with local farmers and get fresh, organic produce delivered to your door.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grogate - Fresh Produce from Local Farmers',
    description: 'Connect directly with local farmers and get fresh, organic produce delivered to your door.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${manrope.variable}`}>
      <body style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

