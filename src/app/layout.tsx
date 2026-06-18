import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/component/Navbar";
import Bottom from "@/component/Bottom";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Rex | Portfolio",
  description: "Portfolio of Rahul Rex, built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased bg-neutral-950 text-white`}
      >
        <Navbar/>
        
        <div style={{ flex: 1, maxWidth: 900, margin: "0 auto", padding: 24, width: "100%" }}>
          {children}
        </div>
        <Bottom/>
        <Analytics/>
      </body>
    </html>
  );
}
