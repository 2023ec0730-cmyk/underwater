import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Quicksand } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-heading",
})
export const metadata: Metadata = {
  title: "URL | UnderWater Research Lab",
  description:
    "UnderWater Research Lab (URL) at NITTTR. Specialized in underwater signal processing and ocean data collection.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
