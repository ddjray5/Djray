"use client";

import "../styles/gallery.css";

const images = [
  "/gallery1.webp",
  "/gallery2.webp",
  "/gallery3.webp",
];

export default function Gallery() {
  return (
    <section className="gallery luxury-section">

      {/* =====================================================
          GALLERY TITLE
          ===================================================== */}

      <div className="gallery-title luxury-section-title">
        <h2>GALLERY</h2>

        <p>
          Moments, Energy & Unforgettable Nights
        </p>
      </div>

      {/* =====================================================
          GALLERY GRID
          ===================================================== */}

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