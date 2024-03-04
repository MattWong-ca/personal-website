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
  description: "Software developer, experienced in full stack (TypeScript, React, Next), iOS (Swift, SwiftUI), and Web3 (Solidity, Ethers). Studying engineering at UWaterloo. Blockchain!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description!} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
