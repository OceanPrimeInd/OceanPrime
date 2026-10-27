import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// ✅ Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata
export const metadata: Metadata = {
  title: "OceanPrime",
  description: "OceanPrime — Quantum Sea Change Platform",
};

// ✅ Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800 flex flex-col min-h-screen`}
      >
        {/* ✅ Header (Top Navigation Bar) */}
        <Header />

        {/* ✅ Main Content Area */}
        <main className="flex-grow">{children}</main>

        {/* ✅ Footer (Always at the bottom) */}
        <Footer />
      </body>
    </html>
  );
}
