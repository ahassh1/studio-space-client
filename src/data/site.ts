import type { BookingStep } from "@/types";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/studios", label: "Explore Studios" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About Us" },
];

export const bookingSteps: BookingStep[] = [
  {
    step: 1,
    title: "Discover Spaces",
    description:
      "Browse verified studios filtered by category, location, amenities, and hourly rate.",
  },
  {
    step: 2,
    title: "Select Shoot Hours",
    description:
      "Pick the exact date and time window your production needs — down to the hour.",
  },
  {
    step: 3,
    title: "Book Instantly",
    description:
      "Confirm and pay in one step. No back-and-forth emails, no waiting on replies.",
  },
  {
    step: 4,
    title: "Create & Produce",
    description:
      "Show up, plug in, and make your best work in a space built for creators.",
  },
];