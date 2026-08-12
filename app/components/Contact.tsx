"use client";

import "../styles/contact.css";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-content">

        {/* TITLE */}

        <h2 className="contact-title">
          CONTACT
        </h2>


        {/* ===== CONTACT TITLE DIVIDER ===== */}

        <div className="contact-section-divider contact-section-divider-top">
          <span className="contact-section-divider-diamond"></span>
        </div>


        {/* SUBTITLE */}

        <p className="contact-subtitle">
          Ready to book DJ RAY for your next event?
        </p>


        {/* CONTACT BUTTONS */}

        <div className="contact-buttons">

          {/* CALL */}

          <a
            href="tel:+971554057288"
            className="btn-gold"
          >
            <FaPhoneAlt />
            <span>CALL</span>
          </a>


          {/* WHATSAPP */}

          <a
            href="https://wa.me/971554057288"
            className="btn-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            <span>WHATSAPP</span>
          </a>


          {/* EMAIL */}

          <a
            href="mailto:YOUR@email.com"
            className="btn-gold"
          >
            <FaEnvelope />
            <span>EMAIL</span>
          </a>

        </div>


        {/* ===== CONTACT BOTTOM DIVIDER ===== */}

        <div className="contact-section-divider contact-section-divider-bottom">
          <span className="contact-section-divider-diamond"></span>
        </div>


      </div>

    </section>
  );
}