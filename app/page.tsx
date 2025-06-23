"use client"

import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function HomePage() {

  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <CallToAction />
      <Footer />
    </div>
  )
}
