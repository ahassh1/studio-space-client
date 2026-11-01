import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export interface IStudio {
  id?: string;
  _id?: string;
  title: string;
  category: string;
  hourlyRate: string;
  location: string;
  imageUrl: string;
  amenities: string[];
  overview: string;
}
const StudioCard = ({ studio }: { studio: IStudio }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Studio Image */}
      <div className="relative overflow-hidden">
        <Image
          src={studio.imageUrl}
          alt={studio.title}
          width={500}
          height={300}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          {studio.category}
        </span>
      </div>

      {/* Studio Information */}
      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {studio.title}
          </h2>

          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            {studio.location}
          </p>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {studio.overview}
        </p>

        {/* Price and Details */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <div>
            <p className="text-2xl font-semibold text-foreground">
              ${studio.hourlyRate}
              <span className="text-sm font-normal text-muted-foreground">
                / hour
              </span>
            </p>
          </div>

          <Link
            href={`/studios/${studio._id ?? studio.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/70"
          >
            View Details
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default StudioCard;