"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Users,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Star,
  CalendarDays,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { IStudio } from "@/app/studios/[id]/page";

const StudioDetailsContent = ({ studio }: { studio: IStudio }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <p className="mb-3 text-sm font-medium text-primary">
          {studio.category}
        </p>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {studio.title}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="size-4" />
            {studio.location}
          </span>

          <span className="flex items-center gap-1">
            <Star className="size-4" />
            No reviews yet
          </span>
        </div>
      </div>

      {/* Gallery */}
      <div className="mb-12 overflow-hidden rounded-2xl">
        <Image
          src={studio.imageUrl}
          alt={studio.title}
          width={1200}
          height={650}
          priority
          className="h-75 w-full object-cover sm:h-112"
        />
      </div>

      {/* Main Content */}
      <div className="grid gap-10 lg:grid-cols-3">
        {/* Left Content */}
        <div className="space-y-10 lg:col-span-2">
          {/* Overview */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              About This Workspace
            </h2>

            <p className="leading-8 text-muted-foreground">
              {studio.overview}
            </p>
          </section>

          {/* Specifications */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold">
              Workspace Specifications
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-xl border p-5">
                <Clock className="size-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Hourly Rate
                  </p>
                  <p className="font-semibold">
                    ${studio.hourlyRate} / hour
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border p-5">
                <ShieldCheck className="size-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Security Deposit
                  </p>
                  <p className="font-semibold">
                    ${studio.securityDeposit}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border p-5">
                <Users className="size-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Maximum Capacity
                  </p>
                  <p className="font-semibold">
                    {studio.maxCapacity} People
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border p-5">
                <MapPin className="size-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Category
                  </p>
                  <p className="font-semibold">{studio.category}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Amenities */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold">
              Available Amenities
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {studio.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <CheckCircle2 className="size-5 text-primary" />
                  {amenity}
                </div>
              ))}
            </div>
          </section>

          {/* Host Information */}
          <section className="rounded-2xl border p-6">
            <h2 className="mb-5 text-2xl font-semibold">
              Workspace Host
            </h2>

            <div className="flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-xl font-semibold text-primary">
                {studio.userName.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold">{studio.userName}</h3>
                <p className="text-sm text-muted-foreground">
                  {studio.userEmail}
                </p>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <Star className="size-5 text-primary" />
              <h2 className="text-2xl font-semibold">Guest Reviews</h2>
            </div>

            <div className="rounded-xl border p-8 text-center">
              <p className="font-medium">No reviews yet</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Be the first to share your experience.
              </p>
            </div>
          </section>
        </div>

        {/* Booking Card */}
        <aside>
          <div className="sticky top-24 rounded-2xl border bg-card p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">
              Starting from
            </p>

            <h2 className="my-2 text-3xl font-bold">
              ${studio.hourlyRate}
              <span className="text-base font-normal text-muted-foreground">
                {" "}/ hour
              </span>
            </h2>

            <div className="my-5 border-t" />

            <p className="mb-4 text-sm text-muted-foreground">
              Book this creative workspace and bring your ideas to life.
            </p>

            <Button
              onClick={() => setIsBookingOpen(true)}
              className="w-full cursor-pointer"
              size="lg"
            >
              <CalendarDays className="mr-2 size-4" />
              Book Workspace Now
            </Button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Security deposit: ${studio.securityDeposit}
            </p>
          </div>
        </aside>
      </div>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-2xl bg-background p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                Book Workspace
              </h2>

              <button
                onClick={() => setIsBookingOpen(false)}
                className="cursor-pointer rounded-full p-2 hover:bg-muted"
                aria-label="Close booking modal"
              >
                <X className="size-5" />
              </button>
            </div>

            <p className="mb-5 text-sm text-muted-foreground">
              You are booking <strong>{studio.title}</strong>.
            </p>

            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Booking Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border bg-background p-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Start Time
                </label>
                <input
                  type="time"
                  className="w-full rounded-lg border bg-background p-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Number of Hours
                </label>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-full rounded-lg border bg-background p-3"
                />
              </div>

              <Button
                className="w-full"
                variant="outline"
                onClick={() => setIsBookingOpen(false)}
              >
                Close
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Booking submission will be connected to the booking API later.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default StudioDetailsContent;