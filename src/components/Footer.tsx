import { MapPin } from "lucide-react";
import FadeIn from "./motion/FadeIn";

export default function Footer() {
  return (
    <footer className="relative bg-text">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Closing quote */}
        <FadeIn direction="up">
          <div className="text-center">
            <p className="font-display text-3xl font-normal leading-tight text-white sm:text-4xl md:text-5xl">
              Resultado não vem de tentativa.
              <br />
              <span className="text-gold">Vem de método.</span>
            </p>
            <p className="mt-6 font-display text-lg italic text-white/60 sm:text-xl">
              Se for para investir em você — faça do jeito certo.
            </p>
          </div>
        </FadeIn>

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
              href="https://www.instagram.com/destackestetica"
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
              @destackestetica
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
