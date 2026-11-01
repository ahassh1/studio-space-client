import Image from "next/image";
export interface IStudio {
     id?: string;
  _id?: string;
  title: string;
  category: string;
  hourlyRate: string;
  location: string;
  imageUrl: string;
  amenities: string[];
  overview: string;
}
const StudioCard = ({ studio }: { studio: IStudio }) => {
  return (
    <div className="overflow-hidden rounded-xl border shadow-sm">
      <Image
        src={studio.imageUrl}
        alt={studio.title}
        width={500}
        height={300}
        className="h-52 w-full object-cover"
      />

      <div className="space-y-3 p-5">
        <div>
          <p className="text-sm text-primary">{studio.category}</p>
          <h2 className="text-xl font-semibold">{studio.title}</h2>
          <p className="text-sm text-muted-foreground">
            {studio.location}
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          {studio.overview}
        </p>

        <div className="flex flex-wrap gap-2">
          {studio.amenities.map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-muted px-3 py-1 text-xs"
            >
              {amenity}
            </span>
          ))}
        </div>

        <p className="font-semibold">
          ${studio.hourlyRate} <span className="text-sm font-normal">/ hour</span>
        </p>
      </div>
    </div>
  );
};

export default StudioCard;