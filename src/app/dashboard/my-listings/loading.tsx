import { Skeleton } from "@/components/shared/skeleton";
import { ListingGridSkeleton } from "./_component/ListingCardSkeleton";

export default function Loading() {
  return (
    <div
      aria-busy="true"
      className="min-h-screen bg-slate-100 p-6 dark:bg-slate-950"
    >
      <span role="status" className="sr-only">
        Loading your listings
      </span>

      <div className="mx-auto max-w-6xl">
        <Skeleton className="mb-6 h-8 w-40" />

        <ListingGridSkeleton count={8} />
      </div>
    </div>
  );
}
