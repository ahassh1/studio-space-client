import StudioCard, { IStudio } from "@/components/studios/studio-card";
const StudioPage = async () => {

const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studios`, {
  cache: "no-store",
});
  const data: IStudio[] = await res.json();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-semibold">Explore Studios</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((studio) => (
          <StudioCard key={studio._id} studio={studio} />
        ))}
      </div>
    </div>
  );
};

export default StudioPage;