import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Hero from "./components/Hero";

import Partners from "./components/Partners";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Partners />
      <Contact />
      <FloatingWhatsApp />
    </>
  );
}
