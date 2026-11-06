"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/shared/spinner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Save } from "lucide-react";
import type { IStudioForm } from "./page";
import {getTokenFromClient} from "@/lib/getTokenFromClient"

// Form props
interface UpdateStudioFormProps {
  id: string;
  studio: IStudioForm;
}

// Studio categories
const categories = [
  "Photo Studio",
  "Film Stage",
  "Podcast Lounge",
  "Music Suite",
  "Workshop",
  "Other",
];

// Studio amenities
const amenities = [
  "High-Speed Wi-Fi",
  "Professional Lighting",
  "Soundproofing",
  "Parking",
  "Air Conditioning",
  "Photography Equipment",
  "Microphone",
  "Changing Room",
  "Restroom",
  "Kitchen",
];

export default function UpdateStudioForm({
  id,
  studio,
}: UpdateStudioFormProps) {
  const router = useRouter();

  // Submission state
  const [saving, setSaving] = useState(false);

  // Store form data
const [form, setForm] = useState({
  ...studio,
  title: studio.title || "",
  category: studio.category || "",
  overview: studio.overview || "",
  hourlyRate: studio.hourlyRate || "",
  securityDeposit: studio.securityDeposit || "",
  maxCapacity: studio.maxCapacity || "",
  location: studio.location || "",
  imageUrl: studio.imageUrl || "",
  amenities: studio.amenities || [],
  userName: studio.userName || "",
  userEmail: studio.userEmail || "",
});
  // Update fields
  const update = (
    field: Exclude<keyof IStudioForm, "amenities">,
    value: string | null,
  ) => {
    setForm({
      ...form,
      [field]: value ?? "",
    });
  };

  // Toggle amenities
  const handleAmenity = (amenity: string) => {
    if (form.amenities.includes(amenity)) {
      setForm({
        ...form,
        amenities: form.amenities.filter((item) => item !== amenity),
      });
    } else {
      setForm({
        ...form,
        amenities: [...form.amenities, amenity],
      });
    }
  };

// Update studio
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (saving) return;

  setSaving(true);

  try {
    const token = await getTokenFromClient();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studios/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      toast.success("Studio updated successfully!");
      router.push("/dashboard/my-listings");
    } else {
      toast.error("Failed to update studio!");
      setSaving(false);
    }
  } catch {
    toast.error("Something went wrong!");
    setSaving(false);
  }
};

  return (
    <main className="min-h-screen bg-background px-4 py-5">
      <div className="mx-auto max-w-4xl">
        {/* Page heading */}
        <div className="mb-4">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-2 cursor-pointer"
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>

          <h1 className="text-2xl font-bold">Update Studio</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Edit your studio information.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border bg-card p-4 shadow-sm"
        >
          {/* Studio details */}
          <section className="grid gap-3 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label>Studio Title</Label>
              <Input
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                required
              />
            </div>

            <div className="grid gap-1.5">
              <Label>Studio Category</Label>
              <Select
                value={form.category}
                onValueChange={(value) => update("category", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-1.5 sm:col-span-2">
              <Label>Studio Overview</Label>
              <Textarea
                value={form.overview}
                onChange={(e) => update("overview", e.target.value)}
                className="min-h-20 resize-none"
                required
              />
            </div>
          </section>

          {/* Pricing details */}
          <section className="grid gap-3 sm:grid-cols-3">
            <div className="grid gap-1.5">
              <Label>Hourly Rate ($)</Label>
              <Input
                type="number"
                value={form.hourlyRate}
                onChange={(e) => update("hourlyRate", e.target.value)}
                required
              />
            </div>

            <div className="grid gap-1.5">
              <Label>Security Deposit ($)</Label>
              <Input
                type="number"
                value={form.securityDeposit}
                onChange={(e) => update("securityDeposit", e.target.value)}
                required
              />
            </div>

            <div className="grid gap-1.5">
              <Label>Maximum Capacity</Label>
              <Input
                type="number"
                value={form.maxCapacity}
                onChange={(e) => update("maxCapacity", e.target.value)}
                required
              />
            </div>
          </section>

          {/* Location details */}
          <section className="grid gap-3 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label>Location</Label>
              <Input
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                required
              />
            </div>

            <div className="grid gap-1.5">
              <Label>Image URL</Label>
              <Input
                type="url"
                value={form.imageUrl}
                onChange={(e) => update("imageUrl", e.target.value)}
                required
              />
            </div>
          </section>

          {/* Studio amenities */}
          <section>
            <Label className="mb-2 block">Studio Amenities</Label>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {amenities.map((amenity) => (
                <label
                  key={amenity}
                  className="flex cursor-pointer items-center gap-2 rounded-md border p-2 text-xs"
                >
                  <input
                    type="checkbox"
                    checked={form.amenities.includes(amenity)}
                    onChange={() => handleAmenity(amenity)}
                    className="accent-primary"
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </section>

          {/* Owner information */}
          <section className="grid gap-3 border-t pt-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label>Owner Name</Label>
              <Input
                value={form.userName}
                readOnly
                className="bg-muted/50"
              />
            </div>

            <div className="grid gap-1.5">
              <Label>Owner Email</Label>
              <Input
                value={form.userEmail}
                readOnly
                className="bg-muted/50"
              />
            </div>
          </section>

          {/* Form actions */}
          <div className="flex justify-end border-t pt-3">
            <Button
              type="submit"
              disabled={saving}
              className="cursor-pointer"
            >
              {saving ? (
                <>
                  <Spinner size="sm" />
                  Updating...
                </>
              ) : (
                <>
                  <Save className="size-4" />
                  Update Studio
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}