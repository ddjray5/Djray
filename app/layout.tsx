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
  metadataBase: new URL("https://djray.vercel.app"),

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

const djRayBusinessSchema = {
  "@context": "https://" + "schema.org",
  "@type": "LocalBusiness",
  "@id": "https://" + "djray.vercel.app/#dj-ray",
  "name": "DJ RAY",
  "description": "Professional DJ in Abu Dhabi specializing in weddings, private parties, corporate events, yacht parties, beach clubs, clubs and luxury celebrations.",
  "url": "https://" + "djray.vercel.app/",
  "image": "https://" + "djray.vercel.app/djray-new.webp",
  "telephone": "+971554057288",
  "knowsAbout": [
    "DJ",
    "Wedding DJ",
    "Private Party DJ",
    "Corporate Event DJ",
    "Yacht Party DJ",
    "Club DJ",
    "Luxury Event DJ",
    "Open Format DJ"
  ],
  "sameAs": [
    "https://" + "\u0077\u0077\u0077.instagram.com/djray.5/",
    "https://" + "\u0077\u0077\u0077.tiktok.com/@djray.5",
    "https://" + "\u0077\u0077\u0077.youtube.com/@DjRay.5"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Abu Dhabi",
    "addressCountry": "AE"
  }
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
      <script
        id="dj-ray-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(djRayBusinessSchema) }}
      />
        {children}
      </body>
    </html>
  );
}