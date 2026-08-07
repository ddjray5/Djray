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
  return (
    <>
      <Preloader />
      
      <Navbar />
      <Hero />
<Music />
<Services />
<WhyChoose />
<Gallery />
<About />
<Testimonials />
<Contact />
<Footer />
    </>
  );
}