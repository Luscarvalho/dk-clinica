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
  const scrollScaleX = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  const scrollScaleY = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);
  const one = useMotionValue(1);

  const lineScaleX = isMobile ? one : scrollScaleX;
  const lineScaleY = isMobile ? one : scrollScaleY;
  return (
    <section ref={sectionRef} className="relative bg-text grain-overlay">
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-24 lg:px-8 lg:pt-20 lg:pb-32">
        <FadeIn direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-normal leading-tight text-white sm:text-4xl md:text-5xl">
              Existe um método por trás do resultado
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <div className="mx-auto mt-10 max-w-2xl space-y-4 text-center">
            <p className="font-body text-base leading-relaxed text-white/60 sm:text-lg">
              O <strong className="font-semibold text-white">Método DK</strong>{" "}
              é a solução mais completa da clínica.
            </p>
            <p className="font-body text-base leading-relaxed text-white/60 sm:text-lg">
              Ele reúne o melhor que a DK pode oferecer em um plano estruturado
              com várias sessões, acompanhamento e evolução real.
            </p>
            <p className="font-body text-base leading-relaxed text-white/60 sm:text-lg">
              Não é um procedimento isolado.{" "}
              <strong className="font-semibold text-white">
                É um tratamento estratégico para transformar o corpo com
                segurança e consistência.
              </strong>
            </p>
            <p className="font-body text-base leading-relaxed text-white/60 sm:text-lg">
              É o nosso diferencial de mercado.
            </p>
            <p className="font-body text-base font-semibold text-white sm:text-lg">
              Indicado para quem quer resultado visível, duradouro e sem
              tentativa.
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
                  className="absolute left-[10%] right-[10%] top-10 h-px bg-linear-to-r from-gold/20 via-gold to-gold/20"
                />

                {STEPS.map((step, i) => (
                  <StaggerItem
                    key={step.label}
                    direction="up"
                    className="relative flex flex-col items-center gap-4"
                    style={{ flex: "1" }}
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-white/5 shadow-[0_2px_20px_rgba(216,178,43,0.2)] transition-all duration-300 hover:border-gold hover:bg-white/10 hover:shadow-[0_4px_32px_rgba(216,178,43,0.35)] hover:-translate-y-1">
                      <step.icon
                        size={28}
                        className="text-gold"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="max-w-28 text-center font-body text-sm font-medium tracking-wide text-white/60 sm:text-base">
                      {step.label}
                    </span>
                    {/* Step number */}
                    <span className="absolute -top-8 font-display text-xl font-semibold text-gold/50">
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
                      <div className="absolute left-0 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-white/5 shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <step.icon
                          size={22}
                          className="text-gold"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <span className="font-display text-base font-semibold text-gold/60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="font-body text-sm font-medium text-white/80">
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
