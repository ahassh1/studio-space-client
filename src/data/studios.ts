import type { Studio } from "@/types";

export const studios: Studio[] = [
  {
    id: "lumen-loft",
    name: "Lumen Loft Daylight Studio",
    category: "photo-studios",
    pricePerHour: 65,
    rating: 4.9,
    reviews: 128,
    location: "Brooklyn, New York",
    image:
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "velocity-stage",
    name: "Velocity Sound Stage",
    category: "sound-stages",
    pricePerHour: 120,
    rating: 4.8,
    reviews: 94,
    location: "Los Angeles, California",
    image:
      "https://images.unsplash.com/photo-1519508234439-4f23643125c1?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "signal-room",
    name: "The Signal Podcast Room",
    category: "podcast-rooms",
    pricePerHour: 45,
    rating: 5.0,
    reviews: 76,
    location: "Austin, Texas",
    image:
      "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "midnight-pressing",
    name: "Midnight Pressing Suite",
    category: "music-suites",
    pricePerHour: 85,
    rating: 4.9,
    reviews: 153,
    location: "Nashville, Tennessee",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "pigment-house",
    name: "Pigment House Workshop",
    category: "art-workshops",
    pricePerHour: 40,
    rating: 4.7,
    reviews: 61,
    location: "Portland, Oregon",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "golden-hour",
    name: "Golden Hour Cyclorama",
    category: "photo-studios",
    pricePerHour: 95,
    rating: 4.8,
    reviews: 112,
    location: "Miami, Florida",
    image:
      "https://images.unsplash.com/photo-1504509546545-e000b4a62425?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "analog-attic",
    name: "Analog Attic Recording Room",
    category: "music-suites",
    pricePerHour: 70,
    rating: 4.6,
    reviews: 48,
    location: "Chicago, Illinois",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "north-light",
    name: "North Light Photo Loft",
    category: "photo-studios",
    pricePerHour: 55,
    rating: 4.7,
    reviews: 87,
    location: "Seattle, Washington",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "frequency-lab",
    name: "Frequency Podcast Lab",
    category: "podcast-rooms",
    pricePerHour: 50,
    rating: 4.8,
    reviews: 69,
    location: "Denver, Colorado",
    image:
      "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "mono-beat",
    name: "Mono & Beat Mixing Suite",
    category: "music-suites",
    pricePerHour: 75,
    rating: 4.9,
    reviews: 103,
    location: "Atlanta, Georgia",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "canyon-shoot",
    name: "Canyon Drive-In Shoot House",
    category: "sound-stages",
    pricePerHour: 140,
    rating: 4.9,
    reviews: 57,
    location: "Santa Fe, New Mexico",
    image:
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "clay-and-co",
    name: "Clay & Co Ceramic Studio",
    category: "art-workshops",
    pricePerHour: 35,
    rating: 4.6,
    reviews: 44,
    location: "Asheville, North Carolina",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
  },
];

export const featuredStudios = studios.filter((studio) => studio.featured);
