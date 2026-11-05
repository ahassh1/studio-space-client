import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Branded skeleton block. The shimmer animation lives in globals.css so it
 * automatically adapts to the light and dark theme tokens.
 */
export function Skeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn("skeleton rounded-md", className)}
      {...props}
    />
  );
}
