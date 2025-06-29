import Image from "next/image"
import { Star } from "lucide-react"
import type { Artist } from "@/types/artist"
import { getArtists } from "@/services/artistService";

export async function FeaturedArtists() {
  const data: Artist[] = await getArtists({ revalidate: 86400 });

  const topArtists = data
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4)

  return (
    <div className="py-12 pb-24 bg-secondary text-secondary-foreground">
      <div className="md:container md:mx-auto px-4 sm:px-0">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">🌟 Featured Artists</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-4">
          {topArtists.map(artist => (
            <div
              key={artist.id}
              className="bg-card border border-border rounded-lg p-4 shadow-sm flex flex-col items-center text-center"
            >
              <Image
                src={artist.avatar}
                alt={artist.name}
                width={100}
                height={100}
                className="rounded-full mb-3"
              />
              <h2 className="font-semibold text-lg text-foreground">{artist.name}</h2>
              <p className="text-sm text-muted-foreground mb-2">{artist.category}</p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(artist.rating) ? "text-yellow-400" : "text-border"
                      }`}
                    fill={i < Math.round(artist.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
