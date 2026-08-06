import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: "DJ RAY | Luxury Open Format DJ in Abu Dhabi",

  description:
    "Professional Open Format DJ based in Abu Dhabi. Weddings, private events, corporate events, beach clubs, luxury venues and unforgettable music experiences.",

  keywords: [
    "DJ RAY",
    "DJ Abu Dhabi",
    "Open Format DJ",
    "Wedding DJ UAE",
    "Luxury DJ",
    "Corporate Events",
    "Private Events",
    "Beach Club DJ",
    "Club DJ",
  ],

  
  

  

  openGraph: {
    title: "DJ RAY | Luxury Open Format DJ",
    description:
      "Professional Open Format DJ in Abu Dhabi for weddings, clubs, private and corporate events.",
    images: ["/cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}