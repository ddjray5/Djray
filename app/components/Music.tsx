"use client";

import { useEffect, useRef } from "react";
import "../styles/music.css";

type MusicStyle = {
  name: string;
};

export default function Music() {
  const musicStyles: MusicStyle[] = [
    { name: "ARABIC" },
    { name: "COMMERCIAL" },
    { name: "HOUSE" },
    { name: "AFRO HOUSE" },
    { name: "DEEP HOUSE" },
    { name: "TECH HOUSE" },
    { name: "HIP-HOP" },
    { name: "R&B" },
    { name: "EDM" },
    { name: "INTERNATIONAL" },
    { name: "LATIN" },
    { name: "POP" },
  ];

  const musicSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = musicSectionRef.current;

    if (!section) return;

    // تشغيل التأثير بمجرد ظهور القسم في الشاشة
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
    section.classList.add("music-visible");
    observer.disconnect();
}
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={musicSectionRef}
      className="music-section"
    >

      {/* MUSIC TITLE */}

      <div className="music-title">

        <h2 className="luxury-section-title">
          MUSIC STYLE
        </h2>

        <p>
          A premium Open Format experience
          designed for every crowd and every event.
        </p>

      </div>

      {/* MUSIC STYLES */}

      <div className="music-style-list">

        {musicStyles.map((style, index) => (
          <div
            className="music-style-item"
            key={style.name}
            style={{
              transitionDelay: `${0.15 + index * 0.08}s`,
            }}
          >
            {style.name}
          </div>
        ))}

      </div>

    </section>
  );
}