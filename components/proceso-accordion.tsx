"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import CarouselArrows from "@/components/carousel-arrows"

const processSteps = [
  {
    number: "01",
    title: "Reunión Creativa",
    description:
      "Entendemos tu visión y objetivos del torneo para crear un concepto único que represente la esencia de tu club. Trofeos a partir de 1,200 MXN.",
    image: "/images/diseno-personalizado-trofeos-club-golf-proceso-creativo.png",
    alt: "Proceso creativo de diseño de trofeos personalizados",
  },
  {
    number: "02",
    title: "Diseño Conceptual",
    description:
      "El artista crea bocetos únicos y presentamos propuestas visuales que capturan la identidad de tu torneo. En esta etapa obtendrás una cotización formal según la elección del diseño y la cantidad.",
    image: "/images/bocetos-disenos-conceptuales-trofeos-personalizados.png",
    alt: "Bocetos y diseños conceptuales de trofeos artísticos",
  },
  {
    number: "03",
    title: "Producción Artística",
    description: "Fabricamos con materiales premium y técnicas artesanales para garantizar la máxima calidad.",
    image: "/images/produccion-artesanal-trofeos-materiales-premium.png",
    alt: "Producción artesanal de trofeos con materiales premium",
  },
  {
    number: "04",
    title: "Entrega Exclusiva",
    description: "Presentamos tu trofeo insignia con el cuidado y ceremonia que merece una pieza de arte.",
    image: "/images/entrega-ceremonial-trofeos-exclusivos-presentacion.png",
    alt: "Entrega ceremonial de trofeos exclusivos personalizados",
  },
]

export default function ProcesoAccordion() {
  const mobileCarouselRef = useRef<HTMLDivElement>(null)

  // Mobile carousel navigation
  const scrollProcesoCarousel = (direction: "left" | "right") => {
    if (mobileCarouselRef.current) {
      const scrollAmount = 340 // Width of card + gap
      const currentScroll = mobileCarouselRef.current.scrollLeft
      const newScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount

      mobileCarouselRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      {/* Mobile Layout - Horizontal Scroll */}
      <div className="block lg:hidden">
        <div ref={mobileCarouselRef} className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:border-[#446047] hover:shadow-md transition-all duration-300 flex-shrink-0 w-80"
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header content */}
                <div className="text-4xl font-bold text-[#446047] mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>

                {/* Description */}
                <div className="flex-grow mb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Image container with fixed dimensions */}
                <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Proceso Carousel Navigation Arrows */}
        <CarouselArrows
          onPrevious={() => scrollProcesoCarousel("left")}
          onNext={() => scrollProcesoCarousel("right")}
        />
      </div>

      {/* Desktop Layout - Grid */}
      <div className="hidden lg:block">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:border-[#446047] hover:shadow-md transition-all duration-300 h-full"
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header content */}
                <div className="text-4xl font-bold text-[#446047] mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>

                {/* Description */}
                <div className="flex-grow mb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Image container with fixed dimensions */}
                <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
