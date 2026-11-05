import { Skeleton } from "@/components/shared/skeleton";

export default function Loading() {
  return (
    <main
      aria-busy="true"
      className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-8"
    >
      <span role="status" className="sr-only">
        Loading studio form
      </span>

      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
        <div className="mb-6 flex items-center gap-3">
          <Skeleton className="size-11 shrink-0 rounded-xl" />

          <div className="space-y-2">
            <Skeleton className="h-7 w-44" />
            <Skeleton className="h-3 w-72 max-w-full" />
          </div>
        </div>

        {/* Form sections */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <section
              key={index}
              className="rounded-xl border border-border bg-card p-4 shadow-sm"
            >
              <div className="mb-4 space-y-2">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-3 w-56 max-w-full" />
              </div>

              <div className="space-y-3">
                <div className="grid gap-1.5">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-8 w-full rounded-lg" />
                </div>

                <div className="grid gap-1.5">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-8 w-full rounded-lg" />
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Form actions */}
        <div className="mt-4 flex flex-col-reverse justify-end gap-3 rounded-xl border border-border bg-card p-4 sm:flex-row">
          <Skeleton className="h-9 w-32 rounded-lg" />
          <Skeleton className="h-9 w-44 rounded-lg" />
        </div>
      </div>
    </main>
  );
}
