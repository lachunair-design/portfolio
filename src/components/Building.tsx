'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Building() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="building" ref={ref} className="py-24 bg-[#0a0a0a] text-cream">
      <div className="container-editorial">
        
        {/* Editorial Header: The "Masthead" */}
        <div className="border-b border-cream/20 pb-8 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-xl">
            <span className="text-burgundy font-serif italic text-xl mb-4 block">The Ventures</span>
            <h2 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter leading-none">
              Building <br /> in Public.
            </h2>
          </div>
          <p className="text-cream/40 font-body text-sm uppercase tracking-[0.3em] max-w-[200px] leading-relaxed">
            Geeking out on AI. <br /> Solving human chaos. <br /> Dubai, UAE.
          </p>
        </div>

        {/* Feature: GUTSY Broadside */}
        <div className="grid lg:grid-cols-12 gap-0 border border-cream/10 bg-cream text-black overflow-hidden">
          
          {/* Left Column: The "Article" */}
          <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-between border-r border-black/5">
            <div>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-10 h-10 relative grayscale">
                   <Image src="/Gutsy-logomark.jpg" alt="Logo" fill className="object-contain" />
                </div>
                <span className="font-serif font-black text-2xl tracking-widest uppercase">Gutsy</span>
              </div>

              <h3 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-[0.9]">
                Gut health for the <span className="italic text-burgundy">disciplined.</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <p className="font-body text-lg text-black/80 leading-relaxed">
                  The industry is flooded with influencer-led miracle cures. We’re building the opposite: 
                  high-grade, science-first supplements with zero proprietary blends.
                </p>
                <p className="font-body text-lg text-black/80 leading-relaxed">
                  Currently in stability testing. Every ingredient is sourced for bioavailability, 
                  not profit margins. Launching Q1 2026.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-8 border-t border-black/10">
              <button className="bg-black text-cream px-8 py-4 font-serif font-bold hover:bg-burgundy transition-colors duration-300">
                Join the Waitlist
              </button>
              <div className="flex gap-4">
                 {['Science-Backed', 'Clean Label'].map(tag => (
                   <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-black/40 px-3 py-1 border border-black/10">
                     {tag}
                   </span>
                 ))}
              </div>
            </div>
          </div>

          {/* Right Column: The "Illustration Gallery" */}
          <div className="lg:col-span-5 bg-[#F9F7F2] p-8 md:p-12 flex items-center justify-center relative">
            {/* Corner Decorative Elements */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-black/20" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-black/20" />
            
            <div className="relative w-full aspect-[3/5] md:aspect-[4/5]">
               <Image 
                src="/gutsy-timeline.png" 
                alt="The Journey Illustration" 
                fill 
                className="object-contain"
                priority
               />
            </div>
          </div>
        </div>

        {/* Secondary: Current State Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="p-12 border-l border-burgundy bg-white/5">
                <span className="text-burgundy font-serif italic mb-2 block text-lg">Productivity</span>
                <h4 className="text-4xl font-serif font-bold mb-6 text-cream">Current State</h4>
                <p className="text-cream/60 font-body text-lg mb-8 max-w-sm">
                    A system for the neurodivergent and multi-hyphenate. It adapts to your daily energy levels, not a rigid 9-5 calendar.
                </p>
                <div className="opacity-50 pointer-events-none font-serif italic">
                    Coming Soon — Beta 2026
                </div>
            </div>
            
            <div className="relative group overflow-hidden border border-cream/10">
                <div className="absolute inset-0 bg-burgundy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image 
                    src="/Current-State.png" 
                    alt="Current State" 
                    width={600} 
                    height={400} 
                    className="grayscale group-hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </div>

      </div>
    </section>
  )
}
