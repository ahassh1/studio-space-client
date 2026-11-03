"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useSyncExternalStore } from "react";
import {
  Menu,
  Moon,
  Sun,
  X,
  PlusCircle,
  CalendarDays,
  Building2,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Browse Studios", href: "/studios" },
  // { name: "My Listings", href: "/my-listings" },
  // { name: "Add Studio", href: "/add-studio" },
  // { name: "My Bookings", href: "/my-bookings" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About Us", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check theme mounting
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // Get user session
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // Handle user logout
  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 text-foreground backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`cursor-pointer text-sm transition-colors ${
                pathname === link.href ||
                (link.href === "/studios" &&
                  pathname.startsWith("/studios/"))
                  ? "font-semibold text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle theme"
            className="cursor-pointer"
          >
            {mounted && theme === "dark" ? (
              <Sun className="size-5" />
            ) : mounted ? (
              <Moon className="size-5" />
            ) : (
              <span className="size-5" />
            )}
          </Button>

          {/* User Authentication */}
          {user ? (
            <Popover>
              <PopoverTrigger
                render={
                  <button
                    type="button"
                    aria-label="Open user menu"
                    className="cursor-pointer rounded-full bg-linear-to-r from-yellow-400 via-amber-300 to-yellow-500 p-0.5 shadow-md shadow-amber-500/20 transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30"
                  >
                    <Avatar className="size-9 border-2 border-background">
                      <AvatarImage
                        referrerPolicy="no-referrer"
                        src={user.image || ""}
                      />
                      <AvatarFallback className="bg-muted font-semibold text-foreground">
                        {user.name?.charAt(0).toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                }
              />

              <PopoverContent
                align="end"
                className="w-64 border border-border bg-popover p-2 text-popover-foreground shadow-lg"
              >
                <PopoverHeader className="border-b border-border px-2 pb-3">
                  <PopoverTitle className="text-sm font-semibold">
                    {user.name}
                  </PopoverTitle>
                  <PopoverDescription className="text-xs">
                    {user.email}
                  </PopoverDescription>
                </PopoverHeader>

                {/* User Navigation */}
                <div className="flex flex-col gap-1 py-2">
                  <Link
                    href="/add-studio"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <PlusCircle className="size-4" />
                    Add New Studio
                  </Link>

                  <Link
                    href="/my-bookings"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <CalendarDays className="size-4" />
                    My Bookings
                  </Link>

                  <Link
                    href="/my-listings"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Building2 className="size-4" />
                    My Listings
                  </Link>
                </div>

                {/* Sign Out Button */}
                <div className="border-t border-border pt-2">
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-destructive transition-colors hover:bg-destructive/10"
                  >
                    <LogOut className="size-4" />
                    Sign Out
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <Link href="/login" className="cursor-pointer">
                <Button variant="ghost" className="cursor-pointer">
                  Login
                </Button>
              </Link>

              <Link href="/register" className="cursor-pointer">
                <Button className="cursor-pointer">
                  Get Started
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`cursor-pointer text-sm transition-colors ${
                  pathname === link.href ||
                  (link.href === "/studios" &&
                    pathname.startsWith("/studios/"))
                    ? "font-semibold text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Authentication */}
            {!user && (
              <div className="flex gap-2 border-t border-border pt-4">
                <Link
                  href="/login"
                  className="flex-1 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant="outline"
                    className="w-full cursor-pointer"
                  >
                    Login
                  </Button>
                </Link>

                <Link
                  href="/register"
                  className="flex-1 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full cursor-pointer">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}