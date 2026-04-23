import { ArrowRight } from "lucide-react";

const WHATSAPP_FAB =
  "https://wa.me/5592999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20DK%20Est%C3%A9tica.";

export default function HeroSection() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative flex min-h-dvh items-center overflow-hidden bg-offwhite pt-20"
      >
        {/* Photo — right side, faded into background on the left */}
        <div className="absolute inset-0 flex justify-end opacity-15 md:opacity-100 transition-opacity duration-300">
          <div className="relative w-full md:w-[65%] lg:w-[60%]">
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
          </div>
          {/* Extra left fill for narrower screens */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-offwhite md:hidden" />
        </div>

        {/* Content — left column */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-12 xl:px-16">
          <div className="max-w-xl hero-stagger">
            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-8 bg-gold" />
              <span className="font-body text-[10px] font-semibold tracking-[0.2em] text-text-muted uppercase">
                DK Clínica · Método que gera resultado
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-[2.75rem] font-normal leading-[1.05] text-text sm:text-5xl md:text-6xl lg:text-[5rem]">
              Você não está
              <br />
              <em className="not-italic text-brown-gold">insatisfeita</em>
              <br />à toa.
            </h1>

            {/* Sub-headline */}
            <div className="mt-6 space-y-1">
              <p className="font-display text-xl italic font-normal text-text-muted sm:text-2xl">
                Seu corpo muda. Sua pele muda.
              </p>
              <p className="font-display text-xl italic font-normal text-text-muted sm:text-2xl">
                E o que você tenta… não acompanha.
              </p>
            </div>

            {/* Support text */}
            <p className="mt-6 font-body text-base leading-relaxed text-text-muted sm:text-lg max-w-md">
              Você já tentou cuidar. Já fez procedimento. Já investiu tempo. Mas
              o resultado não sustenta.
            </p>
            <p className="mt-2 font-body text-base font-semibold text-text sm:text-lg">
              Não é falta de esforço. É falta de direção.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#contato"
                className="group inline-flex items-center justify-between gap-8 rounded-full bg-taupe px-8 py-4 font-body text-[13px] font-semibold tracking-[0.12em] text-white uppercase transition-all duration-200 hover:bg-brown-gold active:scale-[0.97] min-w-[280px]"
              >
                <span>Quero resolver isso agora</span>
                <ArrowRight
                  size={16}
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#tratamentos"
                className="font-body text-[13px] font-semibold tracking-[0.12em] uppercase text-text-muted transition-colors duration-200 hover:text-brown-gold py-2 px-1"
              >
                Ver como funciona
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="mt-12 hidden flex-col items-start gap-2 lg:flex">
              <span className="font-body text-[9px] tracking-[0.25em] text-text-muted uppercase">
                Role para descobrir
              </span>
              <div className="h-10 w-px bg-linear-to-b from-gold/70 to-transparent ml-px" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WhatsApp FAB ─────────────────────────────────────── */}
      <a
        href={WHATSAPP_FAB}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] active:scale-95"
      >
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="26"
          height="26"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
