import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StudioCard } from "@/components/studios/studio-card";
import { featuredStudios } from "@/data/studios";

export function FeaturedStudios() {
  return (
    <section
      aria-labelledby="featured-heading"
      className="border-y border-border bg-card/20 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-primary uppercase">
              <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
              Featured this week
            </p>

            <h2
              id="featured-heading"
              className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
            >
              Spaces in the spotlight.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Hand-picked rooms with standout light, acoustics, and hosts —
              ready to book by the hour.
            </p>
          </div>
  <Link href="/studios">
  <Button
    variant="outline"
    className="h-10 shrink-0 cursor-pointer self-start border-border bg-background/50 px-5 text-sm font-semibold hover:border-primary/40 hover:bg-primary/10 hover:text-primary sm:self-auto"
  >
    Browse all studios
    <ArrowRight className="size-4" />
  </Button>
</Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {featuredStudios.map((studio) => (
            <StudioCard key={studio.id} studio={studio} />
          ))}
        </div>
      </div>
    </section>
  );
}