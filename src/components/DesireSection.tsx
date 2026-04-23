import { motion } from "motion/react";
import FadeIn from "./motion/FadeIn";

export default function DesireSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-nude/20 to-offwhite section-glow">
      {/* Gold top line */}
      <div className="mx-auto h-px w-full max-w-md bg-linear-to-r from-transparent via-gold/50 to-transparent" />

      <div className="mx-auto max-w-3xl px-6 pt-24 pb-4 lg:px-8 lg:pt-32 lg:pb-8">
        <FadeIn direction="up">
          <h2 className="font-display text-3xl font-normal leading-tight text-text sm:text-4xl md:text-5xl text-center">
            Não é só estética
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-5">
          <FadeIn delay={0.1} direction="up">
            <p className="font-display text-xl font-normal italic leading-relaxed text-text-muted sm:text-2xl pl-0 md:pl-0">
              É se olhar no espelho e gostar do que vê.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <p className="font-display text-xl font-normal italic leading-relaxed text-text-muted sm:text-2xl pl-6 md:pl-16">
              É se sentir desejada de novo — segura, confiante.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <p className="font-display text-xl font-normal italic leading-relaxed text-text-muted sm:text-2xl pl-12 md:pl-32">
              É voltar a ter controle sobre o próprio corpo.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} direction="up" className="flex justify-center">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="my-8 gold-line origin-center"
            />
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <p className="font-body text-base leading-relaxed text-text-muted sm:text-lg text-center">
              Sem esconder. Sem improvisar. Sem frustração acumulada.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
