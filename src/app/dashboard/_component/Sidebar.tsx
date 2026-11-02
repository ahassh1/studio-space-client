"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  LayoutGrid,
  Menu,
  Plus,
  X,
} from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";

// Dashboard navigation items
const navItems = [
  { name: "Add Studio", href: "/dashboard/add-studio", icon: Plus },
  { name: "My Bookings", href: "/dashboard/my-bookings", icon: CalendarDays },
  { name: "My Listings", href: "/dashboard/my-listings", icon: LayoutGrid },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Check active page
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Mobile navigation bar */}
      <div className="sticky top-16 z-40 flex h-14 items-center gap-3 border-b bg-background px-4 md:hidden">
        <button onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu className="size-5" />
        </button>

        <Logo href="/studios" className="text-lg" markClassName="size-8" />
      </div>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          "sticky top-16 hidden h-[calc(100vh-4rem)] flex-col border-r bg-card transition-all md:flex",
          collapsed ? "w-20" : "w-64"
        )}
      >
        <div className="border-b p-4">
          <Logo href="/studios" className="text-lg" markClassName="size-8" />
        </div>

        <p className="px-5 py-4 text-xs font-semibold uppercase text-muted-foreground">
          {!collapsed && "Workspace"}
        </p>

        {/* Dashboard navigation links */}
        <nav className="flex flex-col gap-2 px-3">
          {navItems.map(({ name, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              title={collapsed ? name : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg p-3 text-sm transition-colors",
                isActive(href)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted",
                collapsed && "justify-center"
              )}
            >
              <Icon className="size-5 shrink-0" />
              {!collapsed && name}
            </Link>
          ))}
        </nav>

        {/* Sidebar bottom actions */}
        <div className="mt-auto space-y-2 border-t p-3">
          <Link
            href="/"
            title={collapsed ? "Back to site" : undefined}
            className="flex items-center gap-3 rounded-lg p-3 text-sm text-muted-foreground hover:bg-muted"
          >
            <ArrowLeft className="size-5 shrink-0" />
            {!collapsed && "Back to site"}
          </Link>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full rounded-lg p-3 text-left text-sm text-muted-foreground hover:bg-muted"
          >
            {collapsed ? "Expand +" : "Collapse sidebar"}
          </button>
        </div>
      </aside>

      {/* Mobile sidebar drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Close drawer background */}
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40"
          />

          <aside className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col bg-card shadow-xl">
            <div className="flex items-center justify-between border-b p-4">
              <Logo href="/studios" className="text-lg" markClassName="size-8" />

              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="size-5" />
              </button>
            </div>

            <p className="px-5 py-4 text-xs font-semibold uppercase text-muted-foreground">
              Workspace
            </p>

            {/* Mobile navigation links */}
            <nav className="flex flex-col gap-2 px-3">
              {navItems.map(({ name, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg p-3 text-sm",
                    isActive(href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="size-5" />
                  {name}
                </Link>
              ))}
            </nav>

            <Link
              href="/"
              className="mt-auto flex items-center gap-3 border-t p-4 text-sm text-muted-foreground"
            >
              <ArrowLeft className="size-5" />
              Back to site
            </Link>
          </aside>
        </div>
      )}
    </>
  );
}