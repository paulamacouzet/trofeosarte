"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import WhatsAppBubble from "@/components/whatsapp-bubble"
import MobileMenu from "@/components/mobile-menu"

const faqData = [
  {
    question: "¿Hacen envíos a toda la República Mexicana?",
    answer:
      "Sí, enviamos nuestros trofeos personalizados a cualquier ciudad de México. El envío tiene costo extra que será agregado a la cotización.",
  },
  {
    question: "¿Qué tipo de clubes contratan sus servicios?",
    answer:
      "Trabajamos con clubes deportivos de golf, pádel y tenis de alto nivel en México, incluyendo CDMX, San Miguel de Allende, Querétaro, Cancún, Los Cabos, Monterrey, Guadalajara, entre otros.",
  },
  {
    question: "¿Cuál es el tiempo de producción de un trofeo?",
    answer:
      "Depende del diseño y la cantidad. En promedio, el proceso completo (diseño, aprobación, producción y entrega) toma de 3 a 4 meses.",
  },
  {
    question: "¿Hay pedido mínimo de trofeos?",
    answer:
      "No. Podemos realizar desde una sola pieza. Sin embargo, el costo unitario disminuye con mayores cantidades. Fabricamos hasta 200 piezas para un solo torneo.",
  },
  {
    question: "¿Puede ser personalizado?",
    answer:
      "Sí. Todos los trofeos son personalizados. Durante la llamada creativa, nos compartirás la visión y valores de tu club para crear un diseño único y representativo.",
  },
  {
    question: "¿El envío está incluido?",
    answer: "No. El envío se cotiza por separado, según el peso, volumen y destino final del pedido.",
  },
  {
    question: "¿Puedo solicitar un diseño urgente?",
    answer:
      "En casos especiales, ofrecemos entregas en tiempos más cortos con costos adicionales. Especifica tu urgencia al agendar tu llamada para revisar viabilidad.",
  },
  {
    question: "¿Se pueden hacer trofeos de disciplinas diferentes al golf, pádel o tenis?",
    answer:
      "Sí. Podemos desarrollar trofeos artísticos para cualquier disciplina deportiva o temática especial. También realizamos esculturas conmemorativas o piezas únicas como premios simbólicos.",
  },
  {
    question: "¿Puedo pedir una pintura en lugar de un trofeo?",
    answer:
      "Sí. También ofrecemos piezas únicas como pinturas al óleo con temática deportiva que pueden ser utilizadas como premios especiales para exhibiciones o rifas.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <head>
        <title>Preguntas Frecuentes | Trofeos Arte - Trofeos personalizados</title>
        <meta
          name="description"
          content="Resuelve tus dudas sobre diseño, envíos y producción de trofeos artísticos para tu club o torneo en México."
        />
        <meta
          name="keywords"
          content="preguntas frecuentes trofeos, FAQ trofeos personalizados, dudas trofeos artísticos México, información clubes deportivos, envíos trofeos México"
        />
        <link rel="canonical" href="https://trofeosarte.com/faq" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Preguntas Frecuentes | Trofeos Arte - Trofeos personalizados" />
        <meta
          property="og:description"
          content="Resuelve tus dudas sobre diseño, envíos y producción de trofeos artísticos para tu club o torneo en México."
        />
        <meta property="og:url" content="https://trofeosarte.com/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_MX" />
      </head>

      <div className="min-h-screen bg-[#f6f2e7]">
        {/* Header */}
        <header className="sticky top-0 bg-[#f6f2e7] z-50 border-b border-gray-200">
          <div className="w-full max-w-7xl mx-auto px-4 py-2">
            <nav className="flex items-center">
              {/* Logo - Fixed Left */}
              <div className="flex-shrink-0">
                <a href="/trofeosarte" className="cursor-pointer">
                  <Image
                    src="/trofeosarte/images/logotrofeosarte.png"
                    alt="Logo de Trofeos Arte - trofeos personalizados en México"
                    width={300}
                    height={120}
                    className="h-16 w-auto"
                  />
                </a>
              </div>

              {/* Centered Navigation Menu - Desktop */}
              <div className="flex-1 flex justify-center px-8">
                <ul className="hidden md:flex items-center space-x-8 text-black">
                  <li>
                    <a
                      href="/trofeosarte/#nosotros"
                      className="hover:text-[#446047] transition-colors font-normal whitespace-nowrap"
                    >
                      Nosotros
                    </a>
                  </li>
                  <li>
                    <a
                      href="/trofeosarte/#servicios"
                      className="hover:text-[#446047] transition-colors font-normal whitespace-nowrap"
                    >
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a
                      href="/trofeosarte/#portafolio"
                      className="hover:text-[#446047] transition-colors font-normal whitespace-nowrap"
                    >
                      Portafolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/trofeosarte/#mas-arte"
                      className="hover:text-[#446047] transition-colors font-normal whitespace-nowrap"
                    >
                      Más Arte
                    </a>
                  </li>
                  <li>
                    <a href="/trofeosarte/faq" className="hover:text-[#446047] transition-colors font-bold whitespace-nowrap">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="/trofeosarte/#contact"
                      className="hover:text-[#446047] transition-colors font-normal whitespace-nowrap"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>

              {/* Mobile Menu Component - Fixed Right */}
              <div className="flex-shrink-0">
                <MobileMenu activeSection="faq" />
              </div>
            </nav>
          </div>
        </header>

        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
                Preguntas Frecuentes sobre Trofeos Personalizados
              </h1>

              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <Card
                    key={index}
                    className="border border-gray-200 hover:border-[#446047] transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-bold text-black pr-4">{faq.question}</h3>
                        <div className="flex-shrink-0">
                          <svg
                            className={`w-5 h-5 text-[#446047] transition-transform duration-200 ${
                              openIndex === index ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      {openIndex === index && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-12 text-center">
                <p className="text-lg text-black mb-6">¿Tienes más preguntas sobre nuestros trofeos personalizados?</p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                  <Button
                    onClick={() => window.open("https://calendly.com/rmartistaplastico", "_blank")}
                    className="bg-[#446047] hover:bg-[#446047]/90 text-white px-8 py-3 text-lg font-medium rounded-full"
                  >
                    Agendar una llamada
                  </Button>
                  <Button
                    onClick={() => (window.location.href = "/#contact")}
                    variant="outline"
                    className="border-[#446047] text-[#446047] hover:bg-[#446047] hover:text-white px-8 py-3 text-lg font-medium rounded-full"
                  >
                    Enviar mensaje
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-[#446047] text-white">
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
                  />
                  <p className="text-gray-200">Arte que honra la grandeza</p>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Navegación</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      <a href="/trofeosarte/#nosotros" className="hover:text-white transition-colors">
                        Nosotros
                      </a>
                    </li>
                    <li>
                      <a href="/trofeosarte/#servicios" className="hover:text-white transition-colors">
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a href="/trofeosarte/#portafolio" className="hover:text-white transition-colors">
                        Portafolio
                      </a>
                    </li>
                    <li>
                      <a href="/trofeosarte/#mas-arte" className="hover:text-white transition-colors">
                        Más Arte
                      </a>
                    </li>
                    <li>
                      <a href="/trofeosarte/faq" className="hover:text-white transition-colors">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/trofeosarte/#contact" className="hover:text-white transition-colors">
                        Contacto
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Contacto</h4>
                  <p className="text-gray-200">
                    <strong>Email:</strong> rmartistaplastico@gmail.com
                  </p>
                </div>
              </div>
              <div className="border-t border-green-400 mt-8 pt-8 text-center text-gray-200">
                <p>&copy; 2025 Trofeos Arte. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </footer>

        <WhatsAppBubble />
      </div>
    </>
  )
}
