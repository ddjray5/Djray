"use client";

import { useState } from "react";
import Image from "next/image";
import "../styles/gallery.css";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="gallery" id="gallery">

      <div className="gallery-title">
        <h2>GALLERY</h2>
        <p>Luxury Moments • DJ RAY</p>
      </div>

      <div className="gallery-grid">

        {images.map((image, index) => (

          <div
            className="gallery-card"
            key={index}
            onClick={() => setSelectedImage(image)}
          >

            <Image
              src={image}
              alt={`Gallery ${index + 1}`}
              fill
              className="gallery-image"
            />

          </div>

        ))}

      </div>

      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <Image
            src={selectedImage}
            alt="Gallery Preview"
            fill
            className="lightbox-image"
          />

        </div>

      )}

    </section>
  );
}