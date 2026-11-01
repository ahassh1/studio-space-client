import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";

export function CategoriesSection() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-primary uppercase">
              <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
              Space types
            </p>

            <h2
              id="categories-heading"
              className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
            >
              One marketplace, every kind of room.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-right">
            From blackout stages to sunlit lofts — find a space that already
            fits the way you work.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-56 grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-60 lg:mt-14 lg:grid-cols-4 lg:auto-rows-64">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/studios?category=${category.slug}`}
              className={`group relative isolate overflow-hidden rounded-2xl border border-border outline-none transition-all duration-300 hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-ring/60 ${
                index === 0
                  ? "min-h-80 sm:col-span-2 sm:row-span-2 sm:min-h-0"
                  : ""
              }`}
            >
            <Image
  src={category.image}
  alt=""
  fill
  loading={index === 0 ? "eager" : "lazy"}
  sizes={
    index === 0
      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  }
  className="object-cover transition-transform duration-700 group-hover:scale-105"
/>

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-black/5" />

              <div className="absolute inset-x-0 top-0 flex justify-end p-4">
                <span className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white/80 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                <h3 className="font-heading text-xl font-semibold tracking-tight text-white">
                  {category.name}
                </h3>

                <p
                  className={`mt-1.5 max-w-md text-sm leading-relaxed text-white/75 ${
                    index !== 0 ? "line-clamp-2" : ""
                  }`}
                >
                  {category.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-primary uppercase">
                  Explore spaces
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}