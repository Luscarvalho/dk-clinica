import { Sparkles, Move3D, Dumbbell, HeartPulse } from "lucide-react";
import FadeIn from "./motion/FadeIn";
import StaggerContainer, { StaggerItem } from "./motion/StaggerContainer";

const SERVICES = [
  {
    icon: Sparkles,
    tag: "FACIAL",
    tagColor: "bg-gold/15 text-brown-gold",
    title: "Método Glow DK",
    subtitle: "Efeito pele renovada",
    description:
      "Pele mais jovem, iluminada e uniforme. Ideal para envelhecimento, opacidade e linhas finas.",
  },
  {
    icon: Move3D,
    tag: "CORPORAL",
    tagColor: "bg-nude/40 text-brown-gold",
    title: "Método Contorno DK",
    subtitle: "Reduza medidas com estratégia",
    description:
      "Focado em gordura localizada, com melhora progressiva no contorno corporal.",
  },
  {
    icon: Dumbbell,
    tag: "CORPORAL",
    tagColor: "bg-nude/40 text-brown-gold",
    title: "Método Corpo Definido DK",
    subtitle: "Definição e firmeza no seu corpo",
    description:
      "Tratamento para flacidez e gordura, promovendo mais firmeza e definição corporal.",
  },
  {
    icon: HeartPulse,
    tag: "RECUPERAÇÃO",
    tagColor: "bg-brown-gold/10 text-brown-gold",
    title: "Método Regenere DK",
    subtitle: "Recupere-se com mais segurança",
    description:
      "Indicado para pós-cirúrgico, auxiliando na recuperação e redução de inchaço.",
  },
];

const EXTRA_SERVICES = [
  "Limpeza de Pele Premium",
  "Bioestimulador",
  "Botox",
  "Preenchimento Labial",
  "Drenagem Linfática",
  "Liberação Miofascial",
];

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
            <h2 className="font-display text-3xl font-normal leading-tight text-text sm:text-4xl md:text-5xl">
              Tratamentos com direção e resultado
            </h2>
            <div className="mx-auto mt-4 gold-line" />
          </div>
        </FadeIn>

        {/* Cards Grid */}
        <StaggerContainer
          delayChildren={0.2}
          staggerChildren={0.15}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {SERVICES.map((service) => (
            <StaggerItem key={service.title} direction="up">
              <article className="group relative flex h-full flex-col rounded-2xl border border-gold/15 bg-white/70 p-8 backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:-translate-y-2 hover:shadow-[0_12px_48px_rgba(125,91,1,0.12)] hover:bg-gold/3 lg:p-10">
                {/* Tag */}
                <span
                  className={`inline-block self-start rounded-full px-3 py-1 font-body text-[10px] font-bold tracking-[0.15em] uppercase ${service.tagColor}`}
                >
                  {service.tag}
                </span>

                {/* Icon */}
                <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-gold/10 to-nude/30 transition-transform duration-300 group-hover:scale-110">
                  <service.icon
                    size={24}
                    className="text-brown-gold"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Text */}
                <h3 className="mt-5 font-display text-xl font-normal text-text sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-1 font-body text-sm font-medium text-gold">
                  {service.subtitle}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>

                {/* Hover gold accent */}
                <div className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-linear-to-r from-gold via-brown-gold to-gold transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Extra services */}
        <FadeIn delay={0.4} direction="up">
          <div className="mt-14 text-center">
            <p className="font-body text-sm leading-relaxed text-text-muted">
              <span className="font-medium text-text">Também realizamos: </span>
              {EXTRA_SERVICES.map((s, i) => (
                <span key={s}>
                  {s}
                  {i < EXTRA_SERVICES.length - 1 && (
                    <span className="mx-1 text-gold">·</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
