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
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="hero" id="top">

        {/* =====================================================
            LEFT — DJ IMAGE
        ===================================================== */}

        <div className="hero-left">
          <img
            src="/djray-new.webp"
            alt="DJ RAY"
            className="hero-image"
          />
        </div>

        {/* =====================================================
            RIGHT — CONTENT
        ===================================================== */}

        <div className="hero-right">

          {/* =====================================================
              LOGO
          ===================================================== */}

          <img
            src="/logo.png"
            alt="DJ RAY Logo"
            className="hero-logo"
          />

          {/* =====================================================
              SUBTITLE
          ===================================================== */}

          <p className="hero-subtitle">
            LUXURY OPEN FORMAT DJ
          </p>

          {/* =====================================================
              GOLD LINE
          ===================================================== */}

         <div className="gold-line">
  <div className="gold-line-diamond"></div>
</div>

          {/* =====================================================
              SERVICES
          ===================================================== */}

          <div className="hero-services">

            <span>CLUBS</span>

            <span>WEDDINGS</span>

            <span>YACHTS</span>

            <span>PRIVATE EVENTS</span>

            <span>POOL &amp; BEACH</span>

          </div>

          {/* =====================================================
              BUTTONS
          ===================================================== */}

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

          {/* =====================================================
              HERO END DIVIDER
              GOLD LINE + DIAMOND
              DIRECTLY UNDER WATCH PROMO
          ===================================================== */}

          <div className="hero-section-divider-bottom">
            <div className="hero-section-divider-diamond"></div>
          </div>

        </div>

      </section>

      {/* =====================================================
          PROMO MODAL
      ===================================================== */}

      <PromoModal
        isOpen={openPromo}
        onClose={() => setOpenPromo(false)}
      />

      {/* =====================================================
          BOOKING MODAL
      ===================================================== */}

      <BookingModal
        isOpen={openBooking}
        onClose={() => setOpenBooking(false)}
      />

    </>
  );
}