"use client";
import { useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/shared/spinner";
import type { IStudio } from "@/app/studios/[id]/page";
import { useRouter } from "next/navigation";
import {getTokenFromClient} from "@/lib/getTokenFromClient"
interface StudioDetailsModalProps {
  studio: IStudio;
  isOpen: boolean;
  onClose: () => void;
}

export default function StudioDetailsModal({
  studio,
  isOpen,
  onClose,
}: StudioDetailsModalProps) {
  const router = useRouter();

  // Booking form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [hours, setHours] = useState(1);

  // Submission status
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Calculate booking price
  const totalPrice = Number(studio.hourlyRate) * hours;
 
  // Prepare booking data
const bookingData = {
  studioId: studio._id,
  studioTitle: studio.title,
  imageUrl: studio.imageUrl,
  userName: name,
  userEmail: email,
  bookingDate,
  startTime,
  hours,
  hourlyRate: studio.hourlyRate,
  totalPrice,
  securityDeposit: studio.securityDeposit,
};
  // Handle booking submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
          const token = await getTokenFromClient()
    setLoading(true);
    setMessage("");
    // Send booking request
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/my-bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
             authorization: `Bearer ${token}`, // Send bearer token
      },
      body: JSON.stringify(bookingData),
    });

    if (!res.ok) {
  const error = await res.json();
  console.log("Booking Error:", error);
  setMessage(error.msg || "Booking submission failed.");
  setLoading(false);
  return;
}

    // Show success message
    setMessage("Booking submitted successfully!");

    // Reset form fields
    setName("");
    setEmail("");
    setBookingDate("");
    setStartTime("");
    setHours(1);

    setLoading(false);
    router.push("/dashboard/my-bookings");
  };

  // Check modal visibility
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-background p-6 shadow-xl">
        {/* Modal heading section */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Book Workspace</h2>

          {/* Close booking modal */}
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label="Close booking modal"
            className="rounded-full p-2 hover:bg-muted disabled:pointer-events-none disabled:opacity-50"
          >
            <X className="size-5" />
          </button>
        </div>

        <p className="mb-5 text-sm text-muted-foreground">
          You are booking <strong>{studio.title}</strong>.
        </p>

        {/* Booking form fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Customer name field */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border bg-background p-3"
              placeholder="Enter your name"
            />
          </div>

          {/* Customer email field */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border bg-background p-3"
              placeholder="Enter your email"
            />
          </div>

          {/* Select booking date */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Booking Date
            </label>
            <input
              type="date"
              required
              min={new Date().toISOString().split("T")[0]}
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              className="w-full rounded-lg border bg-background p-3"
            />
          </div>

          {/* Select booking time */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Start Time
            </label>
            <input
              type="time"
              required
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full rounded-lg border bg-background p-3"
            />
          </div>

          {/* Select booking duration */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Number of Hours
            </label>
            <input
              type="number"
              min="1"
              required
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full rounded-lg border bg-background p-3"
              placeholder="Enter hours"
            />
          </div>

          {/* Display booking total */}
          <div className="flex justify-between border-t pt-4 text-sm">
            <span className="text-muted-foreground">Total Price</span>
            <span className="font-semibold">${totalPrice}</span>
          </div>

          {/* Display submission status */}
          {message && (
            <p className="text-center text-sm text-muted-foreground">
              {message}
            </p>
          )}

          {/* Submit booking information */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer"
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                Submitting...
              </>
            ) : (
              "Add Booking"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}