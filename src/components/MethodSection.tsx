import { ClipboardCheck, Target, Layers, Eye, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { m, useScroll, useTransform, useMotionValue } from "motion/react";
import FadeIn from "./motion/FadeIn";
import StaggerContainer, { StaggerItem } from "./motion/StaggerContainer";

const STEPS = [
  { icon: ClipboardCheck, label: "Avaliação" },
  { icon: Target, label: "Plano Personalizado" },
  { icon: Layers, label: "Protocolo" },
  { icon: Eye, label: "Acompanhamento" },
  { icon: Award, label: "Resultado" },
];

export default function MethodSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scrollScaleX = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  const scrollScaleY = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);
  const one = useMotionValue(1);

  const lineScaleX = isMobile ? one : scrollScaleX;
  const lineScaleY = isMobile ? one : scrollScaleY;
  return (
    <section ref={sectionRef} className="relative bg-offwhite grain-overlay">
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-24 lg:px-8 lg:pt-20 lg:pb-32">
        <FadeIn direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-normal leading-tight text-text sm:text-4xl md:text-5xl">
              O problema não é você.
              <br />
              <span className="text-brown-gold">
                É o jeito que fazem estética.
              </span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <div className="mx-auto mt-10 max-w-2xl space-y-4 text-center">
            <p className="font-body text-base leading-relaxed text-text-muted sm:text-lg">
              O mercado vende procedimentos. A DK trabalha com{" "}
              <strong className="font-semibold text-text">método</strong>.
            </p>
            <p className="font-body text-base leading-relaxed text-text-muted sm:text-lg">
              Nada aqui é solto. Nada é genérico. Cada cliente entra com um
              plano definido — com acompanhamento, com evolução real.
            </p>
            <p className="font-body text-base leading-relaxed text-text-muted sm:text-lg">
              Não é tentativa.{" "}
              <strong className="font-semibold text-text">
                É estratégia aplicada no seu corpo.
              </strong>
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <StaggerContainer delayChildren={0.15} staggerChildren={0.1}>
          <div className="mx-auto mt-16 max-w-4xl">
            {/* Desktop: horizontal */}
            <div className="hidden md:block">
              <div className="relative flex items-start justify-between">
                {/* Connecting line — grows with scroll */}
                <m.div
                  style={{ scaleX: lineScaleX, transformOrigin: "left" }}
                  className="absolute left-[10%] right-[10%] top-7 h-px bg-linear-to-r from-gold/20 via-gold to-gold/20"
                />

                {STEPS.map((step, i) => (
                  <StaggerItem
                    key={step.label}
                    direction="up"
                    className="relative flex flex-col items-center gap-4"
                    style={{ flex: "1" }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-offwhite shadow-[0_2px_12px_rgba(216,178,43,0.15)] transition-all duration-300 hover:border-gold hover:shadow-[0_4px_20px_rgba(216,178,43,0.25)] hover:-translate-y-1">
                      <step.icon
                        size={22}
                        className="text-brown-gold"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="max-w-25 text-center font-body text-xs font-medium tracking-wide text-text-muted sm:text-sm">
                      {step.label}
                    </span>
                    {/* Step number */}
                    <span className="absolute -top-7 font-display text-sm font-semibold text-gold/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </StaggerItem>
                ))}
              </div>
            </div>

            {/* Mobile: vertical */}
            <div className="md:hidden">
              <div className="relative ml-7">
                {/* Vertical line — grows with scroll */}
                <m.div
                  style={{ scaleY: lineScaleY, transformOrigin: "top" }}
                  className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-gold/20 via-gold to-gold/20"
                />

                <div className="space-y-8">
                  {STEPS.map((step, i) => (
                    <StaggerItem
                      key={step.label}
                      direction="left"
                      className="relative flex items-center gap-5 pl-8 group"
                    >
                      {/* Dot on line */}
                      <div className="absolute left-0 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-offwhite shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <step.icon
                          size={18}
                          className="text-brown-gold"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <span className="font-display text-sm font-semibold text-gold/60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="font-body text-sm font-medium text-text">
                          {step.label}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
