"use client";

import { useEffect, useRef } from "react";

import "../styles/footer.css";

import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {

  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {

    const footer = footerRef.current;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          footer.classList.add("footer-visible");

          observer.unobserve(footer);

        }

      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();

  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer"
    >

      <div className="footer-logo">

        {/* LOGO 2 */}
        <img
          src="/logo2.png"
          alt="DJ RAY"
          className="footer-logo-2"
        />

        {/* MAIN LOGO */}
        <img
          src="/logo.png"
          alt="DJ RAY"
          className="footer-logo-image"
        />

      </div>

      <p>
        Luxury Open Format DJ
        <br />
        Abu Dhabi • UAE
      </p>

      <div className="footer-socials">

        <a
          href="https://instagram.com/djray.5"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://tiktok.com/@djray.5"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok />
        </a>

        <a
          href="https://youtube.com/@DjRay.5"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube />
        </a>

        <a
          href="https://wa.me/971XXXXXXXXX"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>

      </div>

      <div className="footer-line"></div>

      <span className="footer-copy">
        © {new Date().getFullYear()} DJ RAY. All Rights Reserved.
      </span>

    </footer>
  );
}