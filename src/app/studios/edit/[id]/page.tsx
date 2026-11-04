import UpdateStudioForm from "./UpdateStudioForm";

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
  const res = await fetch(`http://localhost:8000/studios/${id}`, {
    cache: "no-store",
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