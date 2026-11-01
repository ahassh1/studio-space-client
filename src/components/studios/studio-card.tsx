import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Studio } from "@/types";

interface StudioCardProps {
  studio: Studio;
}
export function StudioCard({ studio }: StudioCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_48px_-16px_oklch(0.79_0.155_75/0.2)]">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden">
      <Image
  src={studio.image}
  alt={studio.name}
  fill
  loading="eager"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover"
/>

        <div className="absolute inset-0 bg-linear-to-t from-card/80 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
          <Star className="size-3.5 fill-primary text-primary" />
          {studio.rating.toFixed(1)}
          <span className="text-muted-foreground">({studio.reviews})</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-heading text-lg leading-snug font-semibold text-foreground transition-colors group-hover:text-primary">
            {studio.name}
          </h3>

          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-3.5 shrink-0" />
            {studio.location}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
          <p className="flex items-baseline gap-1">
            <span className="font-heading text-xl font-semibold text-primary">
              ${studio.pricePerHour}
            </span>
            <span className="text-xs text-muted-foreground">/ hour</span>
          </p>

          <Link href={`/studios?category=${studio.category}`}>
            <Button
              variant="outline"
              size="sm"
              className="border-border cursor-pointer bg-background/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              <Clock className="size-3.5" />
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
