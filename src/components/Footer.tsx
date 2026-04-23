import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_URL =
  "https://wa.me/5592999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20na%20DK%20Est%C3%A9tica.";

export default function Footer() {
  return (
    <footer className="relative bg-text">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Closing quote */}
        <ScrollReveal>
          <div className="text-center">
            <p className="font-display text-3xl font-normal leading-tight text-white sm:text-4xl md:text-5xl">
              Resultado não vem de tentativa.
              <br />
              <span className="text-gold">Vem de método.</span>
            </p>
            <p className="mt-6 font-display text-lg italic text-white/60 sm:text-xl">
              Se for para investir em você — faça do jeito certo.
            </p>

            <div className="mt-10">
              <a
                href="#contato"
                className="btn-shimmer group inline-flex items-center gap-3 rounded-full px-10 py-5 font-body text-lg font-semibold text-white shadow-[0_4px_24px_rgba(125,91,1,0.3)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(216,178,43,0.5)] active:scale-[0.97]"
              >
                Agendar agora
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="mx-auto mt-20 h-px w-full max-w-md bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* Footer info */}
        <div className="mt-12 flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
            aria-label="DK Estética — Início"
          >
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg font-normal tracking-tight text-gold">
                DK
              </span>
              <span className="font-body text-[9px] font-semibold tracking-[0.18em] text-white/50 uppercase">
                Clínica de Estética
              </span>
            </div>
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/dkestetica"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-white/50 transition-colors duration-200 hover:text-gold"
              aria-label="Instagram da DK Estética"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.5"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              @dkestetica
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-white/50 transition-colors duration-200 hover:text-gold"
              aria-label="WhatsApp da DK Estética"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              WhatsApp
            </a>
            <span className="flex items-center gap-2 font-body text-sm text-white/50">
              <MapPin size={16} strokeWidth={1.5} />
              Manaus, AM
            </span>
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-white/30">
            © 2025 DK Estética. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
