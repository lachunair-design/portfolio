'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import WhatIDo from '@/components/WhatIDo'
import About from '@/components/About'
import Gutsy from '@/components/Gutsy'
import HowIWork from '@/components/HowIWork'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <WhatIDo />
      <About />
      <Gutsy />
      <HowIWork />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
