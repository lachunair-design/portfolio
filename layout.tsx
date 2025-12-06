import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lakshmi Nair - Strategy, AI & GUTSY Founder',
  description: 'I do strategy and operations consulting, geek out about AI on the internet, and founded GUTSY because my gut was a mess and the supplements market is worse.',
  keywords: ['strategy', 'operations', 'consulting', 'AI', 'GUTSY', 'founder', 'Lakshmi Nair'],
  authors: [{ name: 'Lakshmi Nair' }],
  openGraph: {
    title: 'Lakshmi Nair - Strategy, AI & GUTSY Founder',
    description: 'Welcome to the chaos.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
