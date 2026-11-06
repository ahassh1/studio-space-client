import UpdateStudioForm from "./UpdateStudioForm";
import {getTokenFromServer} from "@/lib/getTokenFromServer"
// Studio fields
export interface IStudioForm {
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

// Fetch studio
async function getStudio(id: string): Promise<IStudioForm> {
   const token = await getTokenFromServer()
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studios/${id}`, {
    cache: "no-store",
    headers: {
    authorization: `Bearer ${token}`,
  },
  });

  const data = await res.json();

  return {
    title: data.title,
    category: data.category,
    hourlyRate: data.hourlyRate,
    securityDeposit: data.securityDeposit,
    maxCapacity: data.maxCapacity,
    location: data.location,
    imageUrl: data.imageUrl,
    amenities: data.amenities,
    overview: data.overview,
    userName: data.userName,
    userEmail: data.userEmail,
  };
}

// Update studio page
export default async function UpdateStudioPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Get studio data
  const studio = await getStudio(id);

  return <UpdateStudioForm id={id} studio={studio} />;
}