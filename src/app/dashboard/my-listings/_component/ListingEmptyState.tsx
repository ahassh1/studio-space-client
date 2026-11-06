
import Link from "next/link";
import { Plus, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ListingEmptyState = () => {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">

      {/* Empty State Icon */}
      <div className="mb-6 flex size-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Building2 className="size-10" />
      </div>

      {/* Empty State Content */}
      <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
        No Studio Listings Yet
      </h2>

      <p className="mt-3 max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">
        You haven't listed any creative studios yet. Share your space with
        creators and start receiving booking requests.
      </p>

      <Link
  href="/dashboard/add-studio"
  className="mt-7 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
>
  <Plus className="size-4" />
  Add Your First Studio
  <ArrowRight className="size-4" />
</Link>

      <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
        Your next creative opportunity starts here.
      </p>
    </div>
  );
};

export default ListingEmptyState;
