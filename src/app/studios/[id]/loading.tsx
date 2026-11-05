import { Skeleton } from "@/components/shared/skeleton";

export default function Loading() {
  return (
    <div aria-busy="true" className="container mx-auto px-4 py-8">
      <span role="status" className="sr-only">
        Loading studio details
      </span>

      {/* Studio header */}
      <div className="mb-8 space-y-3">
        <Skeleton className="h-6 w-24 rounded-full" />
        <Skeleton className="h-10 w-2/3 max-w-xl" />

        <div className="flex flex-wrap items-center gap-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>

      {/* Image gallery */}
      <Skeleton className="mb-10 h-[300px] w-full rounded-2xl md:h-[500px]" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Studio information */}
        <div className="space-y-10 lg:col-span-2">
          {/* Overview */}
          <section className="space-y-3">
            <Skeleton className="h-7 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-4/5" />
          </section>

          {/* Workspace details */}
          <section>
            <Skeleton className="mb-5 h-7 w-52" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border p-4"
                >
                  <Skeleton className="size-11 shrink-0 rounded-lg" />

                  <div className="space-y-2">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Amenities */}
          <section>
            <Skeleton className="mb-5 h-7 w-60" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Skeleton className="size-5 shrink-0 rounded" />
                  <Skeleton className="h-4 w-32" />
                </div>
              ))}
            </div>
          </section>

          {/* Host */}
          <section className="space-y-3 rounded-2xl border p-6">
            <Skeleton className="h-7 w-40" />
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-4 w-48" />
          </section>

          {/* Reviews */}
          <section>
            <Skeleton className="mb-4 h-7 w-40" />

            <div className="flex flex-col items-center rounded-xl border p-6">
              <Skeleton className="size-8 rounded-full" />
              <Skeleton className="mt-3 h-4 w-28" />
              <Skeleton className="mt-2 h-3 w-52 max-w-full" />
            </div>
          </section>
        </div>

        {/* Booking card */}
        <aside>
          <div className="sticky top-24 rounded-2xl border p-6 shadow-sm">
            <Skeleton className="h-9 w-40" />
            <Skeleton className="mt-3 h-4 w-48" />
            <Skeleton className="mt-5 h-4 w-56" />
            <Skeleton className="mt-5 h-10 w-full rounded-lg" />
            <Skeleton className="mx-auto mt-4 h-3 w-48 max-w-full" />
          </div>
        </aside>
      </div>
    </div>
  );
}
