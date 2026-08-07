"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          href="/"
          className="nav-logo"
          onClick={closeMenu}
        >
          <Image
            src="/logo2.png"
            alt="DJ RAY Logo"
            width={220}
            height={220}
            priority
            style={{
              width: "220px",
              height: "auto",
              objectFit: "contain",
              opacity: 0.9,
            }}
          />
        </Link>


        {/* DESKTOP MENU */}
        <nav className="nav-links">

          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/#about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/#music" onClick={closeMenu}>
            Music
          </Link>

          <Link href="/#services" onClick={closeMenu}>
            Services
          </Link>

          <Link href="/gallery" onClick={closeMenu}>
            Gallery
          </Link>

          <Link href="/#contact" onClick={closeMenu}>
            Contact
          </Link>

        </nav>


        {/* MOBILE MENU BUTTON */}
        <button
          className={`mobile-menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* MOBILE MENU */}
        <nav
          className={`mobile-nav ${
            menuOpen ? "open" : ""
          }`}
        >

          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/#about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/#music" onClick={closeMenu}>
            Music
          </Link>

          <Link href="/#services" onClick={closeMenu}>
            Services
          </Link>

          <Link href="/gallery" onClick={closeMenu}>
            Gallery
          </Link>

          <Link href="/#contact" onClick={closeMenu}>
            Contact
          </Link>

        </nav>

      </div>
    </header>
  );
}