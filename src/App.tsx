import Header from "./components/Header"
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Hero from "./sections/Hero"
import FinalCta from "./sections/FinalCta";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./sections/Services";
import GlowCursor from "./components/GlowCursor";
import Testimonials from "./sections/Testimonials";
import StarBackground from "./components/StarBackground";
import Faq from "./sections/Faq";
import { useEffect } from "react";
import AOS from "aos";

function App() {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-out-cubic",
  });
}, []);

  return (
    <>
      <StarBackground />
      <GlowCursor />

      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App