
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  Headphones,
  ShieldCheck,
} from "lucide-react";

export function GuaranteesSection() {
  return (
    <section
      aria-labelledby="guarantees-heading"
      className="border-y border-border bg-card/20 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-24">
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-primary uppercase">
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
            Trust &amp; safety
          </p>

          <h2
            id="guarantees-heading"
            className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            Protected from first click to final cut.
          </h2>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every booking is covered up to $1M in liability protection, with
            verified people on both sides of the door. You bring the vision — we
            handle the what-ifs.
          </p>

          <Link
            href="/how-it-works"
            className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Read our trust standards
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {/* Liability Protection */}
          <li className="group flex flex-col gap-4 bg-background p-6 transition-colors duration-300 hover:bg-card lg:p-7">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:-translate-y-0.5">
              <ShieldCheck className="size-5" strokeWidth={1.75} />
            </span>

            <div>
              <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                Liability Protection
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Every booking includes liability protection for extra peace of
                mind.
              </p>
            </div>
          </li>

          {/* Verified Profiles */}
          <li className="group flex flex-col gap-4 bg-background p-6 transition-colors duration-300 hover:bg-card lg:p-7">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:-translate-y-0.5">
              <BadgeCheck className="size-5" strokeWidth={1.75} />
            </span>

            <div>
              <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                Verified Profiles
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Connect with verified studio hosts and trusted creative
                professionals.
              </p>
            </div>
          </li>

          {/* Equipment Safety */}
          <li className="group flex flex-col gap-4 bg-background p-6 transition-colors duration-300 hover:bg-card lg:p-7">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:-translate-y-0.5">
              <Camera className="size-5" strokeWidth={1.75} />
            </span>

            <div>
              <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                Equipment Safety
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Studio equipment and facilities are handled with care and
                attention.
              </p>
            </div>
          </li>

          {/* 24/7 Host Support */}
          <li className="group flex flex-col gap-4 bg-background p-6 transition-colors duration-300 hover:bg-card lg:p-7">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:-translate-y-0.5">
              <Headphones className="size-5" strokeWidth={1.75} />
            </span>

            <div>
              <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                24/7 Host Support
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Get support whenever you need help with your studio booking.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}