import "../styles/music.css";

export default function Music() {

  const genres = [
    "Arabic Hits",
    "Commercial",
    "House",
    "Afro House",
    "Tech House",
    "Deep House",
    "Hip-Hop",
    "R&B",
    "EDM",
    "International"
  ];

  return (

    <section id="music" className="music">

      <div className="music-title">

        <h2>
          MUSIC STYLE
        </h2>

        <p>
          A premium Open Format experience designed for every crowd and every event.
        </p>

      </div>

      <div className="music-grid">

        {genres.map((genre, index) => (

          <div
            className="music-card"
            key={index}
          >

            <span>{genre}</span>

          </div>

        ))}

      </div>

    </section>

  );
}