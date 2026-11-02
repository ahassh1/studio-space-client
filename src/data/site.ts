import { BookingStep } from "@/types";
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
    title: "Explore Studio Details",
    description:
      "View studio photos, facilities, pricing, capacity, and host information.",
  },
  {
    step: 3,
    title: "Compare Your Options",
    description:
      "Compare different studios to find the perfect space for your creative project.",
  },
  {
    step: 4,
    title: "Select Booking Date",
    description:
      "Choose your preferred date based on your production schedule.",
  },
  {
    step: 5,
    title: "Choose Time & Duration",
    description:
      "Select the starting time and number of hours you need for your session.",
  },
  {
    step: 6,
    title: "Confirm Your Booking",
    description:
      "Review your booking details, studio information, and total estimated cost.",
  },
  {
    step: 7,
    title: "Get Booking Confirmation",
    description:
      "Receive your booking details and stay updated on your reservation status.",
  },
  {
    step: 8,
    title: "Create & Produce",
    description:
      "Visit your selected studio and bring your creative ideas to life.",
  },
];