import type { ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });

  return (
    <div
      ref={ref}
      className={`scroll-hidden ${isVisible ? "scroll-visible" : ""} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
