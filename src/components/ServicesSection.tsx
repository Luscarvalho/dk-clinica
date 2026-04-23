import { Sparkles, Move3D, Dumbbell, HeartPulse, Gem } from "lucide-react";
import { m, useMotionValue, useTransform, animate } from "motion/react";
import FadeIn from "./motion/FadeIn";
import StaggerContainer, { StaggerItem } from "./motion/StaggerContainer";

const SERVICES = [
  {
    icon: Sparkles,
    image: "/method_01.jpg",
    tag: "FACIAL",
    tagColor: "bg-gold/15 text-brown-gold",
    title: "Glow DK",
    subtitle: "Qualidade de pele e aparência jovem",
    description:
      "Para quem quer recuperar a qualidade da pele e uma aparência mais jovem.",
  },
  {
    icon: Move3D,
    image: "/method_02.jpg",
    tag: "CORPORAL",
    tagColor: "bg-nude/40 text-brown-gold",
    title: "Contorno DK",
    subtitle: "Redução de medidas e redefinição",
    description: "Para quem quer reduzir medidas e redefinir o corpo.",
  },
  {
    icon: Dumbbell,
    image: "/method_03.jpg",
    tag: "CORPORAL",
    tagColor: "bg-nude/40 text-brown-gold",
    title: "Corpo Definido",
    subtitle: "Flacidez e gordura de forma combinada",
    description:
      "Para quem precisa tratar flacidez e gordura de forma combinada.",
  },
  {
    icon: HeartPulse,
    image: "/method_04.jpg",
    tag: "RECUPERAÇÃO",
    tagColor: "bg-brown-gold/10 text-brown-gold",
    title: "Regenere DK",
    subtitle: "Recuperação segura no pós-operatório",
    description: "Para quem precisa de recuperação segura no pós-operatório.",
  },
  {
    icon: Gem,
    image: "/method_05.jpg",
    tag: "ESTÉTICA",
    tagColor: "bg-gold/10 text-brown-gold",
    title: "Harmony DK",
    subtitle: "Estética e autoestima",
    description:
      "Para quem busca uma melhora mais ampla na estética e autoestima.",
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [6, -6]);
  const rotateY = useTransform(x, [-60, 60], [-6, 6]);

  const isPointer = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  return (
    <m.div
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        willChange: "transform",
      }}
      onMouseMove={(e) => {
        if (!isPointer()) return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        if (!isPointer()) return;
        animate(x, 0, { type: "spring", stiffness: 300, damping: 25 });
        animate(y, 0, { type: "spring", stiffness: 300, damping: 25 });
      }}
      className="h-full"
    >
      {children}
    </m.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="tratamentos"
      className="relative overflow-hidden bg-offwhite section-glow"
    >
      {/* Top decorative line */}
      <div className="mx-auto h-px w-full max-w-lg bg-linear-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <FadeIn direction="up">
          <div className="text-center">
            <p className="font-body text-[11px] font-semibold tracking-[0.2em] text-text-muted uppercase mb-4">
              Além do Método DK
            </p>
            <h2 className="font-display text-3xl font-normal leading-tight text-text sm:text-4xl md:text-5xl">
              A clínica oferece protocolos específicos
            </h2>
            <div className="mx-auto mt-4 gold-line" />
            <p className="mt-6 font-body text-base text-text-muted max-w-xl mx-auto">
              Indicados para quem deseja tratar pontos isolados ou iniciar de
              forma mais pontual.
            </p>
          </div>
        </FadeIn>

        {/* Cards Grid */}
        <StaggerContainer
          delayChildren={0.2}
          staggerChildren={0.15}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {SERVICES.map((service, i) => (
            <StaggerItem
              key={service.title}
              direction="up"
              className={
                i === SERVICES.length - 1 && SERVICES.length % 2 !== 0
                  ? "sm:col-span-2 sm:mx-auto sm:w-1/2"
                  : ""
              }
            >
              <TiltCard>
                <article className="card-animated-border group relative flex h-full flex-col rounded-2xl border border-gold/15 bg-white/70 p-8 backdrop-blur-sm hover:border-gold/40 hover:shadow-[0_12px_48px_rgba(125,91,1,0.12)] hover:bg-gold/3 lg:p-10">
                  {/* Tag + Icon */}
                  <div className="flex items-center gap-2 self-start">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-body text-[12px] font-bold tracking-[0.15em] uppercase ${service.tagColor}`}
                    >
                      <service.icon size={12} strokeWidth={2} />
                      {service.tag}
                    </span>
                  </div>

                  {/* Image + Text row */}
                  <div className="mt-5 flex items-start gap-5">
                    {/* Image */}
                    <div className="w-36 shrink-0 overflow-hidden rounded-xl aspect-square">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-normal text-text sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-1 font-body text-sm font-medium text-gold">
                        {service.subtitle}
                      </p>
                      <p className="mt-3 font-body text-sm leading-relaxed text-text-muted">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover gold accent */}
                  <div className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-linear-to-r from-gold via-brown-gold to-gold transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
