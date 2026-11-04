import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "StudioSpace — Discover & Book Creative Studios",
    template: "%s · StudioSpace",
  },
  description:
    "StudioSpace is a peer-to-peer marketplace where creators discover, book, and rent creative studios.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${josefinSans.variable} flex min-h-screen flex-col antialiased`}>
        <ThemeProvider>
            <Toaster position="top-right" />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider> 
      </body>
    </html>
  );
}