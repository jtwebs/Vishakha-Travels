import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Force Traveller Rental Solapur | Tempo Traveller Rent | Solapur Travels",
  description:
    "Book Force Traveller from Solapur for comfortable travel across India. 17-seater AC bus with experienced driver. Shirdi, Goa, Pune, Hyderabad trips. Call +91 98765 43210",
  keywords:
    "tempo traveller rent solapur, force traveller rental solapur, solapur to shirdi taxi, solapur to goa bus rental, maharashtra tour bus, solapur travels, 17 seater bus rental",
  authors: [{ name: "Prashant Patil - Solapur Travels" }],
  openGraph: {
    title: "Force Traveller Rental Solapur - Comfortable Travel Across India",
    description:
      "Premium Force Traveller rental service from Solapur. AC bus, experienced driver, All-India permit. Book now for Shirdi, Goa, Pune trips.",
    type: "website",
    locale: "en_IN",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
