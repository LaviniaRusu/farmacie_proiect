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
      <body className={`${font.variable} ${font.variable} antialiased`}>
        <SearchProvider>
          <ModalProvider />
          <ToastProvider />
          <Navbar />
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
