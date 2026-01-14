'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const features = [
  { label: 'Science-Backed' },
  { label: 'Actually Premium' },
  { label: 'No BS Marketing' },
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
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="building" ref={ref} className="section-padding bg-black">
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="w-12 h-0.5 bg-burgundy mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-3">
            Building
          </h2>
          <p className="text-lg text-cream/60 font-body">
            Two ventures. One mission: make things that actually work.
          </p>
        </motion.div>

        {/* GUTSY Card - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-cream text-black p-6 md:p-10 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div>
                {/* Logo */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/Gutsy-logomark.jpg"
                      alt="GUTSY"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
                    GUTSY
                  </span>
                </div>

                <p className="text-xl md:text-2xl font-serif italic text-burgundy mb-6">
                  Premium Gut Health. Zero Bullshit.
                </p>

                <p className="text-black/70 font-body text-base leading-relaxed mb-6">
                  Science-backed gut health supplements. No influencer marketing.
                  No proprietary blends hiding questionable ingredients. Actually
                  premium ingredients that work. Launching Q1 2026 in Dubai.
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.span
                      key={feature.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-xs font-body font-semibold uppercase tracking-wider text-black/50 border border-black/20 px-3 py-1.5"
                    >
                      {feature.label}
                    </motion.span>
                  ))}
                </div>

                {/* Journey */}
                <div className="mb-8 pb-8 border-b border-black/10">
                  <p className="text-xs uppercase tracking-wider text-black/40 mb-4 font-body">
                    The Journey
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {timeline.map((step, index) => (
                      <div key={step.label} className="flex items-center gap-3">
                        <span
                          className={`text-sm font-body ${
                            step.active ? 'text-black' : 'text-black/40'
                          }`}
                        >
                          {step.label}
                        </span>
                        {index < timeline.length - 1 && (
                          <span className="text-burgundy">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/lakshmiirl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Follow the Journey
                  </a>
                  <button
                    onClick={() => {
                      const contact = document.getElementById('connect')
                      contact?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="btn-secondary"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/5] img-zoom card-tilt">
                <Image
                  src="/GUTSY-PRODUCT.jpg"
                  alt="GUTSY product research"
                  fill
                  className="object-cover img-editorial"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Current State Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-cream/5 border border-cream/10 p-6 md:p-10 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image / Mockup */}
              <div className="order-2 lg:order-1">
                <div className="relative aspect-[4/3] img-zoom">
                  <Image
                    src="/Current-State.png"
                    alt="Current State app mockup"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl md:text-4xl font-serif font-bold text-cream">
                    Current State
                  </span>
                  <span className="bg-burgundy/20 text-burgundy px-3 py-1 text-xs font-body font-medium uppercase tracking-wider">
                    In Development
                  </span>
                </div>

                <p className="text-xl font-serif italic text-burgundy mb-4">
                  Productivity for Actual Humans
                </p>

                <p className="text-cream/70 font-body text-base leading-relaxed mb-6">
                  A productivity system that adapts to how you're actually doing
                  today, not how productive you wish you were. For people managing
                  multiple income streams with fluctuating energy levels.
                </p>

                <div className="border-l-2 border-burgundy pl-4 mb-8">
                  <p className="text-sm text-cream/60 font-body">
                    <span className="font-semibold text-cream">Early adopter focus:</span>{' '}
                    ADHD community
                  </p>
                </div>

                <button
                  className="btn-secondary border-cream/30 text-cream/50 cursor-not-allowed"
                  disabled
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
