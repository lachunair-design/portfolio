'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const experienceData = [
  {
    company: 'Talabat',
    period: '2020-2024',
    summary: '€100M+ Annual Budgets Managed | 8 Global Markets',
    roles: [
      {
        title: 'Head of Affordability and Growth',
        period: 'Dec 2021 - Jul 2025',
        description: 'Led strategic planning for 8 markets. Orchestrated OKR alignment across 70+ stakeholders.'
      },
      // ... rest of your roles
    ],
  },
  // ... rest of your data
]

export default function ExperienceDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Trigger: The "Founder's Footnote" */}
      <section className="py-20 bg-cream border-y border-black/5">
        <div className="container-editorial flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-serif font-bold text-black mb-2 italic">
              Want the metrics?
            </h2>
            <p className="text-black/60 font-body text-sm uppercase tracking-widest">
              Detailed career history, budgets, and project specs.
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-4 border-b-2 border-burgundy pb-2 font-serif font-black text-2xl hover:text-burgundy transition-all"
          >
            Access Full History
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </section>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-xl bg-cream z-50 shadow-2xl overflow-y-auto border-l border-black"
            >
              {/* Drawer Header */}
              <div className="p-8 border-b border-black/10 flex justify-between items-end bg-[#F9F7F2]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-burgundy font-bold">Annex 01</span>
                  <h3 className="text-4xl font-serif font-bold text-black mt-2">The CV.</h3>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="font-serif italic text-black/40 hover:text-black transition-colors"
                >
                  [ Close ]
                </button>
              </div>

              {/* Data Content */}
              <div className="p-8 md:p-12 space-y-16">
                {experienceData.map((company) => (
                  <div key={company.company} className="relative">
                    <div className="flex justify-between items-baseline border-b border-black mb-6">
                      <h4 className="text-2xl font-serif font-bold italic">{company.company}</h4>
                      <span className="text-xs font-bold font-body">{company.period}</span>
                    </div>
                    
                    <p className="text-sm font-body font-bold text-burgundy mb-8 tracking-wide uppercase">
                      {company.summary}
                    </p>

                    <div className="space-y-10">
                      {company.roles.map((role, idx) => (
                        <div key={idx} className="group">
                          <div className="flex flex-col mb-2">
                            <span className="font-serif font-bold text-lg leading-tight group-hover:text-burgundy transition-colors">
                              {role.title}
                            </span>
                            <span className="text-[10px] font-body text-black/40 uppercase tracking-widest mt-1">
                              {role.period}
                            </span>
                          </div>
                          <p className="text-black/70 font-body text-sm leading-relaxed border-l border-black/5 pl-4">
                            {role.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-8 bg-black text-cream">
                <p className="font-serif italic text-lg mb-4 text-cream/60">
                  Scaling logic across 8 markets teaches you one thing: 
                  <span className="text-cream block not-italic font-bold">The chaos is the constant.</span>
                </p>
                <a 
                  href="mailto:lachunair@gmail.com" 
                  className="inline-block border-b border-burgundy pb-1 text-sm font-bold uppercase tracking-widest"
                >
                  Let's Discuss Strategy
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
