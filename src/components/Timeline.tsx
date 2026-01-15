'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const chapters = [
  {
    index: '01',
    period: 'The Roots',
    title: 'Software Engineer',
    text: 'Built systems and realized I cared more about the "why" than the "how". Trading technical debt for human logic.',
    chaos: 'First realization: Sleep is a variable, not a constant.'
  },
  {
    index: '02',
    period: 'The Scaling',
    title: 'Operations & Markets',
    text: 'Moved from code to humans. Scaled systems across 8 markets. Learned that businesses are just complex algorithms with more variables.',
    chaos: 'PowerPoint became my primary IDE.'
  },
  {
    index: '03',
    period: 'The Pivot',
    title: 'AI & Public Building',
    text: 'Discarded the corporate ladder to geek out about AI and build in public. Obsessed with human performance and biology.',
    chaos: 'Current status: Welcome to the chaos.'
  }
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="founder" ref={ref} className="py-24 bg-cream text-black border-t border-black/10">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left: Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <div className="w-12 h-1 bg-burgundy mb-6" />
            <h2 className="text-5xl font-serif font-bold tracking-tighter mb-4">
              The Founder <br />Journey.
            </h2>
            <p className="font-serif italic text-black/50 text-lg">
              A brief history of how we got to the chaos.
            </p>
          </div>

          {/* Right: The Vertical Ledger */}
          <div className="lg:col-span-8 border-l border-black/10 pl-8 md:pl-16">
            {chapters.map((chapter, i) => (
              <motion.div 
                key={chapter.index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="mb-24 last:mb-0 relative"
              >
                {/* Number as a watermark */}
                <span className="absolute -left-20 md:-left-32 top-0 text-7xl md:text-8xl font-serif font-black text-black/5 opacity-10">
                  {chapter.index}
                </span>

                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 border-b border-black/5 pb-2">
                  <h3 className="text-3xl font-serif font-bold">{chapter.title}</h3>
                  <span className="text-burgundy font-body font-bold text-xs uppercase tracking-widest">
                    {chapter.period}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <p className="font-body text-lg text-black/70 leading-relaxed">
                    {chapter.text}
                  </p>
                  <div className="bg-black/5 p-6 border-l-2 border-burgundy">
                    <p className="font-serif italic text-sm text-black/60">
                      "{chapter.chaos}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
