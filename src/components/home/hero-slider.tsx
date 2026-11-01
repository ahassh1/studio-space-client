"use client";
import { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Keyboard } from "swiper/modules";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// const HERO_VIDEO =
//   "https://videos.pexels.com/video-files/4985238/4985238-hd_1920_1080_25fps.mp4";

interface HeroSlide {
  kind: "video" | "image";
  media: string;
  eyebrow: string;
  title: string;
  description: string;
}

const slides: HeroSlide[] = [
  // {
  //   kind: "video",
  //   media: HERO_VIDEO,
  //   eyebrow: "Studios by the hour",
  //   title: "Find the space where your vision comes to life.",
  //   description:
  //     "Book photo studios, sound stages, and podcast rooms from verified hosts — instantly, by the hour.",
  // },
  {
    kind: "image",
    media:
      "https://images.unsplash.com/photo-1504509546545-e000b4a62425?auto=format&fit=crop&w=1920&q=80",
    eyebrow: "Built for creators",
    title: "Every great production starts with the right room.",
    description:
      "Compare amenities, lighting, acoustics, and rates across thousands of independent studios near you.",
  },
  {
    kind: "image",
    media:
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&w=1920&q=80",
    eyebrow: "Host your space",
    title: "Turn your empty studio into steady income.",
    description:
      "Set your hours, protect your gear, and get paid — while our 24/7 support handles the rest.",
  },
];

export function HeroSlider() {
  return (
    <section
      aria-label="Featured highlights"
      className="relative h-[75vh] min-h-120 max-h-180 w-full overflow-hidden sm:h-[80vh] lg:h-[85vh]"
    >
      {/* Suspense fallback boundary */}
      <Suspense
        fallback={<div className="size-full bg-background" />}
      >
        <Swiper
          modules={[Autoplay, EffectFade, Pagination, Keyboard]}
          effect="fade"
          loop
          speed={900}
          autoplay={{ delay: 6500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          grabCursor
          className="hero-swiper size-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.eyebrow}>
              {/* Media layer */}
              <div className="absolute inset-0">
                {slide.kind === "video" ? (
                  <video
                    className="size-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80"
                  >
                    <source src={slide.media} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={slide.media}
                    alt=""
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                )}

                {/* Legibility gradient */}
                <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/75 to-background/30" />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-background/30" />
              </div>

              {/* Content layer */}
              <div className="absolute inset-0">
                <div className="mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                  <div className="hero-content max-w-2xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary uppercase">
                      <PlayCircle className="size-3.5" />
                      {slide.eyebrow}
                    </span>

                    <h1 className="mt-5 font-heading text-3xl leading-tight font-semibold tracking-tight text-balance text-foreground sm:mt-6 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                      {slide.title}
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/75 sm:mt-5 sm:text-lg">
                      {slide.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
                      <Link href="/studios" className="cursor-pointer">
                        <Button
                          size="lg"
                          className="h-11 cursor-pointer px-5 text-sm font-semibold sm:px-6"
                        >
                          Explore Studios
                          <ArrowRight className="size-4" />
                        </Button>
                      </Link>

                      <Link href="/about" className="cursor-pointer">
                        <Button
                          variant="outline"
                          size="lg"
                          className="h-11 cursor-pointer border-border bg-background/40 px-5 text-sm font-semibold text-foreground backdrop-blur-sm hover:border-primary/40 hover:bg-primary/10 hover:text-primary sm:px-6"
                        >
                          Host Your Space
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Suspense>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute right-0 bottom-8 left-0 z-10 hidden justify-center md:flex">
        <span className="flex size-8 animate-bounce items-center justify-center rounded-full border border-border bg-background/20 text-foreground/70">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
            aria-hidden="true"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </span>
      </div>
    </section>
  );
}