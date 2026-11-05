import BookingCard, { IBooking } from "./_component/BookingCard";
import { CalendarDays, ClipboardList } from "lucide-react";
import {getTokenFromServer} from "@/lib/getTokenFromServer"
const BookingPage = async () => {

  const token = await getTokenFromServer()
// Fetch booking data
const res = await fetch(`http://localhost:8000/dashboard/my-bookings`, {
  headers: {
    authorization: `Bearer ${token}`, // Send bearer token
  },
});
const bookings: IBooking[] = await res.json(); // Parse booking data


  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Page heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-medium text-primary">
              Dashboard / My Bookings
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              My Bookings
            </h1>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Manage and keep track of your studio reservations.
            </p>
          </div>

          {/* Booking count */}
          <div className="flex w-fit items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="rounded-lg bg-primary/10 p-2 text-primary">
              <CalendarDays className="size-5" />
            </div>

            <div>
              <p className="text-xl font-bold">{bookings.length}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Total Bookings
              </p>
            </div>
          </div>
        </div>

        {/* Booking list */}
        {bookings.length > 0 ? (
          <div className="grid gap-4">
            {bookings.map((booking: IBooking) => (
              <BookingCard key={booking._id} booking={booking} />
            ))}
          </div>
        ) : (
          /* Empty booking state */
          <div className="flex min-h-88 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-5 rounded-2xl bg-primary/10 p-5 text-primary">
              <ClipboardList className="size-10" />
            </div>

            <h2 className="text-xl font-bold">
              No bookings yet
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
              You haven&apos;t booked any creative studios yet. Explore available
              studios and find the perfect space for your next project.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default BookingPage;