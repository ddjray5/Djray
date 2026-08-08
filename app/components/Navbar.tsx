"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "../styles/navbar.css";

export default function Navbar() {
  const router = useRouter();

const handleHome = () => {
  closeMenu();

  if (window.location.pathname === "/") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  } else {
    router.push("/");
  }
};
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

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

          <a
  href="#top"
  onClick={(e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    closeMenu();
  }}
>
  Home
</a>

          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
          >
            About
          </a>

          <a
            href="#music"
            onClick={(e) => scrollToSection(e, "music")}
          >
            Music
          </a>

          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "services")}
          >
            Services
          </a>

          <a
            href="#gallery"
            onClick={(e) => scrollToSection(e, "gallery")}
          >
            Gallery
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact
          </a>

        </nav>

        {/* MOBILE MENU BUTTON */}
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

        {/* MOBILE MENU */}
        <nav
          className={`mobile-nav ${
            menuOpen ? "open" : ""
          }`}
        >

          <button
  type="button"
  className="nav-home-button"
  onClick={handleHome}
>
  Home
</button>

          <a
            href="#about"
            onClick={(e) =>
              scrollToSection(e, "about")
            }
          >
            About
          </a>

          <a
            href="#music"
            onClick={(e) =>
              scrollToSection(e, "music")
            }
          >
            Music
          </a>

          <a
            href="#services"
            onClick={(e) =>
              scrollToSection(e, "services")
            }
          >
            Services
          </a>

          <a
            href="#gallery"
            onClick={(e) =>
              scrollToSection(e, "gallery")
            }
          >
            Gallery
          </a>

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