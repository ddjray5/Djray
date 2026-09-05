import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";

import "../styles/gallery-page.css";

export const metadata: Metadata = {
  title: "DJ Gallery Abu Dhabi | Events, Weddings & Parties | DJ RAY",
  description:
    "Explore DJ RAY's gallery from weddings, private parties, corporate events, yacht parties, beach clubs and luxury celebrations in Abu Dhabi and the UAE.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="gallery-page">

        <Gallery />

        

      </main>

    </>
  );
}