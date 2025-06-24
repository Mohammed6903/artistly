import { Hero } from "@/components/common/hero"
import { Categories } from "@/components/common/categories"
import { CallToAction } from "@/components/common/call-to-action"
import { FeaturedArtists } from "@/components/common/featured-artists"

export default function HomePage() {

  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedArtists />
      <Categories />
      <CallToAction />
    </div>
  )
}
