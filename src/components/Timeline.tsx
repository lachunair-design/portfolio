'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timelineData = [
  {
    year: '2013-2016',
    title: 'Started as a Software Engineer',
    description:
      'Built systems, wrote code, realized I cared more about the "why" than the "how". Also realized I\'m not patient enough to debug for 8 hours straight.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    year: '2017-2019',
    title: 'Joined Deliveroo',
    description:
      'Dove into operations and strategy. Learned that scaling businesses is just like debugging, except with humans, and they don\'t come with error messages.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    year: '2020-2024',
    title: 'Scaled with Talabat',
    description:
      'Managed €100M+ budgets across 8 markets. Presented to C-suite. Orchestrated teams. Discovered I\'m good at translating vision into action (and that PowerPoint is a weapon).',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    year: '2024-Present',
    title: 'Founded GUTSY',
    description:
      'Wanted to experience the founder journey myself. Now I understand why sleep is optional and coffee is a food group. Also why every decision feels existential.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    year: '2025-Present',
    title: 'Building Current State',
    description:
      'Because productivity apps assume we\'re robots. We\'re not. Some days are 10x days. Some days are survival mode. The system should adapt.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-4">
            From Code to Strategy
          </h2>
          <p className="text-lg text-charcoal/60 font-sans">(With Detours)</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-terracotta/30 -translate-x-1/2" />

          {/* Vertical line - mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-terracotta/30" />

          <div className="space-y-12 md:space-y-0">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Mobile icon */}
                <div className="md:hidden absolute left-0 w-12 h-12 bg-navy text-cream rounded-full flex items-center justify-center z-10">
                  {item.icon}
                </div>

                {/* Desktop - Left/Right side content */}
                <div
                  className={`md:w-1/2 pl-20 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                  }`}
                >
                  <motion.div
                    whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-cream/50 p-6 md:p-8 border border-navy/5 hover:border-terracotta/20 transition-colors duration-300"
                  >
                    <span className="inline-block text-terracotta font-sans text-sm font-semibold uppercase tracking-wider mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-navy mb-3">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/70 font-sans text-base leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Desktop center icon */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-navy text-cream rounded-full items-center justify-center z-10 shadow-lg">
                  {item.icon}
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
