"use client";

import "../styles/contact.css";

import {
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact">

      {/* =====================================================
          CONTACT TITLE
      ===================================================== */}

      <div className="contact-title">
        <h2>
          CONTACT
        </h2>
      </div>


      {/* =====================================================
          CONTACT SUBTITLE
      ===================================================== */}

      <p className="contact-subtitle">
        Ready to book DJ RAY for your next event?
      </p>


      {/* =====================================================
          CONTACT BUTTONS
      ===================================================== */}

      <div className="contact-buttons">


        {/* ================= WHATSAPP ================= */}

        <a
          href="https://wa.me/971554057288"
          className="contact-button contact-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >

          <FaWhatsapp className="contact-icon" />

          <span>
            WhatsApp
          </span>

        </a>



        {/* ================= EMAIL ================= */}

        <a
          href="mailto:djray5@gmail.com"
          className="contact-button contact-email"
        >

          <FaEnvelope className="contact-icon" />

          <span>
            Email
          </span>

        </a>


      </div>


    </section>
  );
}