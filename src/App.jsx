import { Analytics } from "@vercel/analytics/react";
import StarfieldCanvas from "./components/canvas/StarfieldCanvas";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";

function App() {
  return (
    <>
      <Analytics />

      {/* Interactive Constellation Particle Canvas */}
      <StarfieldCanvas />

      {/* Atmospheric Ambient Glow Blobs */}
      <div className="ambient-glow-wrapper" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>

      {/* Main Single Page Layout */}
      <div className="portfolio-app-root">
        <Navbar />

        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

export default App;
