"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import type { Artist } from "@/types/artist"

interface ArtistCardProps {
  artist: Artist
  viewMode: "grid" | "list"
}

export function ArtistCard({ artist, viewMode }: ArtistCardProps) {
  const formatPriceRange = (min: number, max: number) => {
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`
  }

  if (viewMode === "list") {
    return (
      <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
        <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Artist Image */}
              <div className="w-full md:w-32 h-48 md:h-32 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="text-4xl">{artist.avatar}</div>
              </div>

              {/* Artist Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-card-foreground">{artist.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">{artist.rating}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                        {artist.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{artist.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-2">{artist.description}</p>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Price Range</p>
                        <p className="font-semibold text-card-foreground">
                          {formatPriceRange(artist.priceRange.min, artist.priceRange.max)}
                        </p>
                      </div>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Ask for Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 h-full">
        <CardContent className="p-6">
          {/* Artist Image */}
          <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center mb-4">
            <div className="text-6xl">{artist.avatar}</div>
          </div>

          {/* Artist Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-card-foreground truncate">{artist.name}</h3>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-muted-foreground">{artist.rating}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                {artist.category}
              </Badge>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{artist.location}</span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm line-clamp-3">{artist.description}</p>

            <div className="pt-2">
              <p className="text-sm text-muted-foreground">Price Range</p>
              <p className="font-semibold text-card-foreground">
                {formatPriceRange(artist.priceRange.min, artist.priceRange.max)}
              </p>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <MessageCircle className="w-4 h-4 mr-2" />
              Ask for Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
