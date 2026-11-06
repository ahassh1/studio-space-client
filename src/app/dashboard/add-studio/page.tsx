"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { PageLoader } from "@/components/shared/spinner";
import FormCard from "./_component/FormCard";
import { LogIn } from "lucide-react";

export default function AddStudioPage() {
  // Get logged-in user session
  const { data: session, isPending } = authClient.useSession();

  // Wait for session
  if (isPending) {
    return <PageLoader label="Checking your session..." className="min-h-[70vh]" />;
  }

  if (!session) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <h2 className="text-xl font-bold">Login Required</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Please login to add your studio listing.
        </p>
           <Link
  href="/login"
  className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
>
  <LogIn className="size-4" />
  Login to Continue
</Link>
      </div>
    );
  }

  return (
    <FormCard
      userName={session.user.name || ""}
      userEmail={session.user.email || ""}
    />
  );
}