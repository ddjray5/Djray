"use client";

import "../styles/contact.css";

import {
  FaPhone,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">

        <h2 className="contact-title">
          CONTACT
        </h2>

        <p className="contact-subtitle">
          Ready to book DJ RAY for your next event?
        </p>

        <div className="contact-buttons">
            <a
  href="tel:+971554057288"
  className="btn-outline"
>
  <FaPhone size={30} />
  <span>CALL NOW</span>
</a>

          <a
            href="https://wa.me/971554057288"
            className="btn-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} />
 
            <span>WhatsApp</span>
          </a>

          
          <a
            href="mailto:djray5@gmail.com"
            className="btn-outline"
          >
            <FaEnvelope className="contact-icon-gold" size={30} />
            <span>Email</span>
          </a>

        </div>

      </div>
    </section>
  );
}