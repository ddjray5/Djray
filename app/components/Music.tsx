"use client";

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
  ];

  return (
    <section className="music-section">

  

  {/* ===== MUSIC CONTENT ===== */}

      {/* =====================================================
          TITLE
      ===================================================== */}

      <div className="music-title">
        <h2>MUSIC STYLE</h2>

        <p>
          A premium Open Format experience
          designed for every crowd and every event.
        </p>
      </div>

      {/* =====================================================
          MUSIC STYLES
      ===================================================== */}

      <div className="music-style-list">

        {musicStyles.map((style) => (
          <div
            className="music-style-item"
            key={style.name}
          >
            {style.name}
          </div>
        ))}

      </div>

    </section>
  );
}