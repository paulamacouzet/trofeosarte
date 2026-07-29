"use client"

import { useState, useRef } from "react"
import CarouselArrows from "@/components/carousel-arrows"

const portfolioImages = [
  { src: "/trofeosarte/images/53.png", alt: "Trofeo artístico de golf en bronce hecho a mano" },
  { src: "/trofeosarte/images/54.png", alt: "Trofeo familiar en piedra para torneos deportivos" },
  { src: "/trofeosarte/images/55.png", alt: "Trofeo cultural con palos de golf cruzados" },
  { src: "/trofeosarte/images/56.png", alt: "Trofeo de equipo en bronce para golf" },
  { src: "/trofeosarte/images/57.png", alt: "Trofeo de celebración deportiva en equipo" },
  { src: "/trofeosarte/images/58.png", alt: "Trofeos institucionales Universidad Montrer" },
  { src: "/trofeosarte/images/59.png", alt: "Figura de victoria dinámica en bronce" },
  { src: "/trofeosarte/images/60.png", alt: "Trofeo clásico de palos de golf cruzados" },
  { src: "/trofeosarte/images/61.png", alt: "Trofeo geométrico de raquetas de pádel" },
  { src: "/trofeosarte/images/62.png", alt: "Trofeo tradicional de raquetas de pádel" },
  { src: "/trofeosarte/images/67.png", alt: "Trofeos de podio para golf - 1er, 2do y 3er lugar" },
  { src: "/trofeosarte/images/63.png", alt: "Trofeo moderno de ciclismo artístico" },
  { src: "/trofeosarte/images/64.png", alt: "Figura dinámica corriendo en bronce" },
  { src: "/trofeosarte/images/65.png", alt: "Trofeo de celebración de victoria en tenis" },
  { src: "/trofeosarte/images/66.png", alt: "Jugador de tenis en acción - trofeo dinámico" },
]

export default function MobilePortfolioGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const thumbnailCarouselRef = useRef<HTMLDivElement>(null)

  // Thumbnail carousel navigation
  const scrollThumbnailCarousel = (direction: "left" | "right") => {
    if (thumbnailCarouselRef.current) {
      const scrollAmount = 200 // Width of thumbnail + gap
      const currentScroll = thumbnailCarouselRef.current.scrollLeft
      const newScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount

      thumbnailCarouselRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      })
    }
  }

  // Handle thumbnail selection
  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index)

    // Auto-scroll to center the selected thumbnail
    if (thumbnailCarouselRef.current) {
      const thumbnailWidth = 80 + 16 // thumbnail width + gap
      const containerWidth = thumbnailCarouselRef.current.clientWidth
      const scrollPosition = index * thumbnailWidth - containerWidth / 2 + thumbnailWidth / 2

      thumbnailCarouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="block lg:hidden">
      {/* Main Large Image */}
      <div className="mb-6">
        <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <img
            src={portfolioImages[selectedImageIndex].src || "/placeholder.svg"}
            alt={portfolioImages[selectedImageIndex].alt}
            className="w-full h-full object-cover transition-all duration-300"
            loading="lazy"
          />
        </div>

        {/* Image Counter */}
        <div className="text-center mt-3">
          <span className="text-sm text-gray-600">
            {selectedImageIndex + 1} de {portfolioImages.length}
          </span>
        </div>
      </div>

      {/* Thumbnail Carousel */}
      <div className="mb-6">
        <div ref={thumbnailCarouselRef} className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {portfolioImages.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${
                selectedImageIndex === index
                  ? "ring-3 ring-[#446047] ring-offset-2 scale-105"
                  : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-1"
              }`}
              aria-label={`Ver imagen ${index + 1}: ${image.alt}`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Thumbnail Carousel Navigation Arrows */}
        <CarouselArrows
          onPrevious={() => scrollThumbnailCarousel("left")}
          onNext={() => scrollThumbnailCarousel("right")}
        />
      </div>

      {/* Optional: Swipe Indicator */}
      <div className="text-center">
        <p className="text-sm text-gray-500 italic">Toca las miniaturas para ver más detalles</p>
      </div>
    </div>
  )
}
