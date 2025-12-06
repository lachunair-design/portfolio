'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const blogPosts = [
  {
    title: 'This Too Shall Pass (And That\'s the Problem)',
    date: 'Nov 28, 2025',
    excerpt: 'I\'ve been thinking about the phrase "this too shall pass."...',
    letter: 'T',
  },
  {
    title: 'The Disengagement Crisis We\'re Calling Normal',
    date: 'Nov 17, 2025',
    excerpt: 'On Sunday scaries, ashwagandha, and the cost of staying......',
    letter: 'T',
  },
  {
    title: 'Everything Takes Longer Than You Think',
    date: 'Nov 11, 2025',
    excerpt: 'I thought it would take six to eight months.....',
    letter: 'E',
  },
]

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blog" ref={ref} className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">
            Thoughts on Building, Breaking, and Building Again
          </h2>
          <p className="text-xl text-gray-600">
            I write about founder life, career transitions, and the things nobody tells you in business school. 
            Real talk, occasional sarcasm, zero fluff.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.a
              key={index}
              href="https://lakshmiinprogress.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group block"
            >
              <div className="bg-primary rounded-2xl aspect-video flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <span className="text-white text-8xl font-black">{post.letter}</span>
              </div>
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <motion.span
                className="text-primary font-medium flex items-center gap-2"
              >
                Read More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-secondary text-white rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Subscribe for Weekly Insights</h3>
          <p className="text-xl text-gray-300 mb-8">
            Get weekly insights on strategy, startups, and surviving the chaos. 
            Delivered every Sunday with your coffee.
          </p>
          <motion.a
            href="https://lakshmiinprogress.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: '#FFB84D' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-medium text-lg"
          >
            Subscribe on Substack →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
