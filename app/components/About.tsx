"use client";

import "../styles/about.css";
import Counter from "./Counter";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">

        <h3 className="about-subtitle gold-text">
          ABOUT DJ RAY
        </h3>

        <h2>Luxury Open Format DJ</h2>

        <p>
          Professional Open Format DJ based in Abu Dhabi with years of
          experience creating unforgettable moments at luxury weddings,
          clubs, beach & pool parties, yacht events, corporate events
          and exclusive private celebrations.
        </p>

        <p>
          Specializing in Open Format performances with a unique ability
          to read the crowd and create unforgettable experiences through
          Arabic, Commercial, House, Afro House, Hip-Hop, R&B and
          International music.
        </p>

        <div className="about-list">
          <span>✓ Open Format DJ</span>
          <span>✓ Luxury Weddings</span>
          <span>✓ Clubs & Lounges</span>
          <span>✓ Beach & Pool Parties</span>
          <span>✓ Yacht Parties</span>
          <span>✓ Corporate Events</span>
        </div>

        <div className="about-stats">

          <div className="stat">
  <h3 className="gold-text">2019</h3>
  <span>DJ Since</span>
</div>


          <div className="stat stat-events">
            <h3 className="gold-text">
              <Counter end={200} suffix="+" />
            </h3>
            <span>Events</span>
          </div>

          <div className="stat">
            <h3 className="gold-text">Abu Dhabi</h3>
            <span>Based</span>
          </div>

        </div>

      </div>
    </section>
  );
}