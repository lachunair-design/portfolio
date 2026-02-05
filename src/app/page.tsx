'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Building from '@/components/Building'
import Timeline from '@/components/Timeline'
import ExperienceModal from '@/components/ExperienceModal'
import InstagramCarousel from '@/components/InstagramCarousel' // Import here
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Building />
      <InstagramCarousel /> {/* Add here */}
      <Timeline />
      <ExperienceModal />
      <Connect />
      <Footer />
    </main>
  )
}
