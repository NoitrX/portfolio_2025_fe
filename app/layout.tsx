import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import FlyonuiScript from "@/components/FlyonuiScript";
import "./globals.css";
import Footer from "@/components/self/Footer";
import Navbar from "@/components/self/Navbar";
import { Suspense } from "react";
import Loading from "./loading";

const getJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naufhal's Portfolio",
  description: "Naufhal 's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body className={`${getJakartaSans.className} antialiased`}>
          <div className="w-full p-0 lg:p-8">
            <Navbar />
            {children}
          </div>
          <Footer />
        </body>
      </Suspense>
      <FlyonuiScript />
    </html>
  );
}
