import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
        <div className="absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold tracking-widest text-primary uppercase">
            <Sparkles className="size-4" />
            About StudioSpace
          </span>

          <h1 className="mx-auto mt-8 max-w-4xl font-heading text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Every great creation starts with the{" "}
            <span className="text-primary">right space.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            StudioSpace connects creators with inspiring creative spaces.
            Discover, compare, and book professional studios without the
            hassle.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/studios"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Explore Studios
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="/how-it-works"
              className="inline-flex h-12 items-center rounded-full border border-border px-7 text-sm font-semibold transition-colors hover:bg-muted"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>
{/* Our Story */}
<section className="py-20 sm:py-28">
  <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
    <div>
      <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
        Our Story
      </p>

      <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
        Making creative spaces easier to find.
      </h2>

      <div className="mt-6 space-y-4 leading-8 text-muted-foreground">
        <p>
          Finding the perfect studio should be the easiest part of
          creating something amazing. But discovering available spaces,
          comparing prices, and contacting studio owners can take
          valuable time.
        </p>

        <p>
          Thats why we created StudioSpace — a platform designed to
          bring creative spaces and talented people together in one
          place.
        </p>

        <p>
          Whether you are a photographer, filmmaker, musician, or
          content creator, we help you find a space where your ideas
          can become reality.
        </p>
      </div>
    </div>

    {/* Studio Category Images */}
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />

      <div className="relative grid grid-cols-2 gap-4">
        <div className="space-y-4 pt-10">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=900&q=80"
              alt="Professional photo studio"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-4 left-4 font-semibold text-white">
              Photo Studios
            </p>
          </div>

          <div className="group relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=900&q=80"
              alt="Professional podcast room"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-4 left-4 font-semibold text-white">
              Podcast Rooms
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="group relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1519508234439-4f23643125c1?auto=format&fit=crop&w=900&q=80"
              alt="Professional sound stage"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-4 left-4 font-semibold text-white">
              Sound Stages
            </p>
          </div>

          <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80"
              alt="Professional music recording studio"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-4 left-4 font-semibold text-white">
              Music Suites
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Statistics */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { number: "1,200+", label: "Creative Spaces" },
            { number: "38+", label: "Cities Covered" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "60 sec", label: "Average Booking Time" },
          ].map((item) => (
            <div key={item.label}>
              <h3 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                {item.number}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              What Drives Us
            </p>

            <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-5xl">
              Built around creativity.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 sm:p-10">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles className="size-6" />
              </div>

              <h3 className="mt-7 font-heading text-2xl font-semibold">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                To make professional creative spaces accessible to everyone
                by simplifying studio discovery, transparent pricing, and
                hassle-free booking.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 sm:p-10">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Lightbulb className="size-6" />
              </div>

              <h3 className="mt-7 font-heading text-2xl font-semibold">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                To become a trusted destination for creative professionals,
                connecting talented people with the spaces and resources
                they need to create without limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-border bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Get In Touch
            </p>

            <h2 className="mt-5 max-w-lg font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
              Have an idea? Lets talk.
            </h2>

            <p className="mt-5 max-w-md leading-8 text-muted-foreground">
              Have questions, suggestions, or want to list your studio?
              Wed love to hear from you. Send us a message and lets
              connect.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold">Email Us</p>
                  <p className="text-sm text-muted-foreground">
                    Get in touch with our team
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MessageCircle className="size-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold">Support</p>
                  <p className="text-sm text-muted-foreground">
                    We are here to help you
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="text-sm text-muted-foreground">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h3 className="font-heading text-2xl font-semibold">
              Send us a message
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form and tell us how we can help.
            </p>

            <div className="mt-7 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  required
                  className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <Button type="submit" className="h-12 w-full rounded-xl">
                Send Message
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
export default About;