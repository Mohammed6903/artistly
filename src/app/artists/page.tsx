import ArtistsPageClient from "./client-page";
import { getArtists } from "@/services/artistService";
import { BASE_URL } from "@/lib/config";

export const metadata = {
  title: "Find Talented Artists | Artistly",
  description: "Browse and book from a curated collection of talented artists, musicians, speakers, and more.",
  keywords: ["artists", "performers", "musicians", "speakers", "dancers", "DJs", "find artists"],
  openGraph: {
    title: "Find Talented Artists | Artistly",
    description: "Discover and book artists for your next event. Browse categories, locations, and price ranges.",
    url: `${BASE_URL}/artists`,
    siteName: "Artistly",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Talented Artists | Artistly",
    description: "Browse and book from a curated collection of talented artists, musicians, speakers, and more.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default async function ArtistsPageWrapper() {
  const artists = await getArtists();
  return <ArtistsPageClient artists={artists} />;
}