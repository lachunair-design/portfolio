'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Building from '@/components/Building'
import Timeline from '@/components/Timeline'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <Hero />
      <Building />
      <Timeline />
      <Connect />
      <Footer />
    </main>
  )
}
