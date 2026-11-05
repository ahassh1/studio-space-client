import { Skeleton } from "@/components/shared/skeleton";
import { cn } from "@/lib/utils";

/** Mirrors the layout of ListingCard while listings are loading. */
export function ListingCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900",
        className
      )}
    >
      {/* Studio image */}
      <Skeleton className="h-36 w-full rounded-none" />

      <div className="space-y-2 p-3">
        {/* Category and price */}
        <div className="mb-1 flex items-center justify-between gap-2">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-14" />
        </div>

        {/* Title and location */}
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3 w-1/2" />

        {/* Overview */}
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
        </div>

        {/* Details */}
        <div className="flex gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-24" />
        </div>

        {/* Actions */}
        <div className="flex gap-3 border-t border-slate-200 pt-3 dark:border-slate-800">
          <Skeleton className="h-8 flex-1 rounded-lg" />
          <Skeleton className="h-8 flex-1 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

interface ListingGridSkeletonProps {
  count?: number;
  className?: string;
}

/** Grid of listing card skeletons. */
export function ListingGridSkeleton({
  count = 8,
  className,
}: ListingGridSkeletonProps) {
  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8",
        className
      )}
    >
      {Array.from({ length: count }).map((_, index) => (
        <ListingCardSkeleton key={index} />
      ))}
    </div>
  );
}
