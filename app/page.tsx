"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ProcesoAccordion from "@/components/proceso-accordion"
import ImageCarousel from "@/components/image-carousel"
import WhatsAppBubble from "@/components/whatsapp-bubble"
import CarouselArrows from "@/components/carousel-arrows"
import MobilePortfolioGallery from "@/components/mobile-portfolio-gallery"
import MobileMenu from "@/components/mobile-menu"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("hero")
  const [emailCopied, setEmailCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("contacto@rolandomacouzet.com")
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2500)
    } catch {
      // Si el navegador no permite copiar, abrimos el correo como respaldo.
      window.location.href = "mailto:contacto@rolandomacouzet.com"
    }
  }
  const heroCarouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "nosotros",
        "servicios",
        "trofeo-insignia",
        "proceso",
        "portafolio",
        "mas-arte",
        "contact",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCalendlyClick = () => {
    // Calendly quedó desconectado; agendar se hace directo por WhatsApp.
    const message = "Hola, me gustaría agendar una llamada para un trofeo personalizado"
    window.open(`https://wa.me/5214433735374?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "5215551234567"
    const message = "Hola, me interesa agendar una consulta sobre trofeos artísticos"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  // Hero carousel navigation
  const scrollHeroCarousel = (direction: "left" | "right") => {
    if (heroCarouselRef.current) {
      const scrollAmount = 280 // Width of image + gap
      const currentScroll = heroCarouselRef.current.scrollLeft
      const newScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount

      heroCarouselRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#f6f2e7]">
      {/* Header - With Centered Navigation */}
      <header className="sticky top-0 bg-[#f6f2e7] z-50 border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 py-2">
          <nav className="flex items-center" role="navigation" aria-label="Navegación principal">
            {/* Logo - Fixed Left */}
            <div className="flex-shrink-0">
              <a href="#hero" className="cursor-pointer" aria-label="Ir al inicio">
                <Image
                  src="/trofeosarte/images/logotrofeosarte.png"
                  alt="Logo de Trofeos Arte - trofeos personalizados en México"
                  width={300}
                  height={120}
                  className="h-16 w-auto"
                  priority
                />
              </a>
            </div>

            {/* Centered Navigation Menu - Desktop */}
            <div className="flex-1 flex justify-center px-8">
              <ul className="hidden md:flex items-center space-x-8 text-black">
                <li>
                  <a
                    href="#nosotros"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`hover:text-[#446047] transition-colors whitespace-nowrap ${
                      activeSection === "nosotros" ? "font-bold" : "font-normal"
                    }`}
                    aria-label="Ir a la sección Sobre Nosotros"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`hover:text-[#446047] transition-colors whitespace-nowrap ${
                      activeSection === "servicios" ? "font-bold" : "font-normal"
                    }`}
                    aria-label="Ir a la sección Nuestros Servicios"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#portafolio"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("portafolio")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`hover:text-[#446047] transition-colors whitespace-nowrap ${
                      activeSection === "portafolio" ? "font-bold" : "font-normal"
                    }`}
                    aria-label="Ir a la sección Portafolio"
                  >
                    Portafolio
                  </a>
                </li>
                <li>
                  <a
                    href="#mas-arte"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("mas-arte")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`hover:text-[#446047] transition-colors whitespace-nowrap ${
                      activeSection === "mas-arte" ? "font-bold" : "font-normal"
                    }`}
                    aria-label="Ir a la sección Más Arte"
                  >
                    Más Arte
                  </a>
                </li>
                <li>
                  <a
                    href="/trofeosarte/faq"
                    className="hover:text-[#446047] transition-colors font-normal whitespace-nowrap"
                    aria-label="Ir a Preguntas Frecuentes"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`hover:text-[#446047] transition-colors whitespace-nowrap ${
                      activeSection === "contact" ? "font-bold" : "font-normal"
                    }`}
                    aria-label="Ir a la sección Contacto"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Component - Fixed Right */}
            <div className="flex-shrink-0">
              <MobileMenu activeSection={activeSection} />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Main H1 */}
      <section id="hero" className="py-6 lg:py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            {/* Mobile Layout */}
            <div className="block lg:hidden">
              {/* Title and Subtitle */}
              <div className="text-center mb-6">
                <h1 className="text-3xl font-normal text-black leading-tight mb-4">
                  TU CLUB MERECE TROFEOS
                  <br />
                  <span className="font-bold">MEMORABLES</span>
                </h1>
                <p className="text-lg text-black italic leading-relaxed">
                  Trofeos artísticos personalizados para torneos de golf, tenis, pádel, y más
                </p>
              </div>

              {/* Mobile Hero Image Carousel */}
              <div className="mb-6">
                <div ref={heroCarouselRef} className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
                  <div className="flex-shrink-0 w-64 aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src="/trofeosarte/images/trofeo-artistico-torneo-golf-escultura-bronce-mano-pelota.png"
                      alt="Trofeo artístico para torneo de golf"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <div className="flex-shrink-0 w-64 aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src="/trofeosarte/images/escultura-artistica-golfistas-bronce-trofeos-personalizados.png"
                      alt="Galería de trofeos de golf hechos a mano"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <div className="flex-shrink-0 w-64 aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src="/trofeosarte/images/trofeo-artistico-tenis-padel-premio-exclusivo.png"
                      alt="Trofeo artístico para torneo de pádel y tenis"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Hero Carousel Navigation Arrows */}
                <CarouselArrows
                  onPrevious={() => scrollHeroCarousel("left")}
                  onNext={() => scrollHeroCarousel("right")}
                />
              </div>

              {/* Button - Icons hidden on mobile */}
              <div className="text-center">
                <a href="#portafolio" aria-label="Ver colección completa de trofeos artísticos personalizados">
                  <Button className="bg-[#446047] hover:bg-[#446047]/90 text-white px-8 py-3 text-lg font-medium rounded-full">
                    Ver colección
                  </Button>
                </a>
              </div>
            </div>

            {/* Desktop Layout - Keep Original 4-Column Layout */}
            <div className="hidden lg:block">
              {/* 4-Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start mb-6">
                {/* Column 1 - Image */}
                <div className="flex items-start justify-center">
                  <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src="/trofeosarte/images/trofeo-artistico-torneo-golf-escultura-bronce-mano-pelota.png"
                      alt="Trofeo artístico para torneo de golf"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Column 2 - Image */}
                <div className="flex items-start justify-center">
                  <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src="/trofeosarte/images/escultura-artistica-golfistas-bronce-trofeos-personalizados.png"
                      alt="Galería de trofeos de golf hechos a mano"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Column 3 - Text Content with H1 */}
                <div className="flex flex-col justify-start text-center lg:text-left pt-0">
                  <h1 className="text-3xl lg:text-4xl font-normal text-black leading-tight">
                    TU CLUB MERECE TROFEOS
                    <br />
                    <span className="font-bold">MEMORABLES</span>
                  </h1>

                  <div className="mb-0 mt-8">
                    <p className="text-lg text-black italic leading-relaxed">
                      Trofeos artísticos personalizados para torneos de golf, tenis, pádel, y más
                    </p>
                  </div>
                </div>

                {/* Column 4 - Image */}
                <div className="flex items-start justify-center">
                  <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src="/trofeosarte/images/trofeo-artistico-tenis-padel-premio-exclusivo.png"
                      alt="Trofeo artístico para torneo de pádel y tenis"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              {/* Icons - Desktop Only */}
              <div className="text-center mb-4">
                <img
                  src="/trofeosarte/images/iconos3.png"
                  alt="Iconos deportivos - golf, tenis, pádel para trofeos personalizados"
                  className="h-12 mx-auto"
                  loading="lazy"
                />
              </div>

              {/* Button */}
              <div className="text-center">
                <a href="#portafolio" aria-label="Ver colección completa de trofeos artísticos personalizados">
                  <Button className="bg-[#446047] hover:bg-[#446047]/90 text-white px-8 py-3 text-lg font-medium rounded-full">
                    Ver colección
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros Section - H2 */}
      <section id="nosotros" className="py-16 bg-[#f6f2e7]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-12 lg:px-20 mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/golfcielo-LKzC0v7f9qlXgCYlUlclgiIVOzuiI0.png"
                    alt="Golfista profesional con trofeo artístico personalizado - Clubes deportivos México Trofeos Arte"
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column - Text Block */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8 text-left">Sobre Nosotros</h2>
                <p className="text-lg text-black leading-relaxed mb-6 text-justify">
                  Somos una firma de diseño artístico especializada en crear trofeos extraordinarios para clubes
                  deportivos que buscan algo más que un reconocimiento: una pieza de arte que celebre la esencia y
                  grandeza de su comunidad.
                </p>
                <p className="text-lg text-black leading-relaxed text-justify">
                  Trabajamos con clubes deportivos de golf, tenis y pádel en México que valoran el detalle, la
                  exclusividad y el poder de sorprender. Nuestros trofeos personalizados no son genéricos; son íconos
                  que los miembros desean coleccionar, que elevan el estatus del torneo y que se convierten en símbolos
                  de pertenencia y orgullo.
                </p>
              </div>
            </div>
          </div>

          {/* Nuestros Clientes Subsection - H3 */}
          <div className="max-w-7xl mx-auto px-12 lg:px-20 mt-20">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              <div className="text-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">Nuestros Clientes</h3>
                <p className="text-lg text-black leading-snug mb-6 max-w-3xl mx-auto">
                  Nuestros clientes no buscan lo ordinario. Buscan marcar la diferencia. Creamos para quienes han visto
                  de todo… y aún quieren sentirse sorprendidos.
                </p>
                <div className="w-full">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cliente-Dk2hjKoA0z4vR1oawhkDvOJZDLERxj.png"
                    alt="Logos de clubes deportivos exclusivos clientes de Trofeos Arte - Golf, tenis y pádel México"
                    className="w-full max-w-5xl mx-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section - With City-Based SEO Text */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">Galería de Ganadores</h2>
            <ImageCarousel />

            {/* City-Based SEO Text Block */}
            <div className="mt-12 text-center">
              <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
                <p className="text-lg text-black leading-relaxed max-w-4xl mx-auto">
                  Trabajamos con clubes deportivos de alto nivel en México, como los ubicados en CDMX, Monterrey,
                  Querétaro, Puebla, San Luis Potosí, León, Los Cabos y Guadalajara. Nuestros trofeos personalizados
                  honran la excelencia deportiva en todo el país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section - H2 */}
      <section id="servicios" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">Nuestros Servicios</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Service boxes with proper semantic structure */}
                <article className="service-box group relative flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border-2 border-transparent transition-all duration-300 hover:border-[#446047] hover:shadow-lg overflow-hidden min-h-[140px]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 border-2 border-[#446047] rounded-lg animate-pulse"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#446047]/20 to-transparent transform -skew-x-12 animate-sweep"></div>
                  </div>
                  <div className="w-12 h-12 flex-shrink-0 relative z-10 group-hover:animate-sparkle">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trofeoicono-eCa51CFTnuuyLvBVdMVaz0rrjkaXkh.png"
                      alt="Icono de trofeo - producción masiva de trofeos personalizados"
                      className="w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative z-10 flex items-center">
                    <p className="text-lg text-black">Capacidad de producción de hasta 200 trofeos por torneo</p>
                  </div>
                </article>

                <article className="service-box group relative flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border-2 border-transparent transition-all duration-300 hover:border-[#446047] hover:shadow-lg overflow-hidden min-h-[140px]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 border-2 border-[#446047] rounded-lg animate-pulse"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#446047]/20 to-transparent transform -skew-x-12 animate-sweep"></div>
                  </div>
                  <div className="w-12 h-12 flex-shrink-0 relative z-10 group-hover:animate-sparkle">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estrella-24QLXAzcQqTq7bF7qL3E6kROIHJ3gm.png"
                      alt="Icono de estrella - trofeos insignia exclusivos para clubes"
                      className="w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative z-10 flex items-center">
                    <p className="text-lg text-black">Creación de trofeo insignia para clubes o torneos anuales</p>
                  </div>
                </article>

                <article className="service-box group relative flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border-2 border-transparent transition-all duration-300 hover:border-[#446047] hover:shadow-lg overflow-hidden min-h-[140px]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 border-2 border-[#446047] rounded-lg animate-pulse"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#446047]/20 to-transparent transform -skew-x-12 animate-sweep"></div>
                  </div>
                  <div className="w-12 h-12 flex-shrink-0 relative z-10 group-hover:animate-sparkle">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bronce-Qn2Z35CfNrpGBIgD9QcRq8j5Z9ZMaQ.png"
                      alt="Icono de bronce - materiales premium para trofeos artísticos"
                      className="w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative z-10 flex items-center">
                    <p className="text-lg text-black">
                      Imitación bronce, madera, resinas u otros materiales exclusivos
                    </p>
                  </div>
                </article>

                <article className="service-box group relative flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border-2 border-transparent transition-all duration-300 hover:border-[#446047] hover:shadow-lg overflow-hidden min-h-[140px]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 border-2 border-[#446047] rounded-lg animate-pulse"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#446047]/20 to-transparent transform -skew-x-12 animate-sweep"></div>
                  </div>
                  <div className="w-12 h-12 flex-shrink-0 relative z-10 group-hover:animate-sparkle">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tailor-OFJyH3DMKqCjSm4KrerjQL11R2JTwn.png"
                      alt="Icono de personalización - diseño completamente personalizado de trofeos"
                      className="w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative z-10 flex items-center">
                    <p className="text-lg text-black">Personalización total: forma, placa, tema y mensaje</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trofeo Insignia Section - H2 */}
      <section id="trofeo-insignia" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8">Trofeo Insignia</h2>
              <p className="text-lg text-black leading-relaxed mb-12">
                Es una pieza hecha para representar la historia del torneo, su legado y su promesa futura. Se convierte
                en una joya institucional, una declaración de identidad para el club, y una razón más para que tus
                miembros quieran volver cada año.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-[#446047]">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copa.png-RTictUeTgugJ3BcJrH2K5edw5bMzkv.jpeg"
                        alt="Copa Morelia - Trofeo insignia personalizado para torneo anual de golf México"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">Copa Morelia</h3>
                    <p className="text-gray-600">Torneo anual de golf</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-[#446047]">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tresma.png-aXfD7M82wRxWnkJK0TXKWudOFpWFVh.jpeg"
                        alt="Golf Tres Marías - Trofeo artístico para campeonato regional de golf México"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">Golf Tres Marías</h3>
                    <p className="text-gray-600">Campeonato regional</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El Proceso Section - H2 */}
      <section id="proceso" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">El Proceso</h2>
            <ProcesoAccordion />
            {/* Calendly Button */}
            <div className="mt-12 text-center">
              <Button
                onClick={handleCalendlyClick}
                className="bg-[#446047] hover:bg-[#446047]/90 text-white px-8 py-3 text-lg font-medium rounded-full"
                aria-label="Agendar llamada para consulta de trofeos personalizados"
              >
                Agendar una llamada
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portafolio Section - H2 */}
      <section id="portafolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
              Galería de Trofeos Personalizados
            </h2>

            {/* Mobile Portfolio Gallery with Main Image + Thumbnails */}
            <MobilePortfolioGallery />

            {/* Desktop Grid Gallery */}
            <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
              {[
                {
                  src: "/trofeosarte/images/53.png",
                  alt: "Trofeo artístico de mano en bronce para golf - Premio personalizado clubes deportivos México",
                },
                {
                  src: "/trofeosarte/images/54.png",
                  alt: "Trofeo familiar en piedra - Premio único para torneos familiares deportivos",
                },
                {
                  src: "/trofeosarte/images/55.png",
                  alt: "Trofeo cultural con palos de golf cruzados - Premio torneo cultural deportivo",
                },
                {
                  src: "/trofeosarte/images/56.png",
                  alt: "Trofeo de equipo en bronce para golf - Premio grupal personalizado clubes México",
                },
                {
                  src: "/trofeosarte/images/57.png",
                  alt: "Trofeo de celebración en equipo - Premio para torneos deportivos México",
                },
                {
                  src: "/trofeosarte/images/58.png",
                  alt: "Trofeos Universidad Montrer con pantera - Premios institucionales deportivos",
                },
                {
                  src: "/trofeosarte/images/59.png",
                  alt: "Figura de victoria dinámica en bronce - Trofeo deportivo artístico México",
                },
                {
                  src: "/trofeosarte/images/60.png",
                  alt: "Trofeo de palos de golf cruzados - Premio clásico para golf clubes deportivos",
                },
                {
                  src: "/trofeosarte/images/61.png",
                  alt: "Trofeo geométrico de raquetas de pádel - Premio moderno pádel México",
                },
                {
                  src: "/trofeosarte/images/62.png",
                  alt: "Trofeo de raquetas de pádel cruzadas - Premio tradicional pádel deportivo",
                },
                {
                  src: "/trofeosarte/images/67.png",
                  alt: "Trofeos de podio en bronce para golf - Premios 1er, 2do y 3er lugar torneos",
                },
                {
                  src: "/trofeosarte/images/63.png",
                  alt: "Trofeo moderno de ciclismo - Escultura artística para ciclismo deportivo México",
                },
                {
                  src: "/trofeosarte/images/64.png",
                  alt: "Figura dinámica corriendo en bronce - Trofeo para atletismo deportivo",
                },
                {
                  src: "/trofeosarte/images/65.png",
                  alt: "Trofeo de celebración de victoria en tenis - Premio artístico tenis México",
                },
                {
                  src: "/trofeosarte/images/66.png",
                  alt: "Jugador de tenis en acción - Trofeo dinámico para tenis clubes deportivos",
                },
              ].map((trophy, index) => (
                <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden portfolio-image">
                  <img
                    src={trophy.src || "/trofeosarte/placeholder.svg"}
                    alt={trophy.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Más Arte Section - H2 */}
      <section id="mas-arte" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">Más Arte</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Athletic Grace",
                  size: "50 x 70 cm",
                  description: "Una representación dinámica del movimiento atlético en colores vibrantes",
                  image: "/trofeosarte/images/20.png",
                  alt: "Pintura al óleo Athletic Grace - Arte deportivo con espátula 50x70cm México",
                },
                {
                  title: "Pelican's Serenity",
                  size: "45 x 60 cm",
                  description: "La elegancia natural capturada en expresivos trazos de espátula",
                  image: "/trofeosarte/images/21.png",
                  alt: "Pintura al óleo Pelican's Serenity - Arte con espátula 45x60cm México",
                },
                {
                  title: "Golf Passion",
                  size: "55 x 75 cm",
                  description: "La energía y concentración del swing perfecto en colores intensos",
                  image: "/trofeosarte/images/22.png",
                  alt: "Pintura al óleo Golf Passion - Arte deportivo golf con espátula 55x75cm México",
                },
              ].map((artwork, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={artwork.image || "/trofeosarte/placeholder.svg"}
                        alt={artwork.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{artwork.title}</h3>
                    <p className="text-[#446047] font-medium mb-1">{artwork.size}</p>
                    <p className="text-gray-600 text-sm mb-3">Óleo sobre lienzo</p>
                    <p className="text-black text-sm italic">{artwork.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-black leading-relaxed max-w-4xl mx-auto mb-8">
                También realizamos pinturas al óleo con espátula de temática deportiva, personalizadas como premios
                únicos para torneos, exhibiciones o rifas en clubes deportivos de México.
              </p>
              <Button
                onClick={() => window.open("https://rolandomacouzet.com", "_blank")}
                className="bg-[#446047] hover:bg-[#446047]/90 text-white px-8 py-3 text-lg font-medium rounded-full"
                aria-label="Conocer más sobre el artista - Visitar portafolio personal"
              >
                Conoce al artista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section - H2 */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">Contáctanos</h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contacto directo */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6">Escríbenos directo</h3>
                <div className="space-y-4">
                  <a
                    href={`https://wa.me/5214433735374?text=${encodeURIComponent("Hola, me interesa un trofeo personalizado para mi club o torneo")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 border border-gray-300 rounded-lg hover:border-[#446047] hover:bg-[#446047]/5 transition-colors"
                    aria-label="Escribir por WhatsApp para trofeos personalizados"
                  >
                    <svg viewBox="0 0 24 24" className="w-10 h-10 shrink-0" fill="#25D366" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <div>
                      <p className="font-bold text-black">WhatsApp</p>
                      <p className="text-black">+52 443 373 5374</p>
                      <p className="text-sm text-gray-600">La forma más rápida de recibir respuesta</p>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full text-left flex items-center gap-4 p-6 border border-gray-300 rounded-lg hover:border-[#446047] hover:bg-[#446047]/5 transition-colors cursor-copy"
                    aria-label="Copiar dirección de correo para trofeos personalizados"
                  >
                    <svg viewBox="0 0 24 24" className="w-10 h-10 shrink-0" fill="none" stroke="#446047" strokeWidth="1.5" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 10 6 10-6" />
                    </svg>
                    <div>
                      <p className="font-bold text-black">Correo</p>
                      <p className="text-black">contacto@rolandomacouzet.com</p>
                      {emailCopied ? (
                        <p className="text-sm font-medium text-[#446047]" role="status">
                          ¡Copiado! ✓
                        </p>
                      ) : (
                        <p className="text-sm text-gray-600">Clic para copiar la dirección</p>
                      )}
                    </div>
                  </button>
                </div>
              </div>

              {/* Banner with Right-aligned Content */}
              <div className="bg-gray-50 rounded-lg p-8 flex flex-col justify-center">
                <div className="text-right">
                  <p className="text-lg text-black leading-relaxed mb-8">
                    Agenda una llamada con nosotros y diseñemos juntos una pieza que eleve el prestigio de tu club
                    deportivo.
                  </p>
                  <p className="text-lg text-black mb-8">
                    <strong>Ubicación:</strong> Morelia, Michoacán, México
                  </p>
                  <div className="inline-block text-left">
                    <Button
                      onClick={handleCalendlyClick}
                      className="bg-[#446047] hover:bg-[#446047]/90 text-white py-3 px-8"
                      aria-label="Agendar llamada para consulta personalizada de trofeos"
                    >
                      Agenda una llamada
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#446047] text-white" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Image
                  src="/trofeosarte/images/logotrofeosarte.png"
                  alt="Logo de Trofeos Arte - trofeos personalizados en México"
                  width={200}
                  height={80}
                  className="h-12 w-auto mb-4 filter invert"
                  loading="lazy"
                />
                <p className="text-gray-200">Arte que honra la grandeza</p>
              </div>
              <nav className="footer-nav" aria-label="Enlaces del pie de página">
                <h4 className="font-bold mb-4">Navegación</h4>
                <ul className="space-y-2 text-gray-200">
                  <li>
                    <a
                      href="#nosotros"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      Nosotros
                    </a>
                  </li>
                  <li>
                    <a
                      href="#servicios"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portafolio"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById("portafolio")?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      Portafolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mas-arte"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById("mas-arte")?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      Más Arte
                    </a>
                  </li>
                  <li>
                    <a href="/trofeosarte/faq" className="hover:text-white transition-colors cursor-pointer">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </nav>
              <div>
                <h4 className="font-bold mb-4">Contacto</h4>
                <p className="text-gray-200">
                  <strong>Email:</strong> contacto@rolandomacouzet.com
                </p>
              </div>
            </div>
            <div className="border-t border-green-400 mt-8 pt-8 text-center text-gray-200">
              <p>&copy; 2025 Trofeos Arte. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Bubble */}
      <WhatsAppBubble />
    </div>
  )
}
