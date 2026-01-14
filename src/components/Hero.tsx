'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Helper function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={ref} className="relative min-h-screen bg-cream overflow-hidden pt-32 pb-16">
      <div className="container-editorial relative z-10">
        
        {/* The "Masthead" Style Name */}
        <div className="border-b border-black mb-12 flex justify-between items-baseline">
          <h1 className="text-[12vw] leading-[0.8] font-serif font-bold tracking-tighter text-black">
            Lakshmi.
          </h1>
          <span className="hidden md:block font-body text-xs uppercase tracking-[0.4em] text-black/40">
            Portfolio 2026 / Vol. 01
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: The Persona */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div style={{ opacity }}>
              <p className="text-2xl md:text-3xl font-serif italic text-burgundy mb-8 leading-tight">
                Internet-dweller geeking out about AI. <br />
                Scaling logic, solving human chaos.
              </p>
              
              <div className="space-y-6 text-lg text-black/70 font-body max-w-md mb-12">
                <p>
                  Started as a software engineer, realized I cared more about the "why" than the "how." 
                  Currently building <span className="text-black font-bold border-b border-black">GUTSY</span> and 
                  <span className="text-black font-bold border-b border-black"> Current State</span>.
                </p>
                <p className="text-sm uppercase tracking-widest font-bold text-black/40">
                  Based in Dubai / Building in Public
                </p>
              </div>

              {/* Fixed Minimalist CTAs */}
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => scrollToSection('building')}
                  className="flex justify-between items-center w-full max-w-xs py-4 border-b-2 border-black group text-left"
                >
                  <span className="font-serif font-bold text-xl group-hover:text-burgundy transition-colors">The Ventures</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
                <button 
                  onClick={() => scrollToSection('connect')}
                  className="flex justify-between items-center w-full max-w-xs py-4 border-b border-black/10 group text-left"
                >
                  <span className="font-serif font-bold text-xl group-hover:text-burgundy transition-colors">Get in touch</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Editorial Image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div style={{ y }} className="relative aspect-[4/3] w-full bg-black overflow-hidden group">
              <Image
                src="/Hero-image.jpg"
                alt="Lakshmi"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                priority
              />
              <div className="absolute bottom-6 left-6 bg-cream text-black px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
                Founder @ GUTSY
              </div>
            </motion.div>
            
            <div className="mt-4 flex justify-end">
              <span className="font-serif italic text-black/40 text-sm">
                *Welcome to the chaos.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
