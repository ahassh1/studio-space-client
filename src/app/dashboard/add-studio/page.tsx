"use client";

import { authClient } from "@/lib/auth-client";
import FormCard from "./_component/FormCard";

export default function AddStudioPage() {
  // Get logged-in user session
  const { data: session, isPending } = authClient.useSession();

  // Wait for session
  if (isPending) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center text-sm text-muted-foreground">
        Loading...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center text-sm text-muted-foreground">
        Please login first.
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