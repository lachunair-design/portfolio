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

// Register ScrollTrigger only on the client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  
  useEffect(() => {
    // 1. Hero Animation (Fades in immediately on load)
    gsap.from("#hero-section", {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "power3.out"
    });

    // 2. Scroll Animations for all other sections
    const scrollSections = [
      "#building-section", 
      "#timeline-section", 
      "#connect-section", 
      "#footer-section"
    ];

    scrollSections.forEach((id) => {
      gsap.from(id, {
        scrollTrigger: {
          trigger: id,
          start: "top 85%", // Animation starts when section is 85% down the screen
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out"
      });
    });

    // Clean up on unmount
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* We wrap each component in a div with an ID for GSAP to target */}
      <div id="hero-section">
        <Hero />
      </div>

      <div id="building-section">
        <Building />
      </div>

      <div id="timeline-section">
        <Timeline />
      </div>

      {/* ExperienceModal usually doesn't need a scroll animation as it's a popup */}
      <ExperienceModal />

      <div id="connect-section">
        <Connect />
      </div>

      <div id="footer-section">
        <Footer />
      </div>
    </main>
  )
}
