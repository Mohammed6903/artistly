export interface Artist {
  id: string
  name: string
  category: string
  location: string
  priceRange: {
    min: number
    max: number
  }
  rating: number
  avatar: string
  description: string
  specialties: string[]
  availability: string
}

export interface FilterOptions {
  category: string
  location: string
  priceRange: string
}
