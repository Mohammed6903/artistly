import ArtistsPageClient from "./client-page"

export const metadata = {
  title: "Find Talented Artists | Artistly",
  description: "Browse and book from a curated collection of talented artists, musicians, speakers, and more.",
  keywords: ["artists", "performers", "musicians", "speakers", "dancers", "DJs", "find artists"],
  openGraph: {
    title: "Find Talented Artists | Artistly",
    description: "Discover and book artists for your next event. Browse categories, locations, and price ranges.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/artists`,
    siteName: "Artistly",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Talented Artists | Artistly",
    description: "Browse and book from a curated collection of talented artists, musicians, speakers, and more.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default async function ArtistsPageWrapper() {
  const res = await fetch("https://685a52ac9f6ef9611155e080.mockapi.io/artists", {
    next: { revalidate: 60 },
  })

  if (!res.ok) throw new Error("Failed to fetch artists")

  const artists = await res.json()

  return <ArtistsPageClient artists={artists} />
}
