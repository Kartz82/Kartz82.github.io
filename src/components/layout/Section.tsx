import type { ReactNode } from "react";
import { Container } from "./Container";
import { DecryptedText } from "../ui/DecryptedText";
import { Reveal } from "../ui/Reveal";

type SectionProps = {
  id: string;
  label?: string;
  meta?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  wide?: boolean;
};

export function Section({
  id,
  label,
  meta,
  title,
  intro,
  children,
  className = "",
  wide = false,
}: SectionProps) {
  // "02 / Credentials" style meta -> oversized ghost numeral
  const ghost = meta?.match(/\d+/)?.[0];

  return (
    <section id={id} className={`relative scroll-mt-24 py-24 sm:py-32 ${className}`}>
      <Container className={wide ? "max-w-7xl" : ""}>
        {(label || title) && (
          <Reveal className="relative mb-12 sm:mb-16">
            {ghost && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 right-0 select-none font-display text-[7rem] font-bold leading-none tracking-tighter text-[#16181d]/[0.05] sm:-top-16 sm:text-[10rem]"
              >
                {ghost}
              </span>
            )}
            {label && (
              <div className="flex items-baseline justify-between gap-4">
                <DecryptedText
                  text={label}
                  className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#c23a08]"
                />
                {meta && (
                  <span
                    aria-hidden="true"
                    className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8e98]"
                  >
                    {meta}
                  </span>
                )}
              </div>
            )}
            {title && (
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-[#16181d] sm:text-5xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4b4f58] sm:text-lg">
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
