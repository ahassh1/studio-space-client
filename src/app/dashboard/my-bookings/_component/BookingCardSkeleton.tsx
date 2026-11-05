import { Skeleton } from "@/components/shared/skeleton";
import { cn } from "@/lib/utils";

/** Mirrors the layout of BookingCard while bookings are loading. */
export function BookingCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900",
        className
      )}
    >
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
        {/* Studio image */}
        <Skeleton className="h-28 w-full rounded-lg sm:w-32" />

        {/* Booking details */}
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>

          <div className="flex flex-wrap gap-3">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-36" />
          </div>

          <Skeleton className="h-4 w-32" />
        </div>

        {/* Booking price */}
        <div className="flex items-center justify-between gap-3 border-t pt-3 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
          <div className="space-y-1.5 sm:text-right">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-3 w-24" />
          </div>

          <Skeleton className="h-9 w-36 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

interface BookingListSkeletonProps {
  count?: number;
  className?: string;
}

/** List of booking card skeletons. */
export function BookingListSkeleton({
  count = 3,
  className,
}: BookingListSkeletonProps) {
  return (
    <div className={cn("grid gap-4", className)}>
      {Array.from({ length: count }).map((_, index) => (
        <BookingCardSkeleton key={index} />
      ))}
    </div>
  );
}
