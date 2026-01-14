'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    id: 'gutsy',
    name: 'GUTSY',
    tagline: 'Premium Gut Health. Zero Bullshit.',
    description: 'Science-backed gut health supplements. No influencer marketing. No proprietary blends hiding questionable ingredients. Actually premium ingredients that work. Launching Q1 2026 in Dubai.',
    features: [
      { icon: '🔬', label: 'Science-Backed' },
      { icon: '💎', label: 'Actually Premium' },
      { icon: '🚫', label: 'No BS Marketing' },
    ],
    timeline: [
      'Problem',
      'Research',
      'Kitchen Experiments',
      'Building GUTSY',
      'Launch Q1 2026',
    ],
    ctas: [
      { label: 'Follow the Journey', href: 'https://www.instagram.com/lakshmiirl', type: 'primary' },
      { label: 'Join Waitlist', href: '#connect', type: 'secondary' },
    ],
    accent: 'terracotta',
    featured: true,
  },
  {
    id: 'current-state',
    name: 'Current State',
    tagline: 'Productivity for Actual Humans',
    description: 'A productivity system that adapts to how you\'re actually doing today, not how productive you wish you were. For people managing multiple income streams with fluctuating energy levels.',
    audience: 'Early adopter focus: ADHD community',
    stage: 'Currently in development',
    ctas: [
      { label: 'Coming Soon', href: '#connect', type: 'secondary' },
    ],
    accent: 'navy',
    featured: false,
  },
]

export default function Building() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const handleCTA = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="building" ref={ref} className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
            What I'm Building
          </h2>
          <div className="w-24 h-1 bg-terracotta" />
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                project.featured
                  ? 'bg-navy text-cream'
                  : 'bg-white text-navy border border-navy/10'
              }`}
              style={{
                transform: hoveredCard === project.id ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredCard === project.id
                  ? '0 25px 50px -12px rgba(10, 17, 40, 0.25)'
                  : '0 4px 6px -1px rgba(10, 17, 40, 0.1)',
              }}
            >
              <div className="p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  {/* Content */}
                  <div>
                    {/* Logo/Name */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.2 }}
                      className="mb-6"
                    >
                      <span className={`font-serif text-4xl md:text-5xl font-black ${
                        project.featured ? 'text-terracotta' : 'text-navy'
                      }`}>
                        {project.name}
                      </span>
                    </motion.div>

                    {/* Tagline */}
                    <p className={`text-xl md:text-2xl font-semibold mb-6 ${
                      project.featured ? 'text-cream' : 'text-charcoal'
                    }`}>
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className={`text-lg leading-relaxed mb-8 ${
                      project.featured ? 'text-cream/80' : 'text-charcoal/80'
                    }`}>
                      {project.description}
                    </p>

                    {/* Audience/Stage (for Current State) */}
                    {project.audience && (
                      <p className={`text-sm uppercase tracking-wider mb-2 ${
                        project.featured ? 'text-terracotta' : 'text-terracotta'
                      }`}>
                        {project.audience}
                      </p>
                    )}
                    {project.stage && (
                      <p className={`text-sm font-medium mb-8 ${
                        project.featured ? 'text-cream/60' : 'text-charcoal/60'
                      }`}>
                        {project.stage}
                      </p>
                    )}

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                      {project.ctas.map((cta, ctaIndex) => (
                        <motion.button
                          key={ctaIndex}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleCTA(cta.href)}
                          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                            cta.type === 'primary'
                              ? 'bg-terracotta text-cream hover:bg-terracotta/90'
                              : project.featured
                                ? 'border-2 border-cream/40 text-cream hover:border-cream hover:bg-cream/10'
                                : 'border-2 border-navy/30 text-navy hover:border-navy hover:bg-navy/5'
                          }`}
                        >
                          {cta.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Right side - Features or Visual */}
                  <div className="lg:pl-8">
                    {/* Features (for GUTSY) */}
                    {project.features && (
                      <div className="mb-10">
                        <div className="grid grid-cols-3 gap-4">
                          {project.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, y: 20 }}
                              animate={isInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ delay: 0.5 + featureIndex * 0.1 }}
                              className={`text-center p-4 rounded-2xl ${
                                project.featured
                                  ? 'bg-cream/10'
                                  : 'bg-navy/5'
                              }`}
                            >
                              <span className="text-3xl mb-2 block">{feature.icon}</span>
                              <span className={`text-sm font-medium ${
                                project.featured ? 'text-cream/80' : 'text-charcoal/80'
                              }`}>
                                {feature.label}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Timeline (for GUTSY) */}
                    {project.timeline && (
                      <div className="relative">
                        <p className={`text-sm uppercase tracking-wider mb-4 ${
                          project.featured ? 'text-cream/60' : 'text-charcoal/60'
                        }`}>
                          The Journey
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          {project.timeline.map((step, stepIndex) => (
                            <motion.div
                              key={stepIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.7 + stepIndex * 0.1 }}
                              className="flex items-center"
                            >
                              <span className={`text-sm px-3 py-1.5 rounded-full ${
                                stepIndex === project.timeline!.length - 1
                                  ? 'bg-terracotta text-cream font-semibold'
                                  : project.featured
                                    ? 'bg-cream/10 text-cream/80'
                                    : 'bg-navy/10 text-charcoal/80'
                              }`}>
                                {step}
                              </span>
                              {stepIndex < project.timeline!.length - 1 && (
                                <span className={`mx-1 ${
                                  project.featured ? 'text-cream/40' : 'text-charcoal/40'
                                }`}>
                                  →
                                </span>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Visual placeholder for Current State */}
                    {!project.featured && !project.features && (
                      <div className="aspect-video rounded-2xl bg-gradient-to-br from-navy/5 to-terracotta/5 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-4xl mb-2 block">📱</span>
                          <p className="text-charcoal/40 text-sm">App Preview Coming Soon</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              {project.featured && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta/10 rounded-bl-full" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
