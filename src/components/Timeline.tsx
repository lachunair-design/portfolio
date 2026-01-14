'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type TimelineItem = {
  year: string
  title: string
  description: string
  pullQuote?: string | null
  image?: string | null
  logo?: string | null
  logoAlt?: string | null
}

const timelineData: TimelineItem[] = [
  {
    year: '2013-2016',
    title: 'Software Engineer',
    description:
      'Built systems, wrote code, realized I cared more about the "why" than the "how".',
    pullQuote: "Also realized I'm not patient enough to debug for 8 hours straight.",
    image: null,
    logo: '/software-engineer.jpg',
    logoAlt: null,
  },
  {
    year: '2017-2022',
    title: 'Deliveroo',
    description:
      "Dove into operations and strategy. Learned that scaling businesses is just like debugging, except with humans, and they don't come with error messages.",
    pullQuote: null,
    image: null,
    logo: '/deliveroo-logo.png',
    logoAlt: 'Deliveroo',
  },
  {
    year: '2022-2025',
    title: 'Talabat',
    description:
      'Managed €100M+ budgets across 8 markets. Presented to C-suite. Orchestrated teams.',
    pullQuote:
      "Discovered I'm good at translating vision into action (and that PowerPoint is a weapon).",
    image: null,
    logo: '/talabat-logo.png',
    logoAlt: 'Talabat',
  },
  {
    year: '2025-Present',
    title: 'Founded GUTSY',
    description:
      'Wanted to experience the founder journey myself. Now I understand why sleep is optional and coffee is a food group.',
    pullQuote: 'Also why every decision feels existential.',
    image: null,
    logo: '/Gutsy-logomark.jpg',
    logoAlt: 'GUTSY',
  },
  {
    year: '2025-Present',
    title: 'Building Current State',
    description:
      "Because productivity apps assume we're robots. We're not. Some days are 10x days. Some days are survival mode.",
    pullQuote: 'The system should adapt.',
    image: null,
    logo: '/Current_State.jpg',
    logoAlt: null,
  },
]

export default function Timeline() {
  const ref = useRef<HTMLElement | null>(null)
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

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-0 right-0 top-6 h-px bg-burgundy/20" />

          <div className="flex gap-6 md:gap-10 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth">
            {timelineData.map((item, index) => (
              <motion.article
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="snap-start shrink-0 w-[85vw] md:w-[520px] lg:w-[620px]"
              >
                {/* Dot */}
                <div className="hidden md:block w-3 h-3 bg-burgundy rounded-full mb-6" />

                {/* Logo / Image (no background frame) */}
                {(item.logo || item.image) && (
                  <div className="flex items-center justify-start py-6">
                    {item.image ? (
                      <div className="relative w-full h-[260px] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover img-editorial"
                          sizes="(max-width: 768px) 85vw, 620px"
                        />
                      </div>
                    ) : (
                      item.logo && (
                        <Image
                          src={item.logo}
                          alt={item.logoAlt || item.title}
                          width={360}
                          height={160}
                          className="h-16 md:h-20 w-auto object-contain opacity-80"
                        />
                      )
                    )}
                  </div>
                )}

                {/* Content */}
                <span className="inline-block text-burgundy font-body text-sm font-semibold uppercase tracking-wider mb-3">
                  {item.year}
                </span>

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-black mb-4">
                  {item.title}
                </h3>

                <p className="text-black/70 font-body text-base leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.pullQuote && <p className="pull-quote text-lg">{item.pullQuote}</p>}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
