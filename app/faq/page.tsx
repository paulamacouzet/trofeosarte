"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import WhatsAppBubble from "@/components/whatsapp-bubble"
import MobileMenu from "@/components/mobile-menu"
import { faqData } from "./faq-data"


export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
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
