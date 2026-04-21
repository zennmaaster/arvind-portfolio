import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/effects/CursorGlow";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arvind Chandrashekar | Behavioral Scientist & AI Systems Architect",
  description:
    "Portfolio of Arvind Chandrashekar — 18+ years in behavioral science, AI agent systems, and research organization building. 4 patents, 284 research projects, published at FTW 2026.",
  openGraph: {
    title: "Arvind Chandrashekar | Behavioral Scientist & AI Systems Architect",
    description:
      "18+ years | 4 patents | 284 research projects | Published researcher",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${playfair.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CursorGlow />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
