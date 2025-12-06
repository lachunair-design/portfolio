'use client'

import { motion } from 'framer-motion'
import { triggerConfetti } from './confetti'

export default function Hero() {
  const handleClick = (e: React.MouseEvent) => {
    triggerConfetti(e.clientX, e.clientY)
  }

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-6 pt-20"
      onClick={handleClick}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-black text-secondary mb-6"
          >
            Hi, I'm Lakshmi.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
          >
            I do strategy and operations consulting, geek out about AI on the internet, 
            and founded <span className="text-primary font-bold">GUTSY</span> because my gut was 
            a mess and the supplements market is worse. Welcome to the chaos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#ff4348' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 py-3 rounded-full font-medium text-lg"
            >
              Work With Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#FF5A5F', color: '#FF5A5F' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('gutsy')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-secondary text-secondary px-8 py-3 rounded-full font-medium text-lg transition-colors"
            >
              Explore GUTSY
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative z-10"
          >
            {/* Placeholder for hero image */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden shadow-2xl aspect-square flex items-center justify-center">
              <p className="text-gray-400 text-center px-8">
                [Your professional photo with red background shapes here - 800x800px]
              </p>
            </div>
          </motion.div>
          
          {/* Decorative shapes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/30 rounded-full blur-3xl -z-10"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-8 -left-8 w-48 h-48 bg-accent/30 rounded-full blur-3xl -z-10"
          />
        </motion.div>
      </div>
    </section>
  )
}
