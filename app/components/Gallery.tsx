"use client";

import "../styles/gallery.css";

const images = [
  "/gallery1.webp",
  "/gallery2.webp",
  "/gallery3.webp",
];

export default function Gallery() {
  return (
    <section className="gallery">

      <div className="gallery-title">
        <h2>Gallery</h2>
        <p>Moments, Energy & Unforgettable Nights</p>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={image}
              alt={`DJ RAY Gallery ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

    </section>
  );
}