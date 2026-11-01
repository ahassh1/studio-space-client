
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HostCta() {
  return (
    <section
      aria-labelledby="host-cta-heading"
      className="pb-20 sm:pb-24 lg:pb-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl border border-border">
          <Image
            src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-background/25" />
          <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />

          <div className="relative max-w-2xl p-8 sm:p-12 lg:p-16">
            <p className="flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-primary uppercase">
              <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
              For hosts
            </p>

            <h2
              id="host-cta-heading"
              className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
            >
              Your studio, fully booked.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Your space already does the hard part. List it in minutes, approve
              the bookings that fit, and let the calendar fill itself.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm text-foreground/85">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                Set your own hourly rate and availability
              </li>

              <li className="flex items-start gap-3 text-sm text-foreground/85">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                Verified, insured guests on every booking
              </li>

              <li className="flex items-start gap-3 text-sm text-foreground/85">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                Payouts within 48 hours of wrap
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/register" className="cursor-pointer">
                <Button
                  size="lg"
                  className="h-11 cursor-pointer px-6 text-sm font-semibold"
                >
                  List your studio
                  <ArrowRight className="size-4" />
                </Button>
              </Link>

              <Link href="/how-it-works" className="cursor-pointer">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 cursor-pointer border-border bg-background/50 px-6 text-sm font-semibold text-foreground backdrop-blur-sm hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  How hosting works
                </Button>
              </Link>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              No listing fees · Keep 90% of every booking
            </p>
          </div>

          <div className="absolute right-8 bottom-8 hidden w-56 rounded-2xl border border-border bg-background/70 p-5 backdrop-blur-xl lg:block">
            <p className="text-[0.65rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Average host income
            </p>

            <p className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground">
              $1,400
              <span className="text-sm font-normal text-muted-foreground">
                /mo
              </span>
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Based on 20 booked hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}