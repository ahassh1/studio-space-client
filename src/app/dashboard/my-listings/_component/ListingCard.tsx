"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Edit, MapPin, Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
  const router = useRouter();

// Delete studio
const handleDelete = async () => {
  const res = await fetch(`http://localhost:8000/studios/${listing._id}`, {
    method: "DELETE",
  });
 if (res.ok) {
  toast.success("Studio deleted successfully!");
  router.refresh();
} else {
  toast.error("Failed to delete studio!");
}
};
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
<AlertDialog>
  <div className="flex gap-3 border-t border-slate-200 pt-3 dark:border-slate-800">
    <Link
      href={`/studios/edit/${listing._id}`}
      className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-1.5 py-1.5 text-sm font-medium text-white transition hover:opacity-90"
    >
      <Edit size={15} />
      Edit Studio
    </Link>

    <AlertDialogTrigger className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-1.5 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-100 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-950/60">
      <Trash2 size={15} />
      Delete
    </AlertDialogTrigger>
  </div>

  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>
        Are you absolutely sure?
      </AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently
        delete this studio from your database.
      </AlertDialogDescription>
    </AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel className="cursor-pointer">
        Cancel
      </AlertDialogCancel>

      <AlertDialogAction
        className="cursor-pointer bg-red-600 text-white hover:bg-red-700"
        onClick={handleDelete}
      >
        Delete Studio
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </div>
  </div>
  );
};
export default ListingCard;