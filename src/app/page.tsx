'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Building from '@/components/Building'
import Timeline from '@/components/Timeline'
import ExperienceModal from '@/components/ExperienceModal'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  
  useEffect(() => {
    // This selects your sections and creates a smooth "fade up" as you scroll
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 20 
        }, 
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%", // Starts when the section is 85% down the screen
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Building />
      <Timeline />
      <ExperienceModal />
      <Connect />
      <Footer />
    </main>
  )
}
