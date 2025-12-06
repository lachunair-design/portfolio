'use client'

import confetti from 'canvas-confetti'

export const triggerConfetti = (x: number, y: number) => {
  const colors = ['#FF5A5F', '#FFB84D', '#1B2838']
  
  confetti({
    particleCount: 30,
    spread: 60,
    origin: {
      x: x / window.innerWidth,
      y: y / window.innerHeight
    },
    colors: colors,
    scalar: 0.8,
    gravity: 1.2,
    drift: 0,
    ticks: 200,
  })
}

export const celebrationConfetti = () => {
  const duration = 2000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, colors: ['#FF5A5F', '#FFB84D', '#1B2838'] }

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  const interval: NodeJS.Timeout = setInterval(function() {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 50 * (timeLeft / duration)

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    })
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    })
  }, 250)
}
