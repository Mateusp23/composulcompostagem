'use-client'

import { useTranslations } from 'next-intl';
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Partners />
      <Contact />
      <FloatingWhatsApp />
      <Footer />
    </>
  );
} 