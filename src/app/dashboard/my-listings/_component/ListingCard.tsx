"use client";
import Image from "next/image";
import Link from "next/link";
import { Edit, Trash2, MapPin } from "lucide-react";

export interface IListing {
  _id: string;
  title: string;
  category: string;
  hourlyRate: string;
  securityDeposit: string;
  maxCapacity: string;
  location: string;
  imageUrl: string;
  amenities: string[];
  overview: string;
}
interface IListingCardProps {
  listing: IListing;
}
const ListingCard = ({ listing }: IListingCardProps) => {
//   const router = useRouter();

//   // Delete listing
//   const handleDelete = async () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this listing?"
//     );

//     if (!confirmDelete) return;

//     const res = await fetch(
//       `http://localhost:8000/dashboard/my-listings/${listing._id}`,
//       {
//         method: "DELETE",
//       }
//     );

//     if (res.ok) {
//       router.refresh();
//     }
//   };

  return (
  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
  {/* Studio image */}
  <Image
    src={listing.imageUrl || "/images/studio-placeholder.png"}
    alt={listing.title}
    width={400}
    height={250}
    className="h-36 w-full object-cover"
  />

  <div className="space-y-2 p-3">
    {/* Studio information */}
    <div>
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">
          {listing.category}
        </span>

        <p className="text-base font-bold text-slate-900 dark:text-white">
          ${listing.hourlyRate}
          <span className="text-xs font-normal text-slate-500">/hr</span>
        </p>
      </div>

      <h2 className="truncate text-base font-bold text-slate-800 dark:text-white">
        {listing.title}
      </h2>

      <p className="mt-1 flex items-center gap-1 truncate text-xs text-slate-500 dark:text-slate-400">
        <MapPin size={13} />
        {listing.location}
      </p>
    </div>

    <p className="line-clamp-2 text-xs text-slate-600 dark:text-slate-300">
      {listing.overview}
    </p>

    {/* Studio details */}
    <div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
      <span>Capacity: {listing.maxCapacity}</span>
      <span>•</span>
      <span>Deposit: ${listing.securityDeposit}</span>
    </div>

    {/* Action buttons */}
    <div className="flex gap-2 border-t border-slate-200 pt-2 dark:border-slate-800">
      <Link
        href={`/studios/edit/${listing._id}`}
        className="flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-lg bg-primary px-2 py-2 text-xs font-medium text-white transition hover:opacity-90"
      >
        <Edit size={14} />
        Edit
      </Link>

      <button
        className="flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-lg border border-red-200 px-2 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950"
      >
        <Trash2 size={14} />
        Delete
      </button>
    </div>
  </div>
</div>
  );
};
export default ListingCard;