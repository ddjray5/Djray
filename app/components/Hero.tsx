"use client";

import Image from "next/image";
import { useState } from "react";

import "../styles/hero.css";

import PromoModal from "./PromoModal";
import BookingModal from "./BookingModal";

export default function Hero() {
  const [openPromo, setOpenPromo] = useState(false);
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <>
      <section className="hero">

        {/* LEFT */}
        <div className="hero-left">
          <img
            src="/djray-new.webp"
            alt="DJ RAY"
            className="hero-image"
          />
        </div>

        {/* RIGHT */}
        <div className="hero-right">

          <Image
            src="/logo.png"
            alt="DJ RAY Logo"
            width={1600}
            height={1000}
            priority
            className="hero-logo"
            style={{
              width: "520px",
              height: "auto",
            }}
          />

          <p className="hero-subtitle">
            LUXURY OPEN FORMAT DJ
          </p>

          

          <div className="hero-services">

  <h3>AVAILABLE FOR</h3>

  <div className="gold-line"></div>

  <ul>
    <li>LUXURY WEDDINGS</li>
    <li>CLUBS &amp; LOUNGES</li>
    <li>PRIVATE EVENTS</li>
    <li>CORPORATE EVENTS</li>
    <li>YACHT PARTIES</li>
    <li>BEACH &amp; POOL PARTIES</li>
    <li>BIRTHDAY PARTIES</li>
  </ul>

</div>

          <div className="hero-buttons">

            <button
              className="btn-gold"
              onClick={() => setOpenBooking(true)}
            >
              Book Now
            </button>

            <button
              className="watch-btn"
              onClick={() => setOpenPromo(true)}
            >
              Watch Promo
            </button>

          </div>

        </div>

      </section>

      <PromoModal
        isOpen={openPromo}
        onClose={() => setOpenPromo(false)}
      />

      <BookingModal
        isOpen={openBooking}
        onClose={() => setOpenBooking(false)}
      />
    </>
  );
}