import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Particles from "./components/Particles";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Reveal from "./components/Reveal";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <>
      <Preloader />
      <Particles />
      <Navbar />
      <Hero />

      <Reveal>
        <Music />
      </Reveal>

      <Reveal>
        <Services />
      </Reveal>

      <Reveal>
        <WhyChoose />
      </Reveal>

      <Reveal>
        <Gallery />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Testimonials />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Footer />
    </>
  );
}