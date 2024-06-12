import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sagar Sharma",
  description: "Sagar Sharma's Portfolio - Showcasing Projects, Skills, and Experience",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{background: "#09090B"}} className={inter.className}>{children}</body>
    </html>
  );
}
