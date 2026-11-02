import StudioDetailsContent from "@/components/studios/studio-details-content";
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

  const res = await fetch(`http://localhost:8000/studios/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch studio details");
  }

  const data: IStudio = await res.json();
  console.log(data)

  return <StudioDetailsContent studio={data} />;
};
export default StudioDetails;