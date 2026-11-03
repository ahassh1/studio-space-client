"use client";
import Link from "next/link";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ImagePlus,
  Info,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

const Register = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [photoError, setPhotoError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Validate photo size
  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.size > 1024 * 1024) {
      setPhotoError("Image size must be less than 1 MB.");
      e.target.value = "";
    } else {
      setPhotoError("");
    }
  };

  // Handle registration
  const handleEmailSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const photo = formData.get("photo") as File;

    if (photo && photo.size > 1024 * 1024) {
      setPhotoError("Image size must be less than 1 MB.");
      return;
    }

    try {
      // Prepare profile image
      let image: string | undefined;

      if (photo && photo.size > 0) {
        image = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = () => {
            if (typeof reader.result === "string") {
              resolve(reader.result);
            } else {
              reject(new Error("Failed to read image."));
            }
          };

          reader.onerror = () => reject(new Error("Failed to read image."));
          reader.readAsDataURL(photo);
        });
      }

      // Create account
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        ...(image && { image }),
      });

      if (error) {
        throw new Error(error.message || "Registration failed.");
      }

      if (data) {
         console.log(data)
        router.push("/"); 
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-3">
      <div className="w-full max-w-lg rounded-2xl border bg-background p-4 shadow-xl shadow-black/5 sm:p-5">

        {/* Header */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Sparkles className="size-6" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Join StudioSpace and explore creative spaces.
          </p>
        </div>

        {/* Register Form */}
        <form className="space-y-4" onSubmit={handleEmailSignUp}>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <UserRound className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="pl-10"
                autoComplete="name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className="pl-10"
                autoComplete="email"
                required
              />
            </div>
          </div>

          {/* Profile Photo */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="photo">Profile Photo</Label>
              <span className="text-xs text-muted-foreground">(Optional)</span>
              <Info className="size-3.5 text-muted-foreground" />
            </div>

            <div className="relative">
              <ImagePlus className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="photo"
                name="photo"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handlePhotoChange}
                className="cursor-pointer pl-10 text-xs file:cursor-pointer"
              />
            </div>

            <p className="text-xs text-muted-foreground">
              JPG, PNG or WEBP · Max 1 MB
            </p>

            {photoError && (
              <p className="text-xs text-destructive">{photoError}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <div className="relative">
              <LockKeyhole className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                className="pl-10 pr-10"
                autoComplete="new-password"
                minLength={6}
                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Password needs 6 characters, one uppercase and one lowercase letter."
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>

            <p className="text-[11px] text-muted-foreground">
              Min. 6 characters · 1 uppercase · 1 lowercase
            </p>
          </div>

          {errorMessage && (
            <p className="text-sm text-destructive">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <Button type="submit" className="w-full cursor-pointer">
            Create Account
          </Button>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[11px] text-muted-foreground">
            OR CONTINUE WITH
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Google Button */}
        <Button
          type="button"
          variant="outline"
          className="w-full cursor-pointer"
        >
          Continue with Google
        </Button>

        {/* Login Redirect */}
        <p className="mt-5 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="cursor-pointer font-semibold text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;