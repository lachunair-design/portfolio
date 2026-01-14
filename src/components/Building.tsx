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
            <h2 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter leading-none text-cream">
              Building <br /> in Public.
            </h2>
          </div>
          <p className="text-cream/40 font-body text-sm uppercase tracking-[0.3em] max-w-[200px] leading-relaxed">
            Geeking out on AI. <br /> Solving human chaos. <br /> Dubai, UAE.
          </p>
        </div>

        {/* Feature: GUTSY Broadside */}
        <div className="grid lg:grid-cols-12 gap-0 border border-cream/10 bg-cream text-black overflow-hidden mb-24">
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

              <div className="grid md:grid-cols-2 gap-8 mb-12 text-black/80 font-body text-lg leading-relaxed">
                <p>The industry is flooded with influencer-led miracle cures. We’re building the opposite: high-grade, science-first supplements with zero proprietary blends.</p>
                <p>Currently in stability testing. Every ingredient is sourced for bioavailability, not profit margins. Launching Q1 2026.</p>
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

          <div className="lg:col-span-5 bg-[#F9F7F2] p-8 md:p-12 flex items-center justify-center relative">
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-black/20" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-black/20" />
            <div className="relative w-full aspect-[3/5] md:aspect-[4/5]">
               <Image src="/gutsy-timeline.png" alt="GUTSY Journey" fill className="object-contain" priority />
            </div>
          </div>
        </div>

        {/* Feature: Current State Blueprint */}
        <div className="grid lg:grid-cols-12 gap-0 border border-cream/10 bg-[#0F0F0F] text-cream overflow-hidden">
          {/* Left Column: The Wireframe/Visual */}
          <div className="lg:col-span-5 p-8 md:p-12 flex items-center justify-center relative bg-burgundy/[0.03] border-r border-cream/10">
             {/* Architectural Grid Overlay - Increased Opacity for Visibility */}
             <div className="absolute inset-0 opacity-[0.06] pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(circle, #FFF 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
             
             <div className="relative w-full max-w-[280px] aspect-[9/16] border border-cream/20 bg-[#141414] p-8 group shadow-2xl">
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-burgundy text-[10px] font-bold uppercase tracking-[0.2em] text-cream z-20 shadow-lg">
                  Alpha v.01
                </div>

                <div className="flex flex-col items-center justify-center h-full text-center space-y-8 relative z-10">
                  {/* Fixed Logo: Inline SVG ensures visibility */}
                  <div className="w-16 h-16 text-cream opacity-90 group-hover:scale-110 group-hover:text-burgundy transition-all duration-700">
                     <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M50 15 L85 85 Q50 95 15 85 Z" />
                        <ellipse cx="50" cy="85" rx="35" ry="10" strokeDasharray="4 4" opacity="0.3" />
                     </svg>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-serif italic text-2xl text-cream tracking-tight leading-tight">
                      Honor your <br /> capacity.
                    </h4>
                    <div className="w-12 h-px bg-burgundy mx-auto" />
                    <p className="text-[10px] uppercase tracking-[0.3em] text-cream/40 font-bold leading-relaxed">
                      Flow without <br /> the overwhelm
                    </p>
                  </div>

                  <div className="mt-8 px-6 py-2 border border-cream/10 text-[9px] uppercase tracking-[0.4em] text-cream/20 group-hover:border-cream/40 group-hover:text-cream/60 transition-all">
                    Enter Flow
                  </div>
                </div>
             </div>
          </div>

          {/* Right Column: The "Project Specs" */}
          <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-between">
            <div>
              <span className="text-burgundy font-serif italic text-xl mb-4 block">Productivity</span>
              <h3 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter text-cream">
                Productivity for <br /><span className="text-burgundy">Actual Humans.</span>
              </h3>
              
              <div className="max-w-xl space-y-6 font-body text-lg text-cream/70 leading-relaxed">
                <p>Most systems assume we are robots. Current State is a productivity framework designed for the neurodivergent and the multi-hyphenate.</p>
                <p>It swaps rigid calendars for energy-based logic, adapting to your daily capacity rather than fighting against it.</p>
              </div>
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-burgundy rounded-full animate-pulse" />
                <span className="font-serif italic text-cream/40">Coming Soon — Beta 2026</span>
              </div>
              <button className="text-cream/60 hover:text-burgundy font-body text-sm uppercase tracking-widest border-b border-cream/10 hover:border-burgundy transition-all pb-1">
                Follow the development chaos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
