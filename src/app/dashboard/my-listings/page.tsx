
import ListingCard, { IListing } from "./_component/ListingCard";
import ListingEmptyState from "./_component/ListingEmptyState";
import { getTokenFromServer } from "@/lib/getTokenFromServer";

const ListingPage = async () => {
  const token = await getTokenFromServer();

  const res = await fetch(`http://localhost:8000/dashboard/my-listings`, {
    headers: {
      authorization: `Bearer ${token}`, // Send bearer token
    },
  });

  const listings = await res.json();

  return (
    <div className="min-h-screen bg-slate-100 p-6 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-2xl font-bold text-slate-800 dark:text-white">
          My Listings
        </h1>

        {listings.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {listings.map((listing: IListing) => (
              <ListingCard key={listing._id} listing={listing} />
            ))}
          </div>
        ) : (
          <ListingEmptyState />
        )}
      </div>
    </div>
  );
};

export default ListingPage;