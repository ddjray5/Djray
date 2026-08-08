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
      {/* ==============================
          HERO
      ============================== */}
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

          {/* LOGO */}
         <img
  src="/logo.png"
  alt="DJ RAY Logo"
  className="hero-logo"
/>

          {/* GOLD LINE */}
          
          {/* SUBTITLE */}
         <p className="hero-subtitle">
  LUXURY OPEN FORMAT DJ
</p>

<div className="gold-line"></div>

<div className="hero-services">
  <span>CLUBS</span>
  <span>WEDDINGS</span>
  <span>YACHTS</span>
  <span>PRIVATE EVENTS</span>
  <span>POOL & BEACH</span>
</div>

          

          {/* BUTTONS */}
          <div className="hero-buttons">

            {/* BOOK NOW */}
            <button
              type="button"
              className="hero-book-btn"
              onClick={() => setOpenBooking(true)}
            >
              BOOK NOW
            </button>

            {/* WATCH PROMO */}
            <button
              type="button"
              className="hero-promo-btn"
              onClick={() => setOpenPromo(true)}
            >
              WATCH PROMO
            </button>

          </div>

        </div>

      </section>

      {/* PROMO MODAL */}
      <PromoModal
        isOpen={openPromo}
        onClose={() => setOpenPromo(false)}
      />

      {/* BOOKING MODAL */}
      <BookingModal
        isOpen={openBooking}
        onClose={() => setOpenBooking(false)}
      />
    </>
  );
}