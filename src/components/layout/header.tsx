"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useSyncExternalStore } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Browse Studios", href: "/studios" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check theme mounting
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
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

          {/* Authentication Buttons */}
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
            <div className="flex gap-2 border-t border-border pt-4 sm:hidden">
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
          </nav>
        </div>
      )}
    </header>
  );
}