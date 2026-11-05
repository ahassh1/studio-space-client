"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { PageLoader } from "@/components/shared/spinner";
import FormCard from "./_component/FormCard";
import { Button } from "@/components/ui/button";
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

        <Button asChild className="mt-5 cursor-pointer gap-2">
          <Link href="/login">
            <LogIn className="size-4" />
            Login to Continue
          </Link>
        </Button>
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