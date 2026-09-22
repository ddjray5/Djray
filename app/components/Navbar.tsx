"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import "../styles/navbar.css";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isMarketPage = pathname === "/market" || pathname.startsWith("/market/");
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

          {/* MARKET */}
          <a
            href="/market"
          >
            Market
          </a>

          {/* DJ COURSE */}
          <a
            href="https://djray-training-1jcotc9mk-dj-ray.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            DJ Course
          </a>

        </nav>

        {isMarketPage && (
          <div className="market-navbar-actions">
            <button
              type="button"
              className="market-navbar-action"
              aria-label="Search"
            >
              <FaSearch />
            </button>

            <button
              type="button"
              className="market-navbar-action"
              aria-label="Favorites"
            >
              <FaHeart />
              <span className="market-navbar-badge">0</span>
            </button>

            <button
              type="button"
              className="market-navbar-action"
              aria-label="Shopping Bag"
            >
              <FaShoppingBag />
              <span className="market-navbar-badge">0</span>
            </button>
          </div>
        )}

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

          {/* MARKET */}
          <Link
            href="/market"
            onClick={closeMenu}
          >
            Market
          </Link>

          {/* DJ COURSE */}
          <a
            href="https://djray-training-1jcotc9mk-dj-ray.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            DJ Course
          </a>

        </nav>

      </div>
    </header>
  );
}
