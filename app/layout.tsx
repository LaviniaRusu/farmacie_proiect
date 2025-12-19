import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { Search } from "lucide-react";
import { SearchProvider } from "@/components/search-context";

const font = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farmacie",
  description: "Farmacie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.variable} antialiased bg-white text-gray-900 min-h-screen flex flex-col`}
      >
        <SearchProvider>
          <ModalProvider />
          <ToastProvider />

          <Navbar />

          {/* CONTENT */}
          <main className="flex-1">{children}</main>

          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
