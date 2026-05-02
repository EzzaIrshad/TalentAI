import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LandingFooter from "@/ui/sections/footers/landing-footer";
import LandingHeader from "@/ui/sections/headers/landing-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neo",
  description: "Business Automation Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LandingHeader />
        {children}
        <LandingFooter />
      </body>
    </html>
  );
}
