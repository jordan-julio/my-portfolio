import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: [
    {
      url: '/favico/JJ-logos.jpeg',
      type: 'image/x-icon',
      sizes: '64x64',
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority
       */
      fetchPriority: 'high',
    },
  ],
  title: 'JJ Portfolio',
  description: 'Portfolio of Jordan Julio Jap',
}

const DynamicNavbar = dynamic(() => import('./components/navbar'), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicNavbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
