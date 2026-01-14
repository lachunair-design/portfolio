'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timelineEntries = [
  {
    year: '2013-2016',
    title: 'Started as a Software Engineer',
    description: 'Built systems, wrote code, realized I cared more about the "why" than the "how". Also realized I\'m not patient enough to debug for 8 hours straight.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    year: '2017-2019',
    title: 'Joined Deliveroo',
    description: 'Dove into operations and strategy. Learned that scaling businesses is just like debugging, except with humans, and they don\'t come with error messages.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    year: '2020-2024',
    title: 'Scaled with Talabat',
    description: 'Managed €100M+ budgets across 8 markets. Presented to C-suite. Orchestrated teams. Discovered I\'m good at translating vision into action (and that PowerPoint is a weapon).',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    year: '2024-Present',
    title: 'Founded GUTSY',
    description: 'Wanted to experience the founder journey myself. Now I understand why sleep is optional and coffee is a food group. Also why every decision feels existential.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    year: '2025-Present',
    title: 'Building Current State',
    description: 'Because productivity apps assume we\'re robots. We\'re not. Some days are 10x days. Some days are survival mode. The system should adapt.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            From Code to Strategy
          </h2>
          <p className="text-charcoal/60 text-lg">(With Detours)</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-terracotta/30 origin-top"
            style={{ transform: 'translateX(-50%)' }}
          />

          {/* Timeline entries */}
          <div className="space-y-12 md:space-y-16">
            {timelineEntries.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                  className="absolute left-8 md:left-1/2 w-16 h-16 -translate-x-1/2 rounded-full bg-cream border-4 border-terracotta flex items-center justify-center text-terracotta z-10"
                >
                  {entry.icon}
                </motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] bg-cream rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                  }`}
                >
                  <span className="inline-block text-terracotta font-semibold text-sm tracking-wider uppercase mb-2">
                    {entry.year}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3">
                    {entry.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {entry.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
