'use client'
import { useState } from "react";
import Image from "next/image";
import { CalendarDays, Clock, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/shared/spinner";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {getTokenFromClient} from "@/lib/getTokenFromClient"
export interface IBooking {
  _id: string;
  studioId: string;
  studioTitle: string;
  imageUrl: string;
  userName: string;
  userEmail: string;
  bookingDate: string;
  startTime: string;
  hours: number;
  hourlyRate: string;
  totalPrice: number;
  securityDeposit: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
}

interface IBookingCardProps {
  booking: IBooking;
}

// Booking status styles
const statusStyles = {
  Pending:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400",
  Confirmed:
    "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
  Completed:
    "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
  Cancelled:
    "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
};

const BookingCard = ({ booking }: IBookingCardProps) => {
  const router = useRouter();
  const [cancelling, setCancelling] = useState(false);

 // Cancel booking
const handleCancel = async () => {
  if (cancelling) return;

  setCancelling(true);

  try {
    const token = await getTokenFromClient();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/dashboard/my-bookings/${booking._id}/cancel`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.ok) {
      toast.success("Booking cancelled successfully!");
      router.refresh();
    } else {
      toast.error("Failed to cancel booking!");
    }
  } catch {
    toast.error("Something went wrong!");
    setCancelling(false);
  }

  setCancelling(false);
};

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">

        {/* Studio image */}
        <Image
          src={booking.imageUrl}
          alt={booking.studioTitle}
          width={120}
          height={100}
          className="h-28 w-full rounded-lg object-cover sm:w-32"
        />

        {/* Booking details */}
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              {booking.studioTitle}
            </h2>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                statusStyles[booking.status]
              }`}
            >
              {booking.status}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
            <p className="flex items-center gap-1">
              <CalendarDays size={15} />
              {booking.bookingDate}
            </p>

            <p className="flex items-center gap-1">
              <Clock size={15} />
              {booking.startTime} · {booking.hours} Hours
            </p>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300">
            Hourly Rate: ${booking.hourlyRate}
          </p>
        </div>

        {/* Booking price */}
        <div className="flex items-center justify-between gap-3 border-t pt-3 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
          <div className="sm:text-right">
            <p className="text-xl font-bold text-primary">
              ${booking.totalPrice}
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Deposit: ${booking.securityDeposit}
            </p>
          </div>

          {/* Cancel pending booking */}
          {booking.status === "Pending" && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleCancel}
              disabled={cancelling}
              className="cursor-pointer border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-900 dark:hover:bg-red-950"
            >
              {cancelling ? (
                <>
                  <Spinner size="sm" />
                  Cancelling...
                </>
              ) : (
                <>
                  <XCircle size={15} />
                  Cancel Booking
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default BookingCard;