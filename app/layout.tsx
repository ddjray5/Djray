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

  title: "DJ in Abu Dhabi | Party & Wedding DJ | DJ RAY",

  description:
    "Professional DJ in Abu Dhabi for parties, weddings, private events, corporate events, yacht parties, beach clubs and luxury celebrations across Abu Dhabi and the UAE.",

  keywords: [
    "DJ RAY",
    "DJ RAY Abu Dhabi",
    "DJ in Abu Dhabi",
    "DJ Abu Dhabi",
    "Party DJ Abu Dhabi",
    "DJ Party in Abu Dhabi",
    "Wedding DJ Abu Dhabi",
    "Wedding DJ in Abu Dhabi",
    "DJ for Events in Abu Dhabi",
    "Private Event DJ Abu Dhabi",
    "Corporate DJ Abu Dhabi",
    "Yacht DJ Abu Dhabi",
    "Luxury DJ Abu Dhabi",
    "Open Format DJ Abu Dhabi",
    "Beach Club DJ",
    "Club DJ",
    "Wedding DJ UAE",
  ],

  
  

  

  openGraph: {
    title: "DJ in Abu Dhabi | Party & Wedding DJ | DJ RAY",
    description:
      "Professional DJ in Abu Dhabi for parties, weddings, private events, corporate events, yacht parties, beach clubs and luxury celebrations across Abu Dhabi and the UAE.",
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