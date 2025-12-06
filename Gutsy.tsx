'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Gutsy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="gutsy" ref={ref} className="py-20 px-6 bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl font-black mb-6">GUTSY</div>
            
            <h2 className="text-4xl font-bold mb-6">
              Building GUTSY: From Kitchen Experiments to Real Business
            </h2>
            
            <p className="text-lg text-gray-300 mb-4">
              A Gut Health Brand Born from Personal Struggle
            </p>

            <div className="space-y-4 text-gray-300">
              <p>
                GUTSY started in my kitchen, not a boardroom.
              </p>
              <p>
                I was doing everything right. Working out consistently, eating clean, following all the wellness advice. 
                But I was still severely bloated and breaking out constantly. Turns out, the supplements I was taking were 
                actually making things worse.
              </p>
              <p>
                So I started experimenting in my kitchen. Reading research papers at midnight. Testing formulations on myself. 
                One thing led to another, and suddenly I was emailing manufacturers, negotiating MOQs, and learning more about 
                supply chains than I ever wanted to know.
              </p>
              <p>
                What began as a personal solution turned into something bigger. Because if I was struggling with this, 
                how many other people were too? How many were spending hundreds on supplements that weren't working, 
                or worse, making things worse?
              </p>
              <p>
                Now I'm building GUTSY to make gut health actually accessible. Science-backed formulations without the 
                wellness industry BS. No proprietary blends hiding questionable ingredients. No influencer marketing 
                pretending a probiotic will change your life overnight.
              </p>
              <p className="font-bold text-white">
                Just honest products that work, backed by actual research, priced fairly. Currently in pre-launch, 
                formulating, testing, and building in public. Because transparency matters when you're asking people to 
                trust you with their health.
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <motion.a
                href="https://www.instagram.com/gutsy" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: '#FF5A5F' }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-3 rounded-full font-medium"
              >
                Follow the Journey
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: '#FFB84D', color: '#FFB84D' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Join Waitlist
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative illustration placeholder */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl aspect-square flex items-center justify-center"
            >
              <p className="text-gray-400 text-center px-8">
                [GUTSY brand illustration or product image - 600x600px]
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
