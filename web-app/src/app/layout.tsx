import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Head from "next/head";
import sdk from "@farcaster/frame-sdk";
import { useState, useEffect } from "react";

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
  description: "Software developer, experienced in full stack, iOS, & Web3. Studying engineering at UWaterloo. Building in blockchain!",
  verification: {
    google: '5K6dT33iyD2EPXTe4QuMelr7U-MwJE0r9V03CdLHUXc',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [context, setContext] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [safeAreaInsets, setSafeAreaInsets] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const context = await sdk.context;
        if (context) {
          if (context.client?.safeAreaInsets) {
            setSafeAreaInsets(context.client.safeAreaInsets);
          }
          setContext(context);
        } else {
          setError("Failed to load Farcaster context");
        }
        await sdk.actions.ready();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to initialize SDK",
        );
        console.error("SDK initialization error:", err);
      }
    };

    load();
  }, []);

  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description!} />
        <meta name="fc:frame" content='{
          "version": "next",
          "imageUrl": "https://private-user-images.githubusercontent.com/66754344/320710831-95fb8908-0904-454b-b579-df3c6e5ad64e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzk2MTkwMDMsIm5iZiI6MTczOTYxODcwMywicGF0aCI6Ii82Njc1NDM0NC8zMjA3MTA4MzEtOTVmYjg5MDgtMDkwNC00NTRiLWI1NzktZGYzYzZlNWFkNjRlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjE1VDExMjUwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM2YjU2MjNkNDIwYTk0NWEzZGZhM2UzNmM5YjkzODA3OTg4MjlhOGUyNmQ3NjQxOTA1NzlmNTY5ZjZiZTFlNTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.vL4PhZyIoAwNJpj971G9hOcxymfcn4WTeGhvAag79Os",
          "button":{
            "title": "Visit",
            "action": {
              "type": "launch_frame",
              "name": "mattwong.ca",
              "url": "https://mattwong.ca",
              "splashImageUrl": "https://mattwong.ca/about.png",
              "splashBackgroundColor": "#000000"
            }
          }
        }' data-rh="true"/>
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
