import { cn } from "@/lib/utils";

const spinnerSizes = {
  xs: "size-3 border",
  sm: "size-4 border-2",
  md: "size-5 border-2",
  lg: "size-8 border-[3px]",
};

interface SpinnerProps {
  size?: keyof typeof spinnerSizes;
  className?: string;
  label?: string;
}

/** Small branded loading spinner used in buttons and async states. */
export function Spinner({ size = "sm", className, label }: SpinnerProps) {
  return (
    <span
      role={label ? "status" : undefined}
      aria-label={label}
      className={cn("inline-flex items-center justify-center", className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "animate-spin rounded-full border-current border-t-transparent",
          spinnerSizes[size]
        )}
      />
    </span>
  );
}

interface PageLoaderProps {
  label?: string;
  className?: string;
}

/** Centered branded spinner for route transitions and async pages. */
export function PageLoader({
  label = "Loading...",
  className,
}: PageLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 py-16",
        className
      )}
    >
      <span className="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
        <Spinner size="lg" />
      </span>

      <p className="text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}
