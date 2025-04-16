import About from "./components/About";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Partners from "./components/Partners";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      {/* <About /> */}
      <Services />
      {/* <Partners /> */}
      <Footer />
    </>
  );
}
