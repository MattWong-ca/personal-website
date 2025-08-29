import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Matthew Wong | Waterloo",
  description: "Software and Product. Studying engineering at UWaterloo. I win a lot of hackathons!",
  verification: {
    google: '5K6dT33iyD2EPXTe4QuMelr7U-MwJE0r9V03CdLHUXc',
  }
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
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
