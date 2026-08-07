"use client";

import Image from "next/image";
import "../styles/services.css";

const services = [
  {
    image: "/clubs.webp",
    title: "CLUBS & LOUNGES",
    description:
      "High-energy Open Format DJ performances designed for clubs, lounges and nightlife venues.",
    features: ["Premium Sound", "Luxury Experience", "Crowd Reading"],
  },

  {
    image: "/wedding.webp",
    title: "WEDDINGS",
    description:
      "Elegant music experiences for luxury weddings from the ceremony to the final dance.",
    features: ["Ceremony Music", "Reception", "First Dance"],
  },

  {
    image: "/yacht.webp",
    title: "YACHT PARTIES",
    description:
      "Premium Open Format DJ entertainment for luxury yachts and sunset cruises.",
    features: ["Sunset Sessions", "VIP Experience", "Luxury Vibes"],
  },

  {
    image: "/private.webp",
    title: "PRIVATE EVENTS",
    description:
      "Exclusive music experiences for birthdays, engagements and private celebrations.",
    features: ["Birthdays", "VIP Parties", "Private Celebrations"],
  },

  {
    image: "/beach.webp",
    title: "BEACH & POOL PARTIES",
    description:
      "Luxury Open Format DJ performances for beach clubs, pool parties and exclusive summer events.",
    features: ["Beach Clubs", "Pool Parties", "Sunset Sessions"],
  },

  {
    image: "/Birthday.webp",
    title: "BIRTHDAY PARTIES",
    description:
      "Luxury birthday celebrations with customized playlists and unforgettable entertainment.",
    features: ["Custom Playlist", "Professional DJ", "Party Atmosphere"],
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-title">
        <h2>SERVICES</h2>
        <p>Premium Entertainment Experiences</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <Image
              src={service.image}
              alt={service.title}
              width={700}
              height={500}
              loading="lazy"
            />

            <div className="service-content">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <button>BOOK NOW</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}