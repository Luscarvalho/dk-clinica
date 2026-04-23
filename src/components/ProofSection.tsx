import { Gem } from "lucide-react";
import FadeIn from "./motion/FadeIn";

export default function ProofSection() {
  return (
    <section className="relative overflow-hidden bg-offwhite section-glow">
      <div className="mx-auto max-w-4xl px-6 pt-10 pb-20 text-center lg:px-8 lg:pt-12 lg:pb-28">
        <FadeIn direction="up">
          <h2 className="font-display text-4xl font-normal leading-tight text-text sm:text-5xl md:text-6xl">
            Você já sente diferença
            <br />
            <em className="not-italic text-brown-gold">na primeira sessão</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <div className="mx-auto mt-10 max-w-2xl space-y-4">
            <p className="font-body text-base leading-relaxed text-text-muted sm:text-lg">
              Antes de qualquer tratamento, você passa pela{" "}
              <strong className="font-semibold text-text">Experience DK</strong>{" "}
              — uma sessão estratégica com avaliação e aplicação real.
            </p>
            <p className="font-body text-base leading-relaxed text-text-muted sm:text-lg">
              Você vê. Você sente.
              <br />E se decidir continuar,{" "}
              <strong className="font-semibold text-text">
                o valor vira crédito.
              </strong>
            </p>
            <p className="font-body text-base leading-relaxed text-text-muted sm:text-lg">
              Essa é a primeira etapa para entender o que o seu corpo realmente
              precisa.
            </p>
          </div>
        </FadeIn>

        {/* Badge */}
        <FadeIn delay={0.4} direction="up">
          <div className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-linear-to-r from-gold/10 to-nude/20 px-6 py-3 shadow-[0_2px_12px_rgba(216,178,43,0.12)] transition-transform duration-300 hover:scale-105">
            <Gem size={18} className="text-gold" strokeWidth={1.5} />
            <span className="font-body text-sm font-semibold tracking-wide text-brown-gold">
              Investimento vira crédito no tratamento
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
