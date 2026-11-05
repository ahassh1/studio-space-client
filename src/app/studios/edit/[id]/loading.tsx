import { Skeleton } from "@/components/shared/skeleton";

export default function Loading() {
  return (
    <main aria-busy="true" className="min-h-screen bg-background px-4 py-5">
      <span role="status" className="sr-only">
        Loading studio form
      </span>

      <div className="mx-auto max-w-4xl">
        {/* Page heading */}
        <div className="mb-4">
          <Skeleton className="mb-2 h-8 w-20" />
          <Skeleton className="h-8 w-48" />
          <Skeleton className="mt-2 h-4 w-64 max-w-full" />
        </div>

        {/* Form */}
        <div className="space-y-4 rounded-xl border bg-card p-4 shadow-sm">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-full rounded-lg" />
            </div>

            <div className="grid gap-1.5">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-8 w-full rounded-lg" />
            </div>

            <div className="grid gap-1.5 sm:col-span-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-20 w-full rounded-lg" />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="grid gap-1.5">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-8 w-full rounded-lg" />
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="grid gap-1.5">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-8 w-full rounded-lg" />
              </div>
            ))}
          </div>

          <div>
            <Skeleton className="mb-2 h-4 w-32" />

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} className="h-9 rounded-md" />
              ))}
            </div>
          </div>

          <div className="flex justify-end border-t pt-3">
            <Skeleton className="h-8 w-32 rounded-lg" />
          </div>
        </div>
      </div>
    </main>
  );
}
