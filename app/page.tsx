"use client"

import { Hero } from "@/components/common/hero"
import { Categories } from "@/components/common/categories"
import { CallToAction } from "@/components/common/call-to-action"

export default function HomePage() {

  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <CallToAction />
    </div>
  )
}
