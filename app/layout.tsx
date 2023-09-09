import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
