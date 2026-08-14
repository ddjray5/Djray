"use client";

import { useEffect, useRef } from "react";
import "../styles/gallery.css";

const images = [
  "/gallery1.webp",
  "/gallery2.webp",
  "/gallery3.webp",
];

export default function Gallery() {
  const gallerySectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = gallerySectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("gallery-visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={gallerySectionRef}
      className="gallery luxury-section"
    >

      {/* =====================================================
          GALLERY TITLE
      ===================================================== */}

      <div className="gallery-title luxury-section-title">

        <h2>
          GALLERY
        </h2>

        <p>
          Moments, Energy & Unforgettable Nights
        </p>

      </div>


      {/* =====================================================
          GALLERY GRID
      ===================================================== */}

      <div className="gallery-grid">

        {images.map((image, index) => (
          <div
            className="gallery-card"
            key={index}
            style={{
              transitionDelay: `${0.35 + index * 0.18}s`,
            }}
          >

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