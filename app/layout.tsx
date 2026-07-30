import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

// ID de medición de Google Analytics 4 (propiedad "Trofeos Arte" bajo contacto@rolandomacouzet.com).
// Es un identificador público (viaja en el HTML); la variable de entorno permite anularlo sin tocar código.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-76325WXNRJ"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://rolandomacouzet.com"),
  title: "Trofeos Personalizados para Clubes de Golf y Pádel en México | Trofeos Arte",
  description:
    "Diseñamos trofeos artísticos únicos para clubes de golf, pádel y tenis en México. Fabricados a mano por el artista Rolando Macouzet. Envíos a todo el país.",
  keywords:
    "trofeos personalizados, trofeos de golf, trofeos de pádel, trofeos de tenis, trofeos artísticos, trofeos para torneos de golf, clubes deportivos México, arte deportivo, esculturas personalizadas",
  authors: [{ name: "Trofeos Arte - Rolando Macouzet" }],
  openGraph: {
    title: "Trofeos Arte - Arte que honra la grandeza",
    description: "Trofeos artísticos personalizados para clubes y torneos deportivos en México.",
    images: [
      {
        url: "/trofeosarte/images/trofeo-artistico-torneo-golf-escultura-bronce-mano-pelota.png",
        width: 1200,
        height: 630,
        alt: "Trofeo artístico de golf en bronce para clubes deportivos en México",
      },
    ],
    locale: "es_MX",
    type: "website",
    siteName: "Trofeos Arte",
    url: "https://rolandomacouzet.com/trofeosarte",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trofeos Arte - Arte que honra la grandeza",
    description: "Trofeos artísticos personalizados para clubes y torneos deportivos en México.",
    images: ["/trofeosarte/images/trofeo-artistico-torneo-golf-escultura-bronce-mano-pelota.png"],
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
    canonical: "https://rolandomacouzet.com/trofeosarte",
  },
  icons: {
    icon: "/trofeosarte/favicon.png",
    shortcut: "/trofeosarte/favicon.png",
    apple: "/trofeosarte/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX">
      <head>
        <meta name="geo.region" content="MX-MIC" />
        <meta name="geo.placename" content="Morelia, Michoacán, México" />
        <meta name="geo.position" content="19.7006;-101.1844" />
        <meta name="ICBM" content="19.7006, -101.1844" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Trofeos Arte",
              description: "Trofeos artísticos exclusivos para clubes deportivos y torneos en México",
              url: "https://rolandomacouzet.com/trofeosarte",
              image: "https://rolandomacouzet.com/trofeosarte/images/trofeo-artistico-torneo-golf-escultura-bronce-mano-pelota.png",
              telephone: "+52-443-373-5374",
              email: "contacto@rolandomacouzet.com",
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
              sameAs: ["https://rolandomacouzet.com"],
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
      <body className={inter.className}>
        {children}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
