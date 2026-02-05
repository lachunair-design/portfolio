'use client'

import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function InstagramCarousel() {
  const [videos, setVideos] = useState([])
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: true })

  useEffect(() => {
    // Replace with your actual API endpoint or direct fetch
    const fetchVideos = async () => {
      try {
        const res = await fetch('/api/instagram') 
        const data = await res.json()
        setVideos(data.filter((m: any) => m.media_type === 'VIDEO'))
      } catch (e) {
        console.error("Failed to load Instagram feed", e)
      }
    }
    fetchVideos()
  }, [])

  if (videos.length === 0) return null

  return (
    <section className="py-16 px-6 md:px-12">
      <h2 className="text-2xl font-bold mb-8">Latest Reels</h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {videos.map((video: any) => (
            <div key={video.id} className="flex-[0_0_280px] min-w-0">
              <a href={video.permalink} target="_blank" rel="noopener">
                <video 
                  src={video.media_url} 
                  poster={video.thumbnail_url}
                  className="rounded-2xl aspect-[9/16] object-cover hover:scale-[1.02] transition-transform"
                  muted
                  loop
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => e.currentTarget.pause()}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
