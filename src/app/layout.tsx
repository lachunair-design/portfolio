import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://lakshminair.co'),
  title: 'Lakshmi Nair - Builder & Founder',
  description: 'Started as a software engineer, discovered I cared more about the "why" than the "how". Now building GUTSY (gut health) and Current State (realistic productivity). Welcome to the chaos.',
  keywords: ['founder', 'GUTSY', 'gut health', 'Current State', 'productivity', 'builder', 'Lakshmi Nair'],
  authors: [{ name: 'Lakshmi Nair' }],
  openGraph: {
    title: 'Lakshmi Nair - Builder & Founder',
    description: 'Building GUTSY and Current State. Welcome to the chaos.',
    type: 'website',
    url: 'https://lakshminair.co',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lakshmi Nair',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakshmi Nair - Builder & Founder',
    description: 'Building GUTSY and Current State. Welcome to the chaos.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A1128" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
