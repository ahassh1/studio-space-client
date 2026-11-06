
import StudioDetailsContent from "@/components/studios/studio-details-content";
import { getTokenFromServer } from "@/lib/getTokenFromServer";
import Link from "next/link";
import { Building2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface IStudio {
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
  userName: string;
  userEmail: string;
}

const StudioDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const token = await getTokenFromServer();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studios/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch studio details");
  }

  const data: IStudio | null = await res.json();

  if (!data || !data._id) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex size-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Building2 className="size-10" />
        </div>

        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          No Studio Found
        </h2>

        <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
          This studio is currently unavailable or may have been removed.
          Explore other creative spaces on StudioSpace.
        </p>

        <Link
  href="/studios"
  className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
>
  <Search className="size-4" />
  Explore Studios
</Link>
      </div>
    );
  }

  return <StudioDetailsContent studio={data} />;
};

export default StudioDetails;
