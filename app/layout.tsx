import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "told.io - Settle Debates with Facts and Community Wisdom",
  description:
    "The definitive platform for resolving debates. Present your case, gather evidence, and let the community decide who's right and who's wrong.",
  keywords: "debates, discussion, community, facts, evidence, resolution, voting, arguments",
  authors: [{ name: "told.io" }],
  creator: "told.io",
  publisher: "told.io",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://told.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "told.io - Settle Debates with Facts and Community Wisdom",
    description:
      "The definitive platform for resolving debates. Present your case, gather evidence, and let the community decide.",
    url: "https://told.io",
    siteName: "told.io",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "told.io - Debate Resolution Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "told.io - Settle Debates with Facts and Community Wisdom",
    description:
      "The definitive platform for resolving debates. Present your case, gather evidence, and let the community decide.",
    images: ["/og-image.png"],
    creator: "@toldio",
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#2563eb" }],
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
