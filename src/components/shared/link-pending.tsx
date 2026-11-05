"use client";

import { useLinkStatus } from "next/link";
import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";

/**
 * Tiny inline spinner for a Link. It is always rendered at a fixed size so
 * showing it never causes layout shift.
 */
export function LinkPending({ className }: { className?: string }) {
  const { pending } = useLinkStatus();

  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex w-3 shrink-0 items-center justify-center transition-opacity duration-150",
        pending ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <Spinner size="xs" />
    </span>
  );
}
