'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    label: 'Science-Backed',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    label: 'Actually Premium',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    label: 'No BS Marketing',
  },
]

const timeline = [
  { label: 'Problem', active: true },
  { label: 'Research', active: true },
  { label: 'Kitchen Experiments', active: true },
  { label: 'Building GUTSY', active: true },
  { label: 'Launch Q1 2026', active: false },
]

export default function Building() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="building" ref={ref} className="section-padding bg-cream">
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy mb-4">
            Building
          </h2>
          <p className="text-lg text-charcoal/70 font-sans max-w-xl mx-auto">
            Two ventures. One mission: make things that actually work.
          </p>
        </motion.div>

        {/* GUTSY Card - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-navy text-cream p-8 md:p-12 lg:p-16 relative overflow-hidden group">
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <span className="text-5xl md:text-6xl font-serif font-black tracking-tight">
                    GUTSY
                  </span>
                </motion.div>

                <p className="text-xl md:text-2xl font-serif text-terracotta mb-6">
                  Premium Gut Health. Zero Bullshit.
                </p>

                <p className="text-cream/80 font-sans text-base md:text-lg leading-relaxed mb-8">
                  Science-backed gut health supplements. No influencer marketing.
                  No proprietary blends hiding questionable ingredients. Actually
                  premium ingredients that work. Launching Q1 2026 in Dubai.
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-6 mb-10">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 text-cream/70"
                    >
                      <span className="text-terracotta">{feature.icon}</span>
                      <span className="font-sans text-sm font-medium uppercase tracking-wider">
                        {feature.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="https://www.instagram.com/lakshmiirl"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, backgroundColor: '#E07A5F' }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-cream text-navy px-6 py-3 font-sans font-medium text-sm transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Follow the Journey
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.02, borderColor: '#E07A5F', color: '#E07A5F' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const contact = document.getElementById('connect')
                      contact?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="border-2 border-cream text-cream px-6 py-3 font-sans font-medium text-sm transition-all duration-300 bg-transparent"
                  >
                    Join Waitlist
                  </motion.button>
                </div>
              </div>

              {/* Journey Timeline */}
              <div className="hidden lg:block">
                <div className="bg-cream/5 backdrop-blur-sm p-8 rounded-sm">
                  <p className="text-xs uppercase tracking-wider text-cream/50 mb-6 font-sans">
                    The Journey
                  </p>
                  <div className="space-y-4">
                    {timeline.map((step, index) => (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${
                            step.active ? 'bg-terracotta' : 'bg-cream/30'
                          }`}
                        />
                        <span
                          className={`font-sans text-sm ${
                            step.active ? 'text-cream' : 'text-cream/50'
                          }`}
                        >
                          {step.label}
                        </span>
                        {index < timeline.length - 1 && (
                          <div className="flex-1 h-px bg-cream/10" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Current State Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white border border-navy/10 p-8 md:p-12 relative overflow-hidden group hover:border-terracotta/30 transition-all duration-500">
            {/* Decorative accent */}
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-terracotta/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl md:text-4xl font-serif font-bold text-navy">
                    Current State
                  </span>
                  <span className="bg-terracotta/10 text-terracotta px-3 py-1 text-xs font-sans font-medium uppercase tracking-wider">
                    In Development
                  </span>
                </div>

                <p className="text-lg md:text-xl font-serif text-terracotta mb-4">
                  Productivity for Actual Humans
                </p>

                <p className="text-charcoal/80 font-sans text-base leading-relaxed mb-6">
                  A productivity system that adapts to how you're actually doing
                  today, not how productive you wish you were. For people managing
                  multiple income streams with fluctuating energy levels.
                </p>

                <div className="bg-cream/50 p-4 mb-8 border-l-2 border-terracotta">
                  <p className="text-sm text-charcoal/70 font-sans">
                    <span className="font-semibold text-navy">Early adopter focus:</span>{' '}
                    ADHD community
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-navy text-cream px-6 py-3 font-sans font-medium text-sm transition-all duration-300 opacity-70 cursor-not-allowed"
                  disabled
                >
                  Coming Soon
                </motion.button>
              </div>

              {/* App mockup placeholder */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-64 h-[400px] bg-navy/5 rounded-3xl overflow-hidden border border-navy/10">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-navy/20 rounded-full" />
                  <div className="flex items-center justify-center h-full text-charcoal/30 font-sans text-sm text-center p-6">
                    <div>
                      <svg className="w-12 h-12 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs uppercase tracking-wider">App Mockup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
