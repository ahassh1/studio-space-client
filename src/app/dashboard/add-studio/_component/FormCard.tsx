"use client";
import { useState } from "react";
import {
  Building2,
  Plus,
  Trash2,
  MapPin,
  Image as ImageIcon,
  CircleDollarSign,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {getTokenFromClient} from "@/lib/getTokenFromClient"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

// Form props
interface FormCardProps {
  userName: string;
  userEmail: string;
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

// Available amenities
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

export default function FormCard({
  userName,
  userEmail,
}: FormCardProps) {
    const router= useRouter()
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
    userName,
    userEmail,
  };

  // Store form values
  const [form, setForm] = useState(initialForm);

  // Update form values
  const update = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value,
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

  // Submit studio details
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
     const token = await getTokenFromClient()
    const res = await fetch("http://localhost:8000/dashboard/add-studio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         authorization: `Bearer ${token}`, // Send bearer token
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);
    if(res.ok) router.push("/dashboard/my-listings")
  };
  
  // Reset form
  const handleReset = () => {
    setForm(initialForm);
  };

  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Page Heading */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Building2 className="size-5" />
          </div>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Add New Studio
            </h1>
            <p className="mt-1 text-xs text-muted-foreground">
              List your creative space and let creators discover your studio.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Form Sections */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Studio Information */}
            <section className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="mb-4">
                <h2 className="text-base font-semibold text-foreground">
                  Studio Information
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Enter your studio details.
                </p>
              </div>

              <div className="grid gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="title">Studio Title</Label>
                  <Input
                    id="title"
                    placeholder="Midnight Creative Studio"
                    value={form.title}
                    onChange={(event) =>
                      update("title", event.target.value)
                    }
                    className="placeholder:text-xs placeholder:text-muted-foreground/50"
                    required
                  />
                </div>

                <div className="grid gap-1.5">
                  <Label>Studio Category</Label>

                  <Select
                    value={form.category}
                    onValueChange={(value) =>
                      update("category", value ?? "")
                    }
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

                <div className="grid gap-1.5">
                  <Label htmlFor="overview">Studio Overview</Label>
                  <Textarea
                    id="overview"
                    placeholder="Describe your studio and available facilities..."
                    value={form.overview}
                    onChange={(event) =>
                      update("overview", event.target.value)
                    }
                    className="min-h-24 resize-none placeholder:text-xs placeholder:text-muted-foreground/50"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Pricing and Capacity */}
            <section className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <CircleDollarSign className="size-5 text-primary" />

                <div>
                  <h2 className="text-base font-semibold text-foreground">
                    Pricing & Capacity
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Set your price and guest capacity.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="grid gap-1.5">
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
                    className="placeholder:text-xs placeholder:text-muted-foreground/50"
                    required
                  />
                </div>

                <div className="grid gap-1.5">
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
                    className="placeholder:text-xs placeholder:text-muted-foreground/50"
                    required
                  />
                </div>

                <div className="grid gap-1.5 sm:col-span-2">
                  <Label htmlFor="maxCapacity">Maximum Capacity</Label>
                  <Input
                    id="maxCapacity"
                    type="number"
                    min="1"
                    placeholder="10 guests"
                    value={form.maxCapacity}
                    onChange={(event) =>
                      update("maxCapacity", event.target.value)
                    }
                    className="placeholder:text-xs placeholder:text-muted-foreground/50"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Studio Location */}
            <section className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <MapPin className="size-5 text-primary" />

                <div>
                  <h2 className="text-base font-semibold text-foreground">
                    Studio Location
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Where can creators find your studio?
                  </p>
                </div>
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="location">Location / Full Address</Label>
                <Input
                  id="location"
                  placeholder="Dhaka, Bangladesh"
                  value={form.location}
                  onChange={(event) =>
                    update("location", event.target.value)
                  }
                  className="placeholder:text-xs placeholder:text-muted-foreground/50"
                  required
                />
              </div>
            </section>

            {/* Studio Image */}
            <section className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <ImageIcon className="size-5 text-primary" />

                <div>
                  <h2 className="text-base font-semibold text-foreground">
                    Studio Image
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Add an image to showcase your space.
                  </p>
                </div>
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  type="url"
                  placeholder="https://example.com/studio.jpg"
                  value={form.imageUrl}
                  onChange={(event) =>
                    update("imageUrl", event.target.value)
                  }
                  className="placeholder:text-xs placeholder:text-muted-foreground/50"
                  required
                />
              </div>
            </section>

            {/* Studio Amenities */}
            <section className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="mb-4">
                <h2 className="text-base font-semibold text-foreground">
                  Studio Amenities
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Select available facilities.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {amenities.map((amenity) => (
                  <label
                    key={amenity}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border p-2 text-xs transition-colors ${
                      form.amenities.includes(amenity)
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={form.amenities.includes(amenity)}
                      onChange={() => handleAmenity(amenity)}
                      className="size-3.5 accent-primary"
                    />

                    {amenity}
                  </label>
                ))}
              </div>
            </section>

            {/* Owner Information */}
            <section className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <UserRound className="size-5 text-primary" />

                <div>
                  <h2 className="text-base font-semibold text-foreground">
                    Owner Information
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Your account details.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="userName">Owner Name</Label>
                  <Input
                    id="userName"
                    value={form.userName}
                    readOnly
                    className="bg-muted/50 text-sm text-muted-foreground"
                  />
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="userEmail">Owner Email</Label>
                  <Input
                    id="userEmail"
                    type="email"
                    value={form.userEmail}
                    readOnly
                    className="bg-muted/50 text-sm text-muted-foreground"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Form Actions */}
          <div className="mt-4 flex flex-col-reverse justify-end gap-3 rounded-xl border border-border bg-card p-4 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              className="cursor-pointer"
            >
              <Trash2 className="size-4" />
              Reset Form
            </Button>

            <Button type="submit" className="cursor-pointer">
              <Plus className="size-4" />
              Add Studio to List
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}