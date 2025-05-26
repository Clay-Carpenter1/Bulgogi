import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bulgogi Korean BBQ',
  description: 'Authentic Korean BBQ restaurant in Conway, Arkansas. Experience traditional Korean cuisine and BBQ in a modern setting.',
  icons: {
    icon: { url: '/images/logo-tab.png' },
    shortcut: '/images/logo-tab.png',
    apple: { url: '/images/logo-tab.png', sizes: '180x180' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
} 