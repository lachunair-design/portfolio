import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lakshmi Nair - Builder, Founder, Strategist',
  description: 'Started as a software engineer, discovered I cared more about the "why" than the "how". Now building GUTSY and Current State. Welcome to the chaos.',
  keywords: ['Lakshmi Nair', 'GUTSY', 'Current State', 'founder', 'builder', 'gut health', 'productivity'],
  authors: [{ name: 'Lakshmi Nair' }],
  creator: 'Lakshmi Nair',
  openGraph: {
    title: 'Lakshmi Nair - Builder, Founder, Strategist',
    description: 'Building GUTSY (gut health) and Current State (realistic productivity). Welcome to the chaos.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Lakshmi Nair',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakshmi Nair - Builder, Founder, Strategist',
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
