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
  languages: string[]
  availability: string
}

export interface HiredArtist extends Artist {
  hiredDate: string;
  eventName: string;
  eventLocation: string;
  status: "confirmed" | "pending" | "completed" | "cancelled";
  fee: number;
  notes?: string;
}

export interface FilterOptions {
  category: string
  location: string
  priceRange: string
}
