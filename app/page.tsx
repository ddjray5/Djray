"use client";

import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";

export default function Home() {

  useEffect(() => {
    const elements = document.querySelectorAll(".luxury-section-title");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* PRELOADER */}
      <Preloader />

      {/* NAVBAR */}
      <Navbar />

      {/* ==============================
          HERO — FIRST SECTION
      ============================== */}
      <Hero />

      {/* ==============================
          MUSIC
      ============================== */}
      <div id="music">
        <Music />
      </div>

      {/* ==============================
          SERVICES
      ============================== */}
      <div id="services">
        <Services />
      </div>

      {/* ==============================
          ABOUT
      ============================== */}
      <div id="about">
        <About />
      </div>

      {/* ==============================
          WHY CHOOSE
      ============================== */}
      <WhyChoose />

      {/* ==============================
          GALLERY
      ============================== */}
      <div id="gallery">
        <Gallery />
      </div>

      {/* ==============================
          TESTIMONIALS
      ============================== */}
      <Testimonials />

      {/* ==============================
          CONTACT
      ============================== */}
      <Contact />

      {/* ==============================
          FOOTER
      ============================== */}
      <Footer />
    </>
  );
}