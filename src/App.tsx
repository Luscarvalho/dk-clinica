import { useRef } from "react";
import { ArrowRight, ArrowUp } from "lucide-react";
import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useSpring,
  useInView,
  AnimatePresence,
} from "motion/react";
import HeroSection, { WHATSAPP_FAB } from "./components/HeroSection";
import DesireSection from "./components/DesireSection";
import MethodSection from "./components/MethodSection";
import ServicesSection from "./components/ServicesSection";
import ProofSection from "./components/ProofSection";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { amount: 0.1 });
  const formInView = useInView(formRef, { amount: 0.2 });
  const footerInView = useInView(footerRef, { amount: 0.1 });
  const showBackToTop = formInView || footerInView;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <LazyMotion features={domAnimation}>
      {/* Scroll progress bar */}
      <m.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-gold via-brown-gold to-gold z-100"
      />
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
        <div ref={heroRef} className="relative">
          <HeroSection />
        </div>
        <DesireSection />
        <MethodSection />
        <ServicesSection />
        <ProofSection />
        <div ref={formRef}>
          <FormSection />
        </div>
      </main>
      <div ref={footerRef}>
        <Footer />
      </div>

      {/* ─── FAB ──────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {!heroInView && !showBackToTop && (
          <m.a
            key="whatsapp"
            href={WHATSAPP_FAB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar pelo WhatsApp"
            onClick={() => {
              window.dataLayer?.push({
                event: "whatsapp_click",
                click_location: "fab_whatsapp",
              });
            }}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full border border-brown-gold/50 bg-offwhite/90 px-5 py-3 shadow-[0_4px_24px_rgba(125,91,1,0.15)] backdrop-blur-sm transition-shadow duration-300 hover:border-brown-gold hover:shadow-[0_6px_32px_rgba(125,91,1,0.25)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="14"
              height="14"
              className="text-brown-gold"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="font-body text-[11px] font-semibold tracking-[0.18em] text-brown-gold uppercase">
              Agendar
            </span>
            <ArrowRight size={12} className="text-brown-gold" strokeWidth={2} />
          </m.a>
        )}
        {showBackToTop && (
          <m.button
            key="backtotop"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full border border-brown-gold/50 bg-offwhite/90 px-5 py-3 shadow-[0_4px_24px_rgba(125,91,1,0.15)] backdrop-blur-sm transition-shadow duration-300 hover:border-brown-gold hover:shadow-[0_6px_32px_rgba(125,91,1,0.25)]"
          >
            <ArrowUp size={14} className="text-brown-gold" strokeWidth={2} />
            <span className="font-body text-[11px] font-semibold tracking-[0.18em] text-brown-gold uppercase">
              Voltar ao topo
            </span>
          </m.button>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

export default App;
