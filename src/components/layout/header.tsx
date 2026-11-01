"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";

export function Header() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  // Navigation styles
  const activeClass =
    "rounded-md bg-primary/10 px-3 py-2 font-semibold text-primary";

  const normalClass =
    "rounded-md px-3 py-2 font-medium text-foreground transition-colors hover:bg-muted";

  // Check active route
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 text-foreground backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link href="/" className={isActive("/") ? activeClass : normalClass}>
            Home
          </Link>

          <Link
            href="/studios"
            className={isActive("/studios") ? activeClass : normalClass}
          >
            Explore Studios
          </Link>

          <Link
            href="/how-it-works"
            className={isActive("/how-it-works") ? activeClass : normalClass}
          >
            How It Works
          </Link>

          <Link
            href="/about"
            className={isActive("/about") ? activeClass : normalClass}
          >
            About Us
          </Link>
        </nav>

        {/* Header Actions */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Authentication Buttons */}
          <div className="hidden items-center gap-2 sm:flex">
            <Link href="/login" className="cursor-pointer">
              <Button
                variant="outline"
                className="cursor-pointer border-border text-foreground hover:bg-muted"
              >
                Login
              </Button>
            </Link>

            <Link href="/register" className="cursor-pointer">
              <Button className="cursor-pointer">Register</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer text-foreground hover:bg-muted lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="flex flex-col gap-2 border-t border-border bg-background p-4 text-foreground lg:hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`cursor-pointer ${isActive("/") ? activeClass : normalClass}`}
          >
            Home
          </Link>

          <Link
            href="/studios"
            onClick={() => setOpen(false)}
            className={`cursor-pointer ${isActive("/studios") ? activeClass : normalClass}`}
          >
            Explore Studios
          </Link>

          <Link
            href="/how-it-works"
            onClick={() => setOpen(false)}
            className={`cursor-pointer ${isActive("/how-it-works") ? activeClass : normalClass}`}
          >
            How It Works
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className={`cursor-pointer ${isActive("/about") ? activeClass : normalClass}`}
          >
            About Us
          </Link>

          {/* Mobile Authentication */}
          <div className="mt-2 flex gap-2 border-t border-border pt-4">
            <Link
              href="/login"
              className="flex-1 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Button
                variant="outline"
                className="w-full cursor-pointer border-border text-foreground"
              >
                Login
              </Button>
            </Link>

            <Link
              href="/register"
              className="flex-1 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Button className="w-full cursor-pointer">Register</Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}