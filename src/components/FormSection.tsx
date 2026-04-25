import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { m } from "motion/react";
import FadeIn from "./motion/FadeIn";

const GOALS = [
  { value: "", label: "Selecione seu objetivo" },
  { value: "Reduzir medidas", label: "Reduzir medidas" },
  { value: "Melhorar a pele", label: "Melhorar a pele" },
  { value: "Recuperação pós-cirúrgica", label: "Recuperação pós-cirúrgica" },
  { value: "Autoestima e bem-estar", label: "Autoestima e bem-estar" },
];

export default function FormSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Por favor, informe seu nome.";
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10)
      newErrors.phone = "Informe um número válido com DDD.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = Object.keys(newErrors)[0];
      const el = document.getElementById(`form-${firstErrorField}`);
      el?.focus();
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const goalText = goal || "Ainda não definido";
    const message = encodeURIComponent(
      `Olá, sou ${name.trim()}.\nMeu objetivo é: ${goalText}.\nQuero agendar minha avaliação estratégica.`,
    );
    const whatsappUrl = `https://wa.me/5592985658383?text=${message}`;

    // Small delay for UX feedback
    setTimeout(() => {
      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead", { content_name: "form_whatsapp" });
      }
      window.dataLayer?.push({
        event: "whatsapp_click",
        click_location: "form_whatsapp",
      });
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setLoading(false);
    }, 400);
  };

  const formatPhone = (value: string) => {
    let numbers = value.replace(/\D/g, "");
    // Strip country code 55 if present (autofill often adds it)
    if (numbers.length > 11 && numbers.startsWith("55")) {
      numbers = numbers.slice(2);
    }
    numbers = numbers.slice(0, 11);
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  };

  return (
    <section id="contato" className="relative bg-brown-gold">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32">
        <FadeIn direction="up">
          <div className="text-center">
            <h2 className="font-display text-3xl font-normal leading-tight text-white sm:text-4xl md:text-5xl">
              Se você já tentou e não conseguiu o resultado que queria
              <br />
              <span className="text-gold-light">
                Talvez não seja falta de esforço.
              </span>
            </h2>
            <p className="mt-4 font-display text-lg italic text-white/80 sm:text-xl">
              Seja falta de direção. Agora existe um método.
            </p>
          </div>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.2} direction="up">
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-md space-y-5"
            noValidate
          >
            {/* Name */}
            <div>
              <label
                htmlFor="form-name"
                className="mb-1.5 block font-body text-sm font-medium text-white/80"
              >
                Nome *
              </label>
              <input
                id="form-name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                }}
                onBlur={() => {
                  if (!name.trim())
                    setErrors((prev) => ({
                      ...prev,
                      name: "Por favor, informe seu nome.",
                    }));
                }}
                placeholder="Seu nome completo"
                className={`w-full rounded-xl border bg-white/10 px-4 py-3.5 font-body text-base text-white placeholder-white/40 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold ${
                  errors.name
                    ? "border-red-400"
                    : "border-white/20 hover:border-white/40"
                }`}
              />
              {errors.name && (
                <p className="mt-1 font-body text-xs text-red-300" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="form-phone"
                className="mb-1.5 block font-body text-sm font-medium text-white/80"
              >
                WhatsApp *
              </label>
              <input
                id="form-phone"
                type="tel"
                autoComplete="tel"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(formatPhone(e.target.value));
                  if (errors.phone)
                    setErrors((prev) => ({ ...prev, phone: "" }));
                }}
                onBlur={() => {
                  if (phone.replace(/\D/g, "").length < 10)
                    setErrors((prev) => ({
                      ...prev,
                      phone: "Informe um número válido com DDD.",
                    }));
                }}
                placeholder="(92) 99999-9999"
                className={`w-full rounded-xl border bg-white/10 px-4 py-3.5 font-body text-base text-white placeholder-white/40 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold ${
                  errors.phone
                    ? "border-red-400"
                    : "border-white/20 hover:border-white/40"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 font-body text-xs text-red-300" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Goal */}
            <div>
              <label
                htmlFor="form-goal"
                className="mb-1.5 block font-body text-sm font-medium text-white/80"
              >
                Qual seu objetivo hoje
              </label>
              <select
                id="form-goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full cursor-pointer appearance-none rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 font-body text-base text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-gold"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.5)' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  backgroundSize: "20px",
                }}
              >
                {GOALS.map((g) => (
                  <option
                    key={g.value}
                    value={g.value}
                    className="bg-brown-gold text-white"
                  >
                    {g.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <m.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="group mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 font-body text-base font-bold text-brown-gold-dark shadow-[0_4px_24px_rgba(216,178,43,0.35)] transition-shadow duration-300 hover:bg-gold-light hover:shadow-[0_8px_32px_rgba(216,178,43,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Abrindo WhatsApp...
                </>
              ) : (
                <>
                  Quero minha avaliação do Método DK
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </m.button>

            <p className="text-center font-body text-xs text-white/50 mt-3">
              Vagas limitadas por agenda da clínica.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
