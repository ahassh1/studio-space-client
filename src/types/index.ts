export interface Studio {
  id: string;
  name: string;
  category: string;
  pricePerHour: number;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  featured?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export interface BookingStep {
  step: number;
  title: string;
  description: string;
}