import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import Navbar from "@/components/Navbar/Navbar";
import BottomNav from "@/components/common/BottomNav";
import { ClientWrapper } from "@/components/ClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "intezar.dev.netlify.app",
  description: "Generated by Md Intezar Alam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <ClientWrapper>
          <Navbar />
          {children}
          <div className="mb-10 lg:mb-0" />
          <BottomNav />
        </ClientWrapper>
      </body>
    </html>
  );
}
