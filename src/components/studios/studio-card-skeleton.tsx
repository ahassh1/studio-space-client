import { Skeleton } from "@/components/shared/skeleton";
import { cn } from "@/lib/utils";

/** Mirrors the layout of StudioCard while its data is loading. */
export function StudioCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card",
        className
      )}
    >
      {/* Studio image */}
      <div className="relative">
        <Skeleton className="h-56 w-full rounded-none" />
        <Skeleton className="absolute left-4 top-4 h-6 w-24 rounded-full" />
      </div>

      {/* Studio information */}
      <div className="space-y-4 p-5">
        <div>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="mt-3 h-4 w-1/2" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-3.5 w-full" />
          <Skeleton className="h-3.5 w-5/6" />
        </div>

        {/* Price and details */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <Skeleton className="h-7 w-24" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  );
}

interface StudioGridSkeletonProps {
  count?: number;
  className?: string;
}

/** Grid of studio card skeletons used by loading routes and Suspense. */
export function StudioGridSkeleton({
  count = 6,
  className,
}: StudioGridSkeletonProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {Array.from({ length: count }).map((_, index) => (
        <StudioCardSkeleton key={index} />
      ))}
    </div>
  );
}
