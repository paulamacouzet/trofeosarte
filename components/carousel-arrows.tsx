"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselArrowsProps {
  onPrevious: () => void
  onNext: () => void
  className?: string
}

export default function CarouselArrows({ onPrevious, onNext, className = "" }: CarouselArrowsProps) {
  return (
    <div className={`flex justify-center space-x-4 mt-4 ${className}`}>
      <button
        onClick={onPrevious}
        className="bg-white/80 hover:bg-white border border-gray-300 rounded-full p-2 shadow-sm transition-all duration-200"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      <button
        onClick={onNext}
        className="bg-white/80 hover:bg-white border border-gray-300 rounded-full p-2 shadow-sm transition-all duration-200"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  )
}
