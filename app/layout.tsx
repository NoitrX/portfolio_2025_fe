import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import FlyonuiScript from "@/components/FlyonuiScript";
import "./globals.css";
import Footer from "@/components/self/Footer";

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
      <body className={`${getJakartaSans.className} antialiased`}>
        {children}
        <Footer />
      </body>
      <FlyonuiScript />
    </html>
  );
}
