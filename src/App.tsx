import { LazyMotion, domAnimation, m } from "motion/react";
import HeroSection from "./components/HeroSection";
import DesireSection from "./components/DesireSection";
import MethodSection from "./components/MethodSection";
import ServicesSection from "./components/ServicesSection";
import ProofSection from "./components/ProofSection";
import AboutSection from "./components/AboutSection";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <m.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 z-50 py-4 pointer-events-none"
      >
        <div className="mx-auto flex max-w-7xl items-center px-6 lg:px-8">
          <a
            href="#"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80 pointer-events-auto"
            aria-label="DK Estética — Início"
          >
            <img
              src="/dk-logo.png"
              alt="DK Estética — Clínica de Estética"
              className="h-12 w-auto"
              loading="eager"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg font-normal tracking-tight text-brown-gold">
                DK
              </span>
              <span className="font-body text-[9px] font-semibold tracking-[0.18em] text-text-muted uppercase">
                Clínica de Estética
              </span>
            </div>
          </a>
        </div>
      </m.header>
      <main id="main-content">
        <HeroSection />
        <DesireSection />
        <MethodSection />
        <ServicesSection />
        <ProofSection />
        <AboutSection />
        <FormSection />
      </main>
      <Footer />
    </LazyMotion>
  );
}

export default App;
