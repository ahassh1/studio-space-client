
import Link from "next/link";
import { Aperture } from "lucide-react";

interface LogoProps {
  href?: string;
  className?: string;
  markClassName?: string;
}

export function Logo({
  href = "/",
  className = "",
  markClassName = "",
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="StudioSpace home"
      className={`group inline-flex cursor-pointer items-center gap-2.5 font-heading text-xl font-semibold tracking-tight ${className}`}
    >
      <span
        className={`flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 transition-all duration-300 group-hover:rotate-45 group-hover:bg-primary group-hover:text-primary-foreground ${markClassName}`}
      >
        <Aperture className="size-5" strokeWidth={1.75} />
      </span>

      <span>
        Studio<span className="text-primary">Space</span>
      </span>
    </Link>
  );
}