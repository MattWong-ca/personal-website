import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
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
  title: "Matthew Wong - Waterloo",
  description: "Software developer, experienced in full stack, iOS, & Web3. Studying engineering at UWaterloo. Building in blockchain!"
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
