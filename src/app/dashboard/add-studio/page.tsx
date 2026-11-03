"use client";
import { useState } from "react";
import { Building2, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Studio categories
const categories = [
  "Photo Studio",
  "Film Stage",
  "Podcast Lounge",
  "Music Suite",
  "Workshop",
  "Other",
];

// Available studio amenities
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

// Initial form values
const initialForm = {
  title: "",
  category: "",
  hourlyRate: "",
  securityDeposit: "",
  maxCapacity: "",
  location: "",
  imageUrl: "",
  amenities: [] as string[],
  overview: "",
  userName: "Your Name",
  userEmail: "your@email.com",
};

export default function AddStudioPage() {
  // Store form values
  const [form, setForm] = useState(initialForm);

  // Update input values
  const update = (field: keyof typeof form, value: string) => {
    setForm({ ...form, [field]: value });
  };

  // Toggle selected amenities
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

  // Submit studio details
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch("http://localhost:8000/dashboard/add-studio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);
  };

  // Reset all fields
  const handleReset = () => {
    setForm(initialForm);
  };

  return (
    <main className="min-h-screen bg-background px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Page Heading */}
        <div className="mb-8">
          <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Building2 className="size-6" />
          </div>

          <h1 className="text-3xl font-light tracking-tight text-foreground md:text-5xl">
            Add New Studio
          </h1>

          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            List your creative space and let creators discover your studio.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8"
        >
          <div className="grid gap-8">
            {/* Studio Information */}
            <div className="grid gap-5">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Studio Information
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Enter the basic details of your studio.
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="title">Studio Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Midnight Creative Studio"
                  value={form.title}
                  onChange={(event) => update("title", event.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label>Studio Category</Label>
                <Select
                  value={form.category}
                  onValueChange={(value) => update("category", value ?? "")}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select studio category" />
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

              <div className="grid gap-2">
                <Label htmlFor="overview">Detailed Overview</Label>
                <Textarea
                  id="overview"
                  placeholder="Describe your studio, available facilities, equipment, and what makes it special..."
                  className="min-h-36"
                  value={form.overview}
                  onChange={(event) => update("overview", event.target.value)}
                  required
                />
              </div>
            </div>

            {/* Pricing and Capacity */}
            <div className="grid gap-5">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Pricing & Capacity
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Set your hourly price and guest capacity.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div className="grid gap-2">
                  <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    min="1"
                    placeholder="85"
                    value={form.hourlyRate}
                    onChange={(event) =>
                      update("hourlyRate", event.target.value)
                    }
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="securityDeposit">
                    Security Deposit ($)
                  </Label>
                  <Input
                    id="securityDeposit"
                    type="number"
                    min="0"
                    placeholder="100"
                    value={form.securityDeposit}
                    onChange={(event) =>
                      update("securityDeposit", event.target.value)
                    }
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="maxCapacity">Max Capacity</Label>
                  <Input
                    id="maxCapacity"
                    type="number"
                    min="1"
                    placeholder="10"
                    value={form.maxCapacity}
                    onChange={(event) =>
                      update("maxCapacity", event.target.value)
                    }
                    required
                  />
                </div>
              </div>
            </div>

            {/* Studio Location */}
            <div className="grid gap-5">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Studio Location
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Where can creators find your studio?
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="location">Location / Full Address</Label>
                <Input
                  id="location"
                  placeholder="e.g., Nashville, Tennessee, USA"
                  value={form.location}
                  onChange={(event) => update("location", event.target.value)}
                  required
                />
              </div>
            </div>

            {/* Studio Image */}
            <div className="grid gap-5">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Studio Image
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Add a photo URL to showcase your space.
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  type="url"
                  placeholder="https://example.com/studio-image.jpg"
                  value={form.imageUrl}
                  onChange={(event) => update("imageUrl", event.target.value)}
                  required
                />
              </div>
            </div>

            {/* Studio Amenities */}
            <div className="grid gap-5">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Studio Amenities
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Select all facilities available in your studio.
                </p>
              </div>

              {/* Select studio amenities */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {amenities.map((amenity) => (
                  <label
                    key={amenity}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-sm transition-colors ${
                      form.amenities.includes(amenity)
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={form.amenities.includes(amenity)}
                      onChange={() => handleAmenity(amenity)}
                      className="size-4 accent-primary"
                    />
                    {amenity}
                  </label>
                ))}
              </div>
            </div>

            {/* Owner Information */}
            <div className="grid gap-5">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Owner Information
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your account details are read-only.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="userName">Owner Name</Label>
                  <Input
                    id="userName"
                    value={form.userName}
                    readOnly
                    className="bg-muted text-muted-foreground"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="userEmail">Owner Email</Label>
                  <Input
                    id="userEmail"
                    type="email"
                    value={form.userEmail}
                    readOnly
                    className="bg-muted text-muted-foreground"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="mt-10 flex flex-col-reverse justify-end gap-3 border-t border-border pt-6 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              className="cursor-pointer border-destructive/30 text-destructive hover:bg-destructive/5 hover:text-destructive"
            >
              <Trash2 />
              Reset Form
            </Button>

            <Button type="submit" className="cursor-pointer">
              <Plus />
              Add Studio in list
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}