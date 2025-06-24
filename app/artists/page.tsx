"use client"

import { useState, useMemo, useEffect } from "react"
import { ArtistCard } from "@/components/artist/artist-card"
import { FilterBlock } from "@/components/form/filter-block"
import { Button } from "@/components/ui/button"
import { Grid, List, Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import type { FilterOptions, Artist } from "@/types/artist"

export default function ArtistsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [artists, setArtists] = useState<Artist[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({
    category: "all",
    location: "all",
    priceRange: "all",
  })

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await fetch("https://685a52ac9f6ef9611155e080.mockapi.io/artists");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        setArtists(json);
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    }

    fetchArtists();
  }, [])

  const filteredArtists = useMemo(() => {
    if (artists) {
      return artists.filter((artist: Artist) => {
        const matchesSearch =
          artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.location.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesCategory = filters.category === "all" || artist.category === filters.category
        const matchesLocation = filters.location === "all" || artist.location === filters.location

        let matchesPriceRange = true
        if (filters.priceRange !== "all") {
          const price = artist.priceRange.min
          switch (filters.priceRange) {
            case "budget":
              matchesPriceRange = price < 500
              break
            case "mid":
              matchesPriceRange = price >= 500 && price < 1500
              break
            case "premium":
              matchesPriceRange = price >= 1500
              break
          }
        }

        return matchesSearch && matchesCategory && matchesLocation && matchesPriceRange
      })
    }
  }, [searchTerm, filters, artists])

  const handleFilterChange = (filterType: keyof FilterOptions, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const clearFilters = () => {
    setFilters({
      category: "all",
      location: "all",
      priceRange: "all",
    })
    setSearchTerm("")
  }

  const hasActiveFilters = filters.category !== "all" || filters.location !== "all" || filters.priceRange !== "all" || searchTerm

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground px-2">
              Find Your Perfect Artist
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Browse through our curated collection of talented artists and performers
            </p>
          </motion.div>

          {/* Search and View Controls */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Search Input */}
            <div className="relative w-fit sm:w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search artists, categories, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full bg-card border-border text-sm sm:text-base h-10 sm:h-11"
              />
            </div>

            {/* Controls */}
            <div className="flex sm:pl-12 flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                onClick={() => setShowMobileFilters(true)}
                className="flex lg:hidden items-center gap-2 h-10 sm:h-11 px-3 sm:px-4"
              >
                <Filter className="w-4 h-4" />
                <span className="text-sm">Filters</span>
                {hasActiveFilters && (
                  <span className="bg-primary text-primary-foreground rounded-full w-2 h-2" />
                )}
              </Button>

              <div className="hidden md:flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="h-10 w-10 sm:h-11 sm:w-11"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="h-10 w-10 sm:h-11 sm:w-11"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Desktop Filters Sidebar */}
            <motion.aside
              className="hidden lg:block lg:w-72 xl:w-80 flex-shrink-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-card border border-border rounded-lg p-6 sticky top-28">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-card-foreground">Filters</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Clear All
                  </Button>
                </div>

                <FilterBlock
                  title="Category"
                  options={[
                    { value: "all", label: "All Categories" },
                    { value: "Singer", label: "Singers" },
                    { value: "Dancer", label: "Dancers" },
                    { value: "Speaker", label: "Speakers" },
                    { value: "DJ", label: "DJs" },
                    { value: "Musician", label: "Musicians" },
                  ]}
                  value={filters.category}
                  onChange={(value) => handleFilterChange("category", value)}
                />

                <FilterBlock
                  title="Location"
                  options={[
                    { value: "all", label: "All Locations" },
                    { value: "New York", label: "New York" },
                    { value: "Los Angeles", label: "Los Angeles" },
                    { value: "Chicago", label: "Chicago" },
                    { value: "Miami", label: "Miami" },
                    { value: "Nashville", label: "Nashville" },
                    { value: "Austin", label: "Austin" },
                  ]}
                  value={filters.location}
                  onChange={(value) => handleFilterChange("location", value)}
                />

                <FilterBlock
                  title="Price Range"
                  options={[
                    { value: "all", label: "All Prices" },
                    { value: "budget", label: "Budget (Under $500)" },
                    { value: "mid", label: "Mid-range ($500 - $1,500)" },
                    { value: "premium", label: "Premium ($1,500+)" },
                  ]}
                  value={filters.priceRange}
                  onChange={(value) => handleFilterChange("priceRange", value)}
                />
              </div>
            </motion.aside>

            {/* Mobile Filters Modal */}
            <AnimatePresence>
              {showMobileFilters && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowMobileFilters(false)}
                  />

                  {/* Modal */}
                  <motion.div
                    className="fixed inset-x-4 top-4 bottom-4 sm:inset-x-8 sm:top-8 sm:bottom-8 bg-card border border-border rounded-lg z-50 lg:hidden overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  >
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
                        <h2 className="text-lg font-semibold text-card-foreground">Filters</h2>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={clearFilters}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            Clear All
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setShowMobileFilters(false)}
                            className="h-8 w-8"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                        <FilterBlock
                          title="Category"
                          options={[
                            { value: "all", label: "All Categories" },
                            { value: "Singer", label: "Singers" },
                            { value: "Dancer", label: "Dancers" },
                            { value: "Speaker", label: "Speakers" },
                            { value: "DJ", label: "DJs" },
                            { value: "Musician", label: "Musicians" },
                          ]}
                          value={filters.category}
                          onChange={(value) => handleFilterChange("category", value)}
                        />

                        <FilterBlock
                          title="Location"
                          options={[
                            { value: "all", label: "All Locations" },
                            { value: "New York", label: "New York" },
                            { value: "Los Angeles", label: "Los Angeles" },
                            { value: "Chicago", label: "Chicago" },
                            { value: "Miami", label: "Miami" },
                            { value: "Nashville", label: "Nashville" },
                            { value: "Austin", label: "Austin" },
                          ]}
                          value={filters.location}
                          onChange={(value) => handleFilterChange("location", value)}
                        />

                        <FilterBlock
                          title="Price Range"
                          options={[
                            { value: "all", label: "All Prices" },
                            { value: "budget", label: "Budget (Under $500)" },
                            { value: "mid", label: "Mid-range ($500 - $1,500)" },
                            { value: "premium", label: "Premium ($1,500+)" },
                          ]}
                          value={filters.priceRange}
                          onChange={(value) => handleFilterChange("priceRange", value)}
                        />
                      </div>

                      {/* Footer */}
                      <div className="p-4 sm:p-6 border-t border-border">
                        <Button
                          onClick={() => setShowMobileFilters(false)}
                          className="w-full"
                        >
                          Apply Filters
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Artists Grid/List */}
            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Results Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <p className="text-sm sm:text-base text-muted-foreground">
                  {filteredArtists?.length} artist{filteredArtists?.length !== 1 ? "s" : ""} found
                </p>
              </div>

              {/* Artists Grid */}
              {filteredArtists && filteredArtists.length > 0 ? (
                <div
                  className={`grid gap-4 sm:gap-6 ${viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
                    : "grid-cols-1"
                    }`}
                >
                  {filteredArtists.map((artist, index) => (
                    <motion.div
                      key={artist.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <ArtistCard artist={artist} viewMode={viewMode} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 sm:py-16 px-4">
                  <div className="text-4xl sm:text-6xl mb-4">🎭</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">No artists found</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 max-w-md mx-auto">
                    Try adjusting your search criteria or filters to find more artists
                  </p>
                  <Button onClick={clearFilters} variant="outline" className="h-10 px-6">
                    Clear Filters
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

    </div>
  )
}
