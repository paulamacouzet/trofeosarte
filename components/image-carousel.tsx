"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

const carouselImages = [
  { src: "/images/galeria1.png", alt: "Galería de trofeos de golf hechos a mano" },
  { src: "/images/galeria2.png", alt: "Trofeo artístico para torneo de golf" },
  { src: "/images/galeria3.png", alt: "Galería de trofeos deportivos personalizados" },
  { src: "/images/galeria4.png", alt: "Trofeos de golf para clubes exclusivos" },
  { src: "/images/galeria5.png", alt: "Galería de trofeos de pádel hechos a mano" },
  { src: "/images/galeria6.png", alt: "Trofeos artísticos para torneos deportivos" },
  { src: "/images/galeria7.png", alt: "Galería de trofeos de tenis personalizados" },
]

export default function ImageCarousel() {
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

    if (x < leftEdge || x > rightEdge) {
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
      className="flex overflow-hidden space-x-6 py-4 mb-12"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ scrollBehavior: "auto" }}
    >
      {[...carouselImages, ...carouselImages].map((image, index) => (
        <div key={index} className="flex-shrink-0 w-64 h-64 bg-gray-200 rounded-lg overflow-hidden">
          <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  )
}
