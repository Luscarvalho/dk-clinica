import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5592999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20estrat%C3%A9gica%20na%20DK%20Est%C3%A9tica.";

const NAV_LINKS = [
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-offwhite/85 backdrop-blur-md shadow-[0_1px_20px_rgba(125,91,1,0.06)] border-b border-gold/10 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label="DK Estética — Início"
        >
          <img
            src="/dk-logo.png"
            alt="DK Estética — Clínica de Estética"
            className="h-12 w-auto"
            loading="eager"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-normal tracking-tight text-brown-gold">
              DK
            </span>
            <span className="font-body text-[9px] font-semibold tracking-[0.18em] text-text-muted uppercase">
              Clínica de Estética
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-base font-semibold tracking-wide text-text transition-colors duration-200 hover:text-brown-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brown-gold px-6 py-2.5 font-body text-sm font-semibold text-white shadow-[0_2px_12px_rgba(125,91,1,0.25)] transition-all duration-200 hover:bg-gold hover:shadow-[0_4px_20px_rgba(216,178,43,0.35)] active:scale-[0.97]"
          >
            Agendar Avaliação
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-lg text-brown-gold transition-colors hover:bg-nude/30 md:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-offwhite transition-all duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-8">
          <img
            src="/dk-logo.png"
            alt="DK Estética"
            className="h-16 w-auto mb-2"
          />
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="font-display text-3xl font-normal text-text transition-all duration-200 hover:text-brown-gold"
              style={{
                transitionDelay: mobileOpen ? `${(i + 1) * 80}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-4 rounded-full bg-brown-gold px-10 py-4 font-body text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-gold"
            style={{
              transitionDelay: mobileOpen ? "320ms" : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Agendar Avaliação
          </a>
        </div>
      </div>
    </>
  );
}
