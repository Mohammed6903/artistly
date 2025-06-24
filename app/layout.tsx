import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/context/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AuthProvider } from "@/context/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Artistly - Discover Amazing Artists",
  description: "Your gateway to talent from singers to speakers. Find the perfect performer for your next event.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
