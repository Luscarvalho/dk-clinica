import { ShieldCheck, CheckCircle2, Handshake, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Segurança em primeiro lugar",
    description: "Protocolos seguros e equipamentos de última geração.",
  },
  {
    icon: CheckCircle2,
    title: "Resultados reais",
    description: "Sem promessas falsas — evolução que você vê e sente.",
  },
  {
    icon: Handshake,
    title: "Atendimento humanizado",
    description: "Cada pessoa é única e merece um cuidado personalizado.",
  },
  {
    icon: Star,
    title: "Excelência em cada detalhe",
    description: "Do primeiro contato ao resultado final, com padrão premium.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative bg-offwhite grain-overlay">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-normal leading-tight text-text sm:text-4xl md:text-5xl">
              Um espaço pensado para o seu bem-estar
            </h2>
            <div className="mx-auto mt-4 gold-line" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mx-auto mt-10 max-w-2xl space-y-4 text-center">
            <p className="font-body text-base leading-relaxed text-text-muted sm:text-lg">
              Na DK Estética, cada atendimento é pensado de forma personalizada,
              respeitando as necessidades e objetivos de cada cliente.
            </p>
            <p className="font-body text-base leading-relaxed text-text-muted sm:text-lg">
              Trabalhamos com técnicas modernas e um olhar profissional para
              entregar resultados que valorizam a sua beleza natural.
            </p>
          </div>
        </ScrollReveal>

        {/* Values Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {VALUES.map((value, i) => (
            <ScrollReveal key={value.title} delay={300 + i * 100}>
              <div className="flex items-start gap-4 rounded-xl border border-gold/10 bg-white/50 p-6 transition-all duration-300 hover:border-gold/25 hover:bg-white/80 lg:p-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-gold/10 to-nude/25">
                  <value.icon
                    size={22}
                    className="text-brown-gold"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-normal text-text">
                    {value.title}
                  </h3>
                  <p className="mt-1 font-body text-sm leading-relaxed text-text-muted">
                    {value.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
