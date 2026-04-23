import { ArrowRight } from "lucide-react";
import { m, useScroll, useTransform, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";
import StaggerContainer, { StaggerItem } from "./motion/StaggerContainer";

export const WHATSAPP_FAB =
  "https://wa.me/5592999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20DK%20Est%C3%A9tica.";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);
  const parallaxTextY = useTransform(scrollY, [0, 500], [0, 50]);
  const zero = useMotionValue(0);

  const y = isMobile ? zero : parallaxY;
  const textY = isMobile ? zero : parallaxTextY;

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative flex min-h-dvh items-center overflow-hidden bg-offwhite pt-20"
      >
        {/* Photo — right side, faded into background on the left */}
        <div className="absolute inset-0 flex justify-end opacity-15 md:opacity-100 transition-opacity duration-300">
          <m.div
            initial={{ scale: 1.05, opacity: 0.15 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ y, willChange: "transform, opacity" }}
            className="relative w-full md:w-[65%] lg:w-[60%]"
          >
            <img
              src="/hero-woman-bg.jpg"
              alt="Mulher com pele radiante iluminada em tons dourados — DK Estética"
              className="h-full w-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
            {/* Horizontal gradient: left fades into off-white, right stays visible */}
            <div className="absolute inset-0 bg-linear-to-r from-offwhite via-offwhite/70 to-transparent" />
            {/* Bottom fade */}
            <div className="absolute inset-0 bg-linear-to-t from-offwhite/60 via-transparent to-transparent" />
          </m.div>
          {/* Extra left fill for narrower screens */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-offwhite md:hidden" />
        </div>

        {/* Content — left column */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 md:py-24 xl:py-32 lg:px-12 xl:px-16">
          <m.div style={{ y: textY }}>
            <StaggerContainer className="max-w-xl" staggerChildren={0.15}>
              {/* Eyebrow */}
              <StaggerItem
                direction="up"
                className="mb-8 flex items-center gap-3"
              >
                <div className="h-px w-8 bg-gold" />
                <span className="font-body text-[10px] font-semibold tracking-[0.2em] text-text-muted uppercase">
                  DK Clínica · Método que gera resultado
                </span>
              </StaggerItem>

              {/* Headline */}
              <div>
                <h1 className="font-display text-[2.75rem] font-normal leading-[1.05] text-text sm:text-5xl md:text-6xl lg:text-[5rem]">
                  <m.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ display: "block" }}
                  >
                    Você não está
                  </m.span>
                  <m.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.38,
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ display: "block" }}
                  >
                    <em className="not-italic text-brown-gold">insatisfeita</em>
                  </m.span>
                  <m.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.56,
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ display: "block" }}
                  >
                    à toa.
                  </m.span>
                </h1>
              </div>

              {/* Sub-headline */}
              <StaggerItem direction="up" className="mt-6 space-y-1">
                <p className="font-display text-xl italic font-normal text-text-muted sm:text-2xl">
                  Seu corpo muda. Sua pele muda.
                </p>
                <p className="font-display text-xl italic font-normal text-text-muted sm:text-2xl">
                  E o que você tenta… não acompanha.
                </p>
              </StaggerItem>

              {/* Support text */}
              <StaggerItem direction="up">
                <p className="mt-6 font-body text-base leading-relaxed text-text-muted sm:text-lg max-w-md">
                  Você já tentou cuidar. Já fez procedimento. Já investiu tempo.
                  Mas o resultado não sustenta.
                </p>
                <p className="mt-2 font-body text-base font-semibold text-text sm:text-lg">
                  Não é falta de esforço. É falta de direção.
                </p>
              </StaggerItem>

              {/* CTAs */}
              <StaggerItem
                direction="up"
                className="mt-10 flex flex-wrap items-center gap-5"
              >
                <m.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contato"
                  className="btn-animated-border group inline-flex items-center justify-between gap-8 rounded-full px-8 py-4 font-body text-[13px] font-semibold tracking-[0.12em] text-white uppercase shadow-[0_4px_24px_rgba(125,91,1,0.3)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(216,178,43,0.5)] min-w-70"
                >
                  <span>Quero resolver isso agora</span>
                  <ArrowRight
                    size={16}
                    className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </m.a>
              </StaggerItem>

              {/* Scroll indicator */}
              <StaggerItem direction="none" className="mt-12 hidden lg:flex">
                <m.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-start gap-2"
                >
                  <span className="font-body text-[9px] tracking-[0.25em] text-text-muted uppercase">
                    Role para descobrir
                  </span>
                  <m.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-10 w-px bg-linear-to-b from-gold/70 to-transparent ml-px origin-top"
                  />
                </m.div>
              </StaggerItem>
            </StaggerContainer>
          </m.div>
        </div>
      </section>

      {/* ─── FAB ──────────────────────────────────────────────── */}
    </>
  );
}
