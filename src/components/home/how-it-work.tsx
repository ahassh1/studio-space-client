import Link from "next/link";
import { Button } from "@/components/ui/button";
import { bookingSteps } from "@/data/site";
import {
  Search,
  CalendarClock,
  SlidersHorizontal,
  CalendarDays,
  Clock,
  ClipboardCheck,
  BellRing,
  Clapperboard,
  ArrowRight,
} from "lucide-react";

const stepIcons = [
  Search,
  CalendarClock,
  SlidersHorizontal,
  CalendarDays,
  Clock,
  ClipboardCheck,
  BellRing,
  Clapperboard,
];
interface HowItWorkProps {
  limit?: number;
}
export function HowItWork({limit}:HowItWorkProps) {
  const steps = limit ? bookingSteps.slice(0, limit) : bookingSteps;   // Limit displayed steps
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-medium tracking-[0.22em] text-primary uppercase">
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
            How it works
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
          </p>

          <h2
            id="how-it-works-heading"
            className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            From idea to call time in four steps.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            No emails, no deposits by bank transfer, no waiting for a reply.
            Just the room you need, when you need it.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, index) => {
                const Icon = stepIcons[index];
            return (
              <li
                key={step.step}
                className="group relative flex flex-col rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/70"
              >
                <div className="flex items-start justify-between">
                  <span className="font-heading text-4xl leading-none font-semibold text-muted-foreground/30 transition-colors duration-300 group-hover:text-primary/30">
                    0{step.step}
                  </span>

                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="size-4" strokeWidth={1.75} />
                  </span>
                </div>

                <h3 className="mt-8 font-heading text-lg font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex justify-center">
          <Link href="/studios" className="cursor-pointer">
            <Button className="h-11 cursor-pointer px-6 text-sm font-semibold">
              Find your space
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}