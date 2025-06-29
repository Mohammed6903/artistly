import type { Artist, HiredArtist } from "@/types/artist"

export const artistsData: Artist[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    category: "Singer",
    location: "New York",
    priceRange: { min: 800, max: 2000 },
    rating: 4.9,
    avatar: "🎤",
    description:
      "Professional vocalist with 10+ years of experience in jazz, pop, and R&B. Perfect for weddings, corporate events, and private parties.",
    specialties: ["Jazz", "Pop", "R&B"],
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    availability: "Available",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    category: "DJ",
    location: "Los Angeles",
    priceRange: { min: 600, max: 1500 },
    rating: 4.8,
    avatar: "🎧",
    description:
      "High-energy DJ specializing in electronic, hip-hop, and Latin music. Bringing the party to life with professional sound equipment.",
    specialties: ["Electronic", "Hip-Hop", "Latin"],
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    availability: "Available",
  },
  {
    id: "3",
    name: "Emily Chen",
    category: "Dancer",
    location: "Chicago",
    priceRange: { min: 400, max: 1200 },
    rating: 4.7,
    avatar: "💃",
    description:
      "Contemporary and ballet dancer with choreography expertise. Available for performances, workshops, and special events.",
    specialties: ["Contemporary", "Ballet", "Choreography"],
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    availability: "Available",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    category: "Speaker",
    location: "Miami",
    priceRange: { min: 2000, max: 5000 },
    rating: 4.9,
    avatar: "🎙️",
    description:
      "Motivational speaker and business consultant with expertise in leadership, innovation, and personal development.",
    specialties: ["Leadership", "Innovation", "Personal Development"],
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    availability: "Available",
  },
  {
    id: "5",
    name: "Luna Martinez",
    category: "Singer",
    location: "Nashville",
    priceRange: { min: 1000, max: 2500 },
    rating: 4.8,
    avatar: "🎵",
    description:
      "Country and folk singer-songwriter with original compositions. Perfect for intimate venues and acoustic performances.",
    specialties: ["Country", "Folk", "Acoustic"],
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    availability: "Available",
  },
  {
    id: "6",
    name: "Alex Thompson",
    category: "Musician",
    location: "Austin",
    priceRange: { min: 500, max: 1300 },
    rating: 4.6,
    avatar: "🎸",
    description:
      "Multi-instrumentalist specializing in guitar, piano, and vocals. Versatile performer for any musical style or event.",
    specialties: ["Guitar", "Piano", "Vocals"],
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    availability: "Available",
  },
  {
    id: "7",
    name: "Isabella Garcia",
    category: "Dancer",
    location: "Los Angeles",
    priceRange: { min: 700, max: 1800 },
    rating: 4.9,
    avatar: "💫",
    description:
      "Professional salsa and ballroom dancer with competition experience. Offers performances and dance lessons.",
    specialties: ["Salsa", "Ballroom", "Latin Dance"],
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    availability: "Available",
  },
  {
    id: "8",
    name: "Michael Brown",
    category: "DJ",
    location: "New York",
    priceRange: { min: 800, max: 2200 },
    rating: 4.7,
    avatar: "🎛️",
    description:
      "Wedding and corporate event DJ with extensive music library. Specializes in creating the perfect atmosphere for any occasion.",
    specialties: ["Weddings", "Corporate", "Top 40"],
    availability: "Available",
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
  },
  {
    id: "9",
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    name: "Rachel Kim",
    category: "Speaker",
    location: "Chicago",
    priceRange: { min: 1500, max: 3500 },
    rating: 4.8,
    avatar: "📢",
    description: "Tech industry expert and keynote speaker focusing on digital transformation, AI, and future of work.",
    specialties: ["Technology", "AI", "Digital Transformation"],
    availability: "Available",
  },
  {
    id: "10",
    name: "Carlos Mendez",
    category: "Musician",
    location: "Miami",
    priceRange: { min: 600, max: 1400 },
    rating: 4.6,
    avatar: "🎺",
    description:
      "Jazz trumpeter and band leader with classical training. Perfect for elegant events and sophisticated audiences.",
    specialties: ["Jazz", "Classical", "Big Band"],
    availability: "Available",
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
  },
  {
    id: "11",
    name: "Sophia Williams",
    category: "Singer",
    location: "Los Angeles",
    priceRange: { min: 1200, max: 3000 },
    rating: 4.9,
    avatar: "🌟",
    description:
      "Opera-trained vocalist with crossover appeal. Performs classical, musical theater, and contemporary pieces.",
    specialties: ["Opera", "Musical Theater", "Classical"],
    availability: "Available",
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
  },
  {
    id: "12",
    name: "David Park",
    category: "DJ",
    location: "Austin",
    priceRange: { min: 400, max: 1000 },
    rating: 4.5,
    avatar: "🎵",
    description:
      "Indie and alternative music DJ perfect for festivals, clubs, and underground events. Curates unique musical experiences.",
    specialties: ["Indie", "Alternative", "Electronic"],
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    availability: "Available",
  },
]

export const hiredArtistsData: HiredArtist[] = [
  {
    id: "a1",
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    name: "Luna Martinez",
    category: "Singer",
    location: "Nashville",
    priceRange: { min: 1000, max: 2500 },
    rating: 4.8,
    avatar: "🎵",
    description: "Country and folk singer-songwriter with original compositions.",
    specialties: ["Country", "Folk", "Acoustic"],
    availability: "Unavailable",
    hiredDate: "2025-08-10",
    eventName: "Wedding Ceremony",
    eventLocation: "Nashville Botanical Gardens",
    status: "confirmed",
    fee: 1800,
    notes: "Performer requested sound check 2 hours before event."
  },
  {
    id: "a2",
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    name: "Michael Brown",
    category: "DJ",
    location: "New York",
    priceRange: { min: 800, max: 2200 },
    rating: 4.7,
    avatar: "🎛️",
    description: "Corporate event DJ with a massive music library.",
    specialties: ["Weddings", "Corporate", "Top 40"],
    availability: "Unavailable",
    hiredDate: "2025-09-01",
    eventName: "Tech Summit Afterparty",
    eventLocation: "Brooklyn Expo Center",
    status: "completed",
    fee: 2000,
    notes: "Stayed 1 hour extra beyond contract."
  },
  {
    id: "a3",
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    name: "Isabella Garcia",
    category: "Dancer",
    location: "Los Angeles",
    priceRange: { min: 700, max: 1800 },
    rating: 4.9,
    avatar: "💫",
    description: "Salsa and ballroom dancer with competition experience.",
    specialties: ["Salsa", "Ballroom", "Latin Dance"],
    availability: "Unavailable",
    hiredDate: "2025-10-05",
    eventName: "Cultural Night Showcase",
    eventLocation: "Hollywood Arts Theater",
    status: "pending",
    fee: 1500,
    notes: "Will perform 2 routines with a partner."
  },
  {
    id: "a4",
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    name: "Dr. James Wilson",
    category: "Speaker",
    location: "Miami",
    priceRange: { min: 2000, max: 5000 },
    rating: 4.9,
    avatar: "🎙️",
    description: "Leadership consultant and motivational speaker.",
    specialties: ["Leadership", "Innovation", "Personal Development"],
    availability: "Unavailable",
    hiredDate: "2025-11-20",
    eventName: "Business Leaders Conference",
    eventLocation: "Miami Convention Center",
    status: "confirmed",
    fee: 4500,
    notes: "Includes a Q&A session after the keynote."
  },
  {
    id: "a5",
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    name: "Emily Chen",
    category: "Dancer",
    location: "Chicago",
    priceRange: { min: 400, max: 1200 },
    rating: 4.7,
    avatar: "💃",
    description: "Contemporary dancer with ballet background.",
    specialties: ["Contemporary", "Ballet", "Choreography"],
    availability: "Unavailable",
    hiredDate: "2025-07-18",
    eventName: "Modern Art Gala",
    eventLocation: "Chicago Museum of Contemporary Art",
    status: "completed",
    fee: 1000,
    notes: "Performed a custom choreographed solo."
  },
  {
    id: "a6",
    languages: [
      "English",
      "Marathi",
      "Hindi"
    ],
    name: "Alex Thompson",
    category: "Musician",
    location: "Austin",
    priceRange: { min: 500, max: 1300 },
    rating: 4.6,
    avatar: "🎸",
    description: "Multi-instrumentalist specializing in guitar and piano.",
    specialties: ["Guitar", "Piano", "Vocals"],
    availability: "Unavailable",
    hiredDate: "2025-08-25",
    eventName: "Local Music Festival",
    eventLocation: "Zilker Park, Austin",
    status: "cancelled",
    fee: 0,
    notes: "Event was cancelled due to weather."
  }
];
