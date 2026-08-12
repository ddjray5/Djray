"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "../styles/navbar.css";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // ==============================
  // CLOSE MENU
  // ==============================
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ==============================
  // HOME
  // ==============================
  const handleHome = () => {
    closeMenu();

    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } else {
      router.push("/");
    }
  };

  // ==============================
  // SCROLL TO SECTION
  // ==============================
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    closeMenu();

    const section = document.getElementById(id);

    if (!section) {
      console.log(`Section #${id} not found`);
      return;
    }

    const navbarHeight = 130;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "auto",
    });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* ==============================
            LOGO
        ============================== */}
        <Link
          href="/"
          className="nav-logo"
          onClick={handleHome}
        >
          <Image
            src="/logo2.png"
            alt="DJ RAY Logo"
            width={220}
            height={220}
            priority
            className="nav-logo-image"
          />
        </Link>

        {/* ==============================
            DESKTOP MENU
        ============================== */}
        <nav className="nav-links">

          {/* HOME */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();

              window.scrollTo({
                top: 0,
                behavior: "auto",
              });

              closeMenu();
            }}
          >
            Home
          </a>

          {/* ABOUT */}
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
          >
            About
          </a>

          {/* MUSIC */}
          <a
            href="#music"
            onClick={(e) => scrollToSection(e, "music")}
          >
            Music
          </a>

          {/* SERVICES */}
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "services")}
          >
            Services
          </a>

          {/* GALLERY */}
          <a
            href="#gallery"
            onClick={(e) => scrollToSection(e, "gallery")}
          >
            Gallery
          </a>

          {/* CONTACT */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact
          </a>

        </nav>

        {/* ==============================
            MOBILE MENU BUTTON
        ============================== */}
        <button
          className={`mobile-menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* ==============================
            MOBILE MENU
        ============================== */}
        <nav
          className={`mobile-nav ${
            menuOpen ? "open" : ""
          }`}
        >

          {/* HOME */}
          <button
            type="button"
            className="nav-home-button"
            onClick={handleHome}
          >
            Home
          </button>

          {/* ABOUT */}
          <a
            href="#about"
            onClick={(e) =>
              scrollToSection(e, "about")
            }
          >
            About
          </a>

          {/* MUSIC */}
          <a
            href="#music"
            onClick={(e) =>
              scrollToSection(e, "music")
            }
          >
            Music
          </a>

          {/* SERVICES */}
          <a
            href="#services"
            onClick={(e) =>
              scrollToSection(e, "services")
            }
          >
            Services
          </a>

          {/* GALLERY */}
          <a
            href="#gallery"
            onClick={(e) =>
              scrollToSection(e, "gallery")
            }
          >
            Gallery
          </a>

          {/* CONTACT */}
          <a
            href="#contact"
            onClick={(e) =>
              scrollToSection(e, "contact")
            }
          >
            Contact
          </a>

        </nav>

      </div>
    </header>
  );
}