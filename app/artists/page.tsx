import ArtistsPageClient from "./client-page"

export default async function ArtistsPageWrapper() {
  const res = await fetch("https://685a52ac9f6ef9611155e080.mockapi.io/artists", {
    next: { revalidate: 60 },
  })

  if (!res.ok) throw new Error("Failed to fetch artists")

  const artists = await res.json()

  return <ArtistsPageClient artists={artists} />
}
