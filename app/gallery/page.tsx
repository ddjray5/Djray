import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";

import "../styles/gallery-page.css";

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