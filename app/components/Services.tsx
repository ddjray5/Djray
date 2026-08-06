"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "../styles/services.css";

const services = [
  {
    image: "/clubs.jpg",
    title: "CLUBS & LOUNGES",
    description:
      "High-energy Open Format DJ performances designed for clubs, lounges and nightlife venues.",
    features: [
      "Premium Sound",
      "Luxury Experience",
      "Crowd Reading",
    ],
  },

  {
    image: "/wedding.jpg",
    title: "WEDDINGS",
    description:
      "Elegant music experiences for luxury weddings from the ceremony to the final dance.",
    features: [
      "Ceremony Music",
      "Reception",
      "First Dance",
    ],
  },

  {
    image: "/yacht.jpg",
    title: "YACHT PARTIES",
    description:
      "Premium Open Format DJ entertainment for luxury yachts and sunset cruises.",
    features: [
      "Sunset Sessions",
      "VIP Experience",
      "Luxury Vibes",
    ],
  },

  {
    image: "/private.jpg",
    title: "PRIVATE EVENTS",
    description:
      "Exclusive music experiences for birthdays, engagements and private celebrations.",
    features: [
      "Birthdays",
      "VIP Parties",
      "Private Celebrations",
    ],
  },

  {
    image: "/beach.jpg",
    title: "BEACH & POOL PARTIES",
    description:
      "Luxury Open Format DJ performances for beach clubs, pool parties and exclusive summer events.",
    features: [
      "Beach Clubs",
      "Pool Parties",
      "Sunset Sessions",
    ],
  },

  {
    image: "/Birthday.jpg",
    title: "BIRTHDAY PARTIES",
    description:
      "Luxury birthday celebrations with customized playlists and unforgettable entertainment.",
    features: [
      "Custom Playlist",
      "Professional DJ",
      "Party Atmosphere",
    ],
  },
];

export default function Services() {
  return (
    <section className="services">

      <div className="services-title">
        <h2>SERVICES</h2>
        <p>Premium Entertainment Experiences</p>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <motion.div
            key={index}
            className="service-card"
            initial={{
  opacity: 0,
  y: 100,
  scale: 0.92,
}}

whileInView={{
  opacity: 1,
  y: 0,
  scale: 1,
}}

viewport={{
  once: true,
  amount: 0.2,
}}

transition={{
  duration: 0.9,
  delay: index * 0.18,
  ease: [0.22, 1, 0.36, 1],
}}


          >

            <Image
              src={service.image}
              alt={service.title}
              width={700}
              height={500}
            />

            <div className="service-content">

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul>
  {service.features.map((feature, i) => (
    <li key={i}>✔ {feature}</li>
  ))}
</ul>

<motion.button
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    delay: index * 0.18 + 0.45,
    duration: 0.5,
  }}
>
  BOOK NOW
</motion.button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}