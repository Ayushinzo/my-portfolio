import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Doe - Web Developer Portfolio',
  description: 'Professional portfolio of John Doe, a passionate web developer specializing in React, Next.js, and full-stack development.',
  keywords: 'web developer, portfolio, React, Next.js, full-stack, JavaScript, TypeScript',
  authors: [{ name: 'John Doe' }],
  creator: 'John Doe',
  openGraph: {
    type: 'website',
    title: 'John Doe - Web Developer Portfolio',
    description: 'Professional portfolio showcasing web development projects and skills',
    siteName: 'John Doe Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe - Web Developer Portfolio',
    description: 'Professional portfolio showcasing web development projects and skills',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}