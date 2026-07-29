import type React from "react"
import type { Metadata } from "next"
import { faqData } from "./faq-data"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Trofeos Arte - Trofeos personalizados",
  description:
    "Resuelve tus dudas sobre diseño, envíos y producción de trofeos artísticos para tu club o torneo en México.",
  keywords:
    "preguntas frecuentes trofeos, FAQ trofeos personalizados, dudas trofeos artísticos México, información clubes deportivos, envíos trofeos México",
  alternates: {
    canonical: "https://rolandomacouzet.com/trofeosarte/faq",
  },
  openGraph: {
    title: "Preguntas Frecuentes | Trofeos Arte - Trofeos personalizados",
    description:
      "Resuelve tus dudas sobre diseño, envíos y producción de trofeos artísticos para tu club o torneo en México.",
    url: "https://rolandomacouzet.com/trofeosarte/faq",
    type: "website",
    locale: "es_MX",
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      {children}
    </>
  )
}
