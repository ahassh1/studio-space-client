import { Skeleton } from "@/components/shared/skeleton";
import { BookingListSkeleton } from "./_component/BookingCardSkeleton";

export default function Loading() {
  return (
    <div
      aria-busy="true"
      className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8"
    >
      <span role="status" className="sr-only">
        Loading your bookings
      </span>

      <div className="mx-auto max-w-5xl">
        {/* Page heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <Skeleton className="mb-2 h-4 w-48" />
            <Skeleton className="h-9 w-52 sm:h-10" />
            <Skeleton className="mt-2 h-4 w-72 max-w-full" />
          </div>

          {/* Booking count */}
          <div className="flex w-fit items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <Skeleton className="size-9 rounded-lg" />

            <div className="space-y-1.5">
              <Skeleton className="h-5 w-8" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
        </div>

        {/* Booking list */}
        <BookingListSkeleton count={3} />
      </div>
    </div>
  );
}
