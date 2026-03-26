import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Barry Carbis | Quality Engineering Leader',
  description:
    'Leadership-focused CV website for Barry Carbis, specialising in software quality engineering, automation strategy, delivery transformation, and engineering-led quality practices.',
  keywords: [
    'Quality Engineering Leader',
    'Software Quality Engineering',
    'Test Strategy',
    'Playwright',
    'Automation Leadership',
    'QA Transformation',
    'Barry Carbis',
  ],
  openGraph: {
    title: 'Barry Carbis | Quality Engineering Leader',
    description:
      'A leadership profile focused on quality engineering strategy, scalable automation, and high-performing QA organisations.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
