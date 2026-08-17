import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sagar Sharma — Full Stack Developer",
  description:
    "Sagar Sharma is a Full Stack Developer specializing in React.js, Next.js, Node.js and AI/RAG-powered applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-canvas text-neutral-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
