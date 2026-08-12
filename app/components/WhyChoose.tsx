import "../styles/whychoose.css";


const features = [
  {
    icon: "🎧",
    title: "Professional Open Format DJ",
    text: "Music tailored perfectly for every audience and every event.",
  },
  {
    icon: "🎵",
    title: "Customized Playlist",
    text: "Every event deserves its own unique soundtrack.",
  },
  {
    icon: "✨",
    title: "Luxury Weddings & VIP Events",
    text: "Elegant music experiences for premium occasions.",
  },
  {
    icon: "🌍",
    title: "International Music Selection",
    text: "Arabic • House • Afro • Latin • Commercial • Pop",
  },
  {
    icon: "⚡",
    title: "High Energy Performance",
    text: "Reading the crowd and keeping the dance floor alive.",
  },
  {
    icon: "🕒",
    title: "Always On Time & Fully Equipped",
    text: "Professional setup with reliable service every time.",
  },
  {
    icon: "🎚️",
    title: "Premium DJ Equipment",
    text: "Professional sound, lighting and high-end DJ setup for every event.",
  },
  {
    icon: "💃",
    title: "Crowd Reading Expertise",
    text: "Creating the perfect vibe by reading the crowd and adapting the music live.",
  },
];


export default function WhyChoose() {
  return (
    <section className="why">


      <div className="why-title">
        <h2>WHY CHOOSE DJ RAY</h2>


        <div className="why-title-divider">
          <span className="why-title-divider-diamond"></span>
        </div>


        <p>More Than Music... An Unforgettable Experience.</p>
      </div>


      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>


      {/* ===== WHY SECTION BOTTOM DIVIDER ===== */}

      <div className="why-section-divider why-section-divider-bottom">
        <span className="why-section-divider-diamond"></span>
      </div>


    </section>
  );
}