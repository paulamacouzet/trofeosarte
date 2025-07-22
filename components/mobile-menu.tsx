"use client"

import { useState } from "react"
import { X, Menu } from "lucide-react"

interface MobileMenuProps {
  activeSection: string
}

export default function MobileMenu({ activeSection }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleNavClick = (sectionId: string) => {
    closeMenu()
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const menuItems = [
    { id: "nosotros", label: "Nosotros", href: "#nosotros" },
    { id: "servicios", label: "Servicios", href: "#servicios" },
    { id: "portafolio", label: "Portafolio", href: "#portafolio" },
    { id: "mas-arte", label: "Más Arte", href: "#mas-arte" },
    { id: "faq", label: "FAQ", href: "/faq", external: true },
    { id: "contact", label: "Contacto", href: "#contact" },
  ]

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-black p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú de navegación"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu} aria-hidden="true" />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-black">Menú</h2>
          <button
            onClick={closeMenu}
            className="text-gray-500 hover:text-black p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="py-6" role="navigation" aria-label="Menú de navegación móvil">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                {item.external ? (
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-6 py-4 text-lg font-medium transition-colors hover:bg-gray-50 hover:text-[#446047] ${
                      item.id === "faq" ? "text-[#446047] bg-gray-50" : "text-black"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-6 py-4 text-lg font-medium transition-colors hover:bg-gray-50 hover:text-[#446047] ${
                      activeSection === item.id ? "text-[#446047] bg-gray-50 font-bold" : "text-black"
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-600 text-center">
            <strong>Email:</strong> rmartistaplastico@gmail.com
          </p>
        </div>
      </div>
    </>
  )
}
