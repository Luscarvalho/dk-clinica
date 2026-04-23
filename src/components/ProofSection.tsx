import { Gem } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ProofSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-offwhite via-nude/15 to-nude/25 section-glow">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8 lg:py-32">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-normal leading-tight text-text sm:text-4xl md:text-5xl">
            Você já sente diferença na primeira sessão
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mx-auto mt-10 max-w-2xl space-y-4">
            <p className="font-body text-base leading-relaxed text-text-muted sm:text-lg">
              Antes de qualquer protocolo, você passa pela{" "}
              <strong className="font-semibold text-text">Experience DK</strong>{" "}
              — uma sessão estratégica com avaliação e aplicação real.
            </p>
            <p className="font-body text-base leading-relaxed text-text-muted sm:text-lg">
              Você vê. Você sente.
              <br />E se decidir continuar,{" "}
              <strong className="font-semibold text-text">
                o valor investido vira crédito no tratamento.
              </strong>
            </p>
            <p className="font-body text-base leading-relaxed text-text-muted sm:text-lg">
              Você não começa no escuro. Você começa com segurança.
            </p>
          </div>
        </ScrollReveal>

        {/* Badge */}
        <ScrollReveal delay={400}>
          <div className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-linear-to-r from-gold/10 to-nude/20 px-6 py-3 shadow-[0_2px_12px_rgba(216,178,43,0.12)]">
            <Gem size={18} className="text-gold" strokeWidth={1.5} />
            <span className="font-body text-sm font-semibold tracking-wide text-brown-gold">
              Investimento vira crédito no tratamento
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
