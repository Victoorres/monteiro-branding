import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"

export const metadata: Metadata = {
  title: "MONTEIRO BRANDING - Criamos marcas que impactam",
  description: "Estratégia, design e identidade visual para empresas que querem se destacar no mercado",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Monteiro Branding</title>
        <meta
          name="description"
          content="Somos um estúdio especialista em Identidade Visual e Branding para negócios com autenticidade."
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}


import './globals.css'