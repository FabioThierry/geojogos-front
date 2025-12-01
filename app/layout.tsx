import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: {
    default: "GeoJogos - Educational Games for Geography",
    template: "%s | GeoJogos",
  },
  description:
    "We create customized digital and analog games to transform Geography education in schools. Educational game studio specializing in custom game development for teachers and institutions.",
  keywords: [
    "educational games",
    "geography education",
    "board games",
    "digital games",
    "custom games",
    "schools",
    "teachers",
  ],
  authors: [{ name: "GeoJogos" }],
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GeoJogos",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#2d7a3a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
