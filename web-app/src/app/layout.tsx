import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["700", "500"],
  style: ["normal"]
});

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Matthew Wong | Software Developer",
  description: "Matthew Wong. Waterloo. Software developer. Blockchain. Web3.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
