"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

const galleryImages = [
  "[Gallery Image 1]",
  "[Gallery Image 2]",
  "[Gallery Image 3]",
  "[Gallery Image 4]",
  "[Gallery Image 5]",
  "[Gallery Image 6]",
  "[Gallery Image 7]",
  "[Gallery Image 8]",
]

export default function GalleryCarousel() {
  const [scrollSpeed, setScrollSpeed] = useState(1)
  const carouselRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let scrollPosition = 0
    const animate = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0
      }
      carousel.scrollLeft = scrollPosition
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [scrollSpeed])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width
    const leftEdge = width * 0.2
    const rightEdge = width * 0.8

    if (x < leftEdge) {
      setScrollSpeed(3)
    } else if (x > rightEdge) {
      setScrollSpeed(3)
    } else {
      setScrollSpeed(1)
    }
  }

  const handleMouseLeave = () => {
    setScrollSpeed(1)
  }

  return (
    <div
      ref={carouselRef}
      className="flex overflow-hidden space-x-4 py-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ scrollBehavior: "auto" }}
    >
      {/* Duplicate images for seamless loop */}
      {[...galleryImages, ...galleryImages].map((image, index) => (
        <div key={index} className="flex-shrink-0 w-48 h-48 bg-gray-200 rounded-lg">
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">{image}</div>
        </div>
      ))}
    </div>
  )
}
