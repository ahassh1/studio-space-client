"use client";
import Image from "next/image";
import { useState } from "react";
import {
  CalendarDays,
  MapPin,
  Star,
  ShieldCheck,
  Users,
  Clock,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { IStudio } from "@/app/studios/[id]/page";
import StudioDetailsModal from "./studio-details-modal";

interface StudioDetailsContentProps {
  studio: IStudio;
}

export default function StudioDetailsContent({
  studio,
}: StudioDetailsContentProps) {
  // Booking modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Studio header section */}
      <div className="mb-8">
        {/* Studio category badge */}
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          {studio.category}
        </span>

        {/* Studio title heading */}
        <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
          {studio.title}
        </h1>

        {/* Studio location details */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="size-4" />
            {studio.location}
          </span>

          {/* Studio review rating */}
          <span className="flex items-center gap-1">
            <Star className="size-4 fill-yellow-400 text-yellow-400" />
            No reviews yet
          </span>
        </div>
      </div>

      {/* Studio image gallery */}
      <div className="relative mb-10 h-[300px] overflow-hidden rounded-2xl md:h-[500px]">
        <Image
          src={studio.imageUrl}
          alt={studio.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>

      {/* Main content layout */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Studio information column */}
        <div className="space-y-10 lg:col-span-2">
          {/* Studio overview section */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              About This Space
            </h2>

            <p className="leading-7 text-muted-foreground">
              {studio.overview}
            </p>
          </section>

          {/* Workspace specifications */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold">
              Workspace Details
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Hourly pricing information */}
              <div className="flex items-center gap-3 rounded-xl border p-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Clock className="size-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Hourly Rate
                  </p>
                  <p className="font-semibold">
                    ${studio.hourlyRate} / hour
                  </p>
                </div>
              </div>

              {/* Security deposit information */}
              <div className="flex items-center gap-3 rounded-xl border p-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <ShieldCheck className="size-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Security Deposit
                  </p>
                  <p className="font-semibold">
                    ${studio.securityDeposit}
                  </p>
                </div>
              </div>

              {/* Maximum guest capacity */}
              <div className="flex items-center gap-3 rounded-xl border p-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Users className="size-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Maximum Capacity
                  </p>
                  <p className="font-semibold">
                    {studio.maxCapacity} People
                  </p>
                </div>
              </div>

              {/* Workspace category information */}
              <div className="flex items-center gap-3 rounded-xl border p-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Check className="size-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Workspace Type
                  </p>
                  <p className="font-semibold">
                    {studio.category}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Available amenities section */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold">
              What This Place Offers
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {studio.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <Check className="size-5 text-primary" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Studio host information */}
          <section className="rounded-2xl border p-6">
            <h2 className="mb-5 text-2xl font-semibold">
              Meet Your Host
            </h2>

            <div className="space-y-2">
              <p className="font-semibold">{studio.userName}</p>

              <p className="text-sm text-muted-foreground">
                {studio.userEmail}
              </p>
            </div>
          </section>

          {/* Guest reviews section */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Guest Reviews
            </h2>

            <div className="rounded-xl border p-6 text-center">
              <Star className="mx-auto mb-3 size-8 text-muted-foreground" />

              <p className="font-medium">No reviews yet</p>

              <p className="mt-1 text-sm text-muted-foreground">
                Be the first to review this workspace.
              </p>
            </div>
          </section>
        </div>

        {/* Booking information column */}
        <aside>
          {/* Booking price card */}
          <div className="sticky top-24 rounded-2xl border p-6 shadow-sm">
            <div className="mb-5">
              <p className="text-3xl font-bold">
                ${studio.hourlyRate}
                <span className="text-base font-normal text-muted-foreground">
                  {" "}
                  / hour
                </span>
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Security deposit: ${studio.securityDeposit}
              </p>
            </div>

            {/* Booking availability information */}
            <div className="mb-5 flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="size-4" />
              Contact the host through a booking request.
            </div>

            {/* Open booking modal */}
            <Button
              onClick={() => setIsBookingOpen(true)}
              className="w-full cursor-pointer"
              size="lg"
            >
              <CalendarDays className="mr-2 size-4" />
              Book Workspace Now
            </Button>

            {/* Booking payment information */}
            <p className="mt-4 text-center text-xs text-muted-foreground">
              You can review your booking details before submitting.
            </p>
          </div>
        </aside>
      </div>

      {/* Booking modal component */}
      <StudioDetailsModal
        studio={studio}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}