"use client";
import Link from "next/link";
import { Mail, LockKeyhole, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const Login = () => {
  // Handle Login
  const handleEmailSignIn = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
// Get form data
const formData = new FormData(e.target);

// Convert form data to object
const user = Object.fromEntries(formData.entries()) as {
  email: string;
  password: string;
};
// Login user
const { data, error } = await authClient.signIn.email({
  ...user,
});

    if (error) throw new Error(error.message);
    if (data) redirect("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border bg-background p-6 shadow-xl shadow-black/5 sm:p-8">

        {/* Header */}
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Sparkles className="size-6" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue exploring StudioSpace.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleEmailSignIn}>

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

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>

              <Link
                href="/forgot-password"
                className="cursor-pointer text-xs font-medium text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <LockKeyhole className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="pl-10"
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <Button type="submit" className="w-full cursor-pointer">
            Login to Account
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">
            OR CONTINUE WITH
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Google Login */}
        <Button
          type="button"
          variant="outline"
          className="w-full cursor-pointer"
        >
          <svg viewBox="0 0 48 48" className="size-4" aria-hidden="true">
            <path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.9 6.1-15z" />
            <path fill="#34A853" d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44z" />
            <path fill="#FBBC05" d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8z" />
            <path fill="#EA4335" d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12z" />
          </svg>
          Continue with Google
        </Button>

        {/* Register Redirect */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="cursor-pointer font-semibold text-primary hover:underline"
          >
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;