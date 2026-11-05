import { Skeleton } from "@/components/shared/skeleton";
import { StudioGridSkeleton } from "@/components/studios/studio-card-skeleton";

/** Fallback for the async FeaturedStudios section on the home page. */
export function FeaturedStudiosSkeleton() {
  return (
    <section
      aria-busy="true"
      className="border-y border-border bg-card/20 py-16 sm:py-20 lg:py-24"
    >
      <span role="status" className="sr-only">
        Loading featured studios
      </span>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Skeleton className="h-3 w-40" />
            <Skeleton className="mt-4 h-10 w-80 max-w-full" />

            <div className="mt-4 space-y-2">
              <Skeleton className="h-4 w-full max-w-xl" />
              <Skeleton className="h-4 w-3/4 max-w-lg" />
            </div>
          </div>

          <Skeleton className="h-10 w-44 shrink-0 rounded-lg" />
        </div>

        <StudioGridSkeleton
          count={6}
          className="mt-10 gap-5 lg:mt-14 lg:gap-6"
        />
      </div>
    </section>
  );
}
