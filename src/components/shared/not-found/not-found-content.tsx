
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import NotFoundIllustration from "./not-found-illustration";

export default function NotFoundContent() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">

      {/* Error Content */}
      <div className="order-2 space-y-6 text-center md:order-1 md:text-left">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          StudioSpace
        </p>

        <h1 className="text-7xl font-extrabold tracking-tight text-primary sm:text-8xl">
          404
        </h1>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Lost in the Creative Space?
        </h2>

        <p className="mx-auto max-w-md leading-7 text-muted-foreground md:mx-0">
          Sorry, we couldn't find the studio or page
          you're looking for. Let's get you back to
          discovering creative spaces.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
        >
          <Home className="size-5" />
          Return to Home
        </Link>

        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
          <ArrowLeft className="size-4" />
          Your next creative journey starts here.
        </p>

      </div>

      {/* Illustration */}
      <div className="order-1 md:order-2">
        <NotFoundIllustration />
      </div>

    </section>
  );
}