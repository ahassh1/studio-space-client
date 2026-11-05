import { Skeleton } from "@/components/shared/skeleton";
import { StudioGridSkeleton } from "@/components/studios/studio-card-skeleton";

export default function Loading() {
  return (
    <div aria-busy="true" className="mx-auto max-w-7xl px-4 py-10">
      <span role="status" className="sr-only">
        Loading studios
      </span>

      <Skeleton className="mb-8 h-9 w-56" />

      <StudioGridSkeleton count={6} />
    </div>
  );
}
