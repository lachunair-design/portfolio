'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const timelineData = [
  {
    year: '2013-2016',
    title: 'Software Engineer',
    description:
      'Built systems, wrote code, realized I cared more about the "why" than the "how".',
    pullQuote: 'Also realized I\'m not patient enough to debug for 8 hours straight.',
    image: '/software-engineer.jpg',
    logo:  null,
    logoAlt: null,
  },
  {
    year: '2017-2022',
    title: 'Deliveroo',
    description:
      'Dove into operations and strategy. Learned that scaling businesses is just like debugging, except with humans, and they don\'t come with error messages.',
    pullQuote: null,
    image: '/deliveroo-logo.png',
    logo: null,
    logoAlt: 'Deliveroo',
  },
  {
    year: '2022-2025',
    title: 'Talabat',
    description:
      'Managed €100M+ budgets across 8 markets. Presented to C-suite. Orchestrated teams.',
    pullQuote: 'Discovered I\'m good at translating vision into action (and that PowerPoint is a weapon).',
    image: '/talabat-logo.png',
    logo: null,
    logoAlt: 'Talabat',
  },
  {
    year: '2025-Present',
    title: 'Founded GUTSY',
    description:
      'Wanted to experience the founder journey myself. Now I understand why sleep is optional and coffee is a food group.',
    pullQuote: 'Also why every decision feels existential.',
    image: '/Gutsy-logomark.jpg',
    logo: null,
    logoAlt: 'GUTSY',
  },
  {
    year: '2025-Present',
    title: 'Building Current State',
    description:
      'Because productivity apps assume we\'re robots. We\'re not. Some days are 10x days. Some days are survival mode.',
    pullQuote: 'The system should adapt.',
    image: '/Current_State.jpg',
    logo: null,
    logoAlt: null,
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="experience" ref={ref} className="section-padding bg-cream">
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="burgundy-line mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-black mb-3">
            From Code to Strategy
          </h2>
          <p className="text-lg text-black/50 font-body italic">(With Detours)</p>
        </motion.div>

        {/* Timeline Cards */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-burgundy/20" />

          <div className="space-y-8 lg:space-y-12">
            {timelineData.map((item, index) => (
              <motion.article
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-12 gap-6 lg:gap-10 items-center ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-8 -translate-x-1/2 w-4 h-4 bg-burgundy rounded-full z-10" />

                {/* Image */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-8'
                  }`}
                >
                  <div className="relative aspect-[4/3] img-zoom card-tilt">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover img-editorial"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    {item.logo && (
                      <div className="absolute top-4 right-4 bg-cream/90 backdrop-blur-sm p-2">
                        <Image
                          src={item.logo}
                          alt={item.logoAlt || ''}
                          width={60}
                          height={24}
                          className="h-6 w-auto object-contain opacity-70"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 0 ? 'lg:col-start-7' : 'lg:col-start-2'
                  }`}
                >
                  <span className="inline-block text-burgundy font-body text-sm font-semibold uppercase tracking-wider mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-black mb-4">
                    {item.title}
                  </h3>
                  <p className="text-black/70 font-body text-base leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.pullQuote && (
                    <p className="pull-quote text-lg">
                      {item.pullQuote}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
