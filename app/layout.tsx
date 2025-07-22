import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trofeos Personalizados para Clubes en México | Trofeos Arte",
  description:
    "Diseñamos trofeos artísticos únicos para clubes de golf, pádel y tenis en México. Fabricados a mano por el artista Rolando Macouzet. Envíos a todo el país.",
  keywords:
    "trofeos personalizados, trofeos de golf, trofeos de pádel, trofeos de tenis, trofeos artísticos, clubes deportivos México, arte deportivo, esculturas personalizadas",
  authors: [{ name: "Trofeos Arte - Rolando Macouzet" }],
  openGraph: {
    title: "Trofeos Arte - Arte que honra la grandeza",
    description: "Trofeos artísticos personalizados para clubes y torneos deportivos en México.",
    images: [
      {
        url: "/images/trofeo-artistico-torneo-golf-escultura-bronce-mano-pelota.png",
        width: 1200,
        height: 630,
        alt: "Trofeo artístico de golf en bronce para clubes deportivos en México",
      },
    ],
    locale: "es_MX",
    type: "website",
    siteName: "Trofeos Arte",
    url: "https://trofeosarte.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trofeos Arte - Arte que honra la grandeza",
    description: "Trofeos artísticos personalizados para clubes y torneos deportivos en México.",
    images: ["/images/trofeo-artistico-torneo-golf-escultura-bronce-mano-pelota.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://trofeosarte.com",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "tu-codigo-verificacion-google-aqui",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Diseñamos trofeos artísticos únicos para clubes de golf, pádel y tenis en México. Fabricados a mano por el artista Rolando Macouzet. Envíos a todo el país."
        />
        <meta
          name="keywords"
          content="trofeos personalizados, trofeos de golf, trofeos de pádel, trofeos de tenis, trofeos artísticos, clubes deportivos México, arte deportivo, esculturas personalizadas"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Trofeos Arte - Rolando Macouzet" />
        <meta name="geo.region" content="MX" />
        <meta name="geo.placename" content="México" />
        <meta name="geo.position" content="19.7006;-101.1844" />
        <meta name="ICBM" content="19.7006, -101.1844" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Trofeos Arte - Arte que honra la grandeza" />
        <meta
          property="og:description"
          content="Trofeos artísticos personalizados para clubes y torneos deportivos en México."
        />
        <meta
          property="og:image"
          content="https://trofeosarte.com/images/trofeo-artistico-torneo-golf-escultura-bronce-mano-pelota.png"
        />
        <meta property="og:url" content="https://trofeosarte.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Trofeos Arte" />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trofeos Arte - Arte que honra la grandeza" />
        <meta
          name="twitter:description"
          content="Trofeos artísticos personalizados para clubes y torneos deportivos en México."
        />
        <meta
          name="twitter:image"
          content="https://trofeosarte.com/images/trofeo-artistico-torneo-golf-escultura-bronce-mano-pelota.png"
        />

        <link rel="canonical" href="https://trofeosarte.com" />
        <link rel="icon" href="/favicon.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Trofeos Arte",
              description: "Trofeos artísticos exclusivos para clubes deportivos y torneos en México",
              url: "https://trofeosarte.com",
              telephone: "+52-443-123-4567",
              email: "rmartistaplastico@gmail.com",
              founder: {
                "@type": "Person",
                name: "Rolando Macouzet",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Morelia",
                addressRegion: "Michoacán",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "19.7006",
                longitude: "-101.1844",
              },
              areaServed: [
                "México",
                "Ciudad de México",
                "Monterrey",
                "Guadalajara",
                "Querétaro",
                "Los Cabos",
                "Cancún",
                "San Miguel de Allende",
                "Puebla",
                "León",
              ],
              serviceType: "Trofeos artísticos personalizados y esculturas deportivas",
              priceRange: "$$",
              sameAs: ["https://rmacouzet.art/home"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Trofeos",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Trofeos Personalizados de Golf",
                      description: "Trofeos artísticos hechos a mano para torneos de golf",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Premios de Tenis y Pádel",
                      description: "Esculturas premium para competencias de tenis y pádel",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
