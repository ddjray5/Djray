"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";
import "../styles/services.css";

const services = [
  {
    image: "/clubs.webp",
    title: "CLUBS & LOUNGES",
    bookingType: "Club & Lounge",
    description:
      "High-energy Open Format DJ performances designed for clubs, lounges and nightlife venues.",
    features: [
      "Premium Sound",
      "Luxury Experience",
      "Crowd Reading",
    ],
  },

  {
    image: "/wedding.webp",
    title: "WEDDINGS",
    bookingType: "Wedding",
    description:
      "Elegant music experiences for luxury weddings from the ceremony to the final dance.",
    features: [
      "Ceremony Music",
      "Reception",
      "First Dance",
    ],
  },

  {
    image: "/yacht.webp",
    title: "YACHT PARTIES",
    bookingType: "Yacht Party",
    description:
      "Premium Open Format DJ entertainment for luxury yachts and sunset cruises.",
    features: [
      "Sunset Sessions",
      "VIP Experience",
      "Luxury Vibes",
    ],
  },

  {
    image: "/corporate.webp",
    title: "CORPORATE EVENTS",
    bookingType: "Corporate Event",
    description:
      "Professional DJ entertainment for corporate events, gala dinners, exhibitions and special occasions.",
    features: [
      "Professional Setup",
      "Elegant Music",
      "Event Coordination",
    ],
  },

  {
    image: "/private.webp",
    title: "PRIVATE EVENTS",
    bookingType: "Private Event",
    description:
      "Exclusive DJ experiences for birthdays, engagements, family gatherings and private celebrations.",
    features: [
      "Personalized Music",
      "Premium Experience",
      "Crowd Interaction",
    ],
  },

  {
    image: "/vip.webp",
    title: "VIP EVENTS",
    bookingType: "VIP Event",
    description:
      "Premium music experiences created for exclusive VIP parties and luxury celebrations.",
    features: [
      "Luxury Atmosphere",
      "Exclusive Music",
      "Personalized Experience",
    ],
  },

  {
    image: "/festival.webp",
    title: "FESTIVALS",
    bookingType: "Festival",
    description:
      "Powerful Open Format DJ performances for festivals and large-scale public events.",
    features: [
      "High Energy",
      "Live Performance",
      "Crowd Experience",
    ],
  },

  {
    image: "/Birthday.webp",
    title: "BIRTHDAY PARTIES",
    bookingType: "Birthday Party",
    description:
      "Energetic and personalized DJ entertainment designed to make every birthday celebration unforgettable.",
    features: [
      "Custom Playlist",
      "Party Atmosphere",
      "Guest Interaction",
    ],
  },
];

export default function Services() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBook = (service: string) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  return (
    <>
      {/* SERVICES SECTION */}
      <section id="services" className="services">

        {/* TITLE */}
        <div className="services-title">
          <h2>SERVICES</h2>

          <p>
            Luxury DJ Experiences For Every Occasion
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">

          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
            >

              {/* IMAGE */}
              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                />
              </div>

              {/* CONTENT */}
              <div className="service-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                {/* FEATURES */}
                <ul className="service-features">
                  {service.features.map(
                    (feature, featureIndex) => (
                      <li key={featureIndex}>
                        {feature}
                      </li>
                    )
                  )}
                </ul>

                {/* BOOK BUTTON */}
                <button
                  type="button"
                  className="service-book"
                  onClick={() => handleBook(service.bookingType)}
                >
                  BOOK
                </button>

              </div>
            </div>
          ))}

        </div>

      </section>

      {/* BOOKING MODAL */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={selectedService}
      />
    </>
  );
}