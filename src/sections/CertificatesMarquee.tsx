import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useRef } from "react";
import { CertificateFlipCard } from "../components/certificates/CertificateFlipCard";
import { Section } from "../components/layout/Section";
import { MarqueeRow, type MarqueeRowHandle } from "../components/ui/MarqueeRow";
import { certificates } from "../data/certificates";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const ARROW_CLASS =
  "flex h-10 w-10 items-center justify-center rounded-full border border-[#16181d]/20 bg-white/70 text-[#16181d] transition-colors hover:border-[#e8480c] hover:text-[#e8480c] active:scale-95";

export function CertificatesMarquee() {
  const reduce = usePrefersReducedMotion();
  const marqueeRef = useRef<MarqueeRowHandle>(null);

  return (
    <Section
      id="certificates"
      label="Certificates"
      meta="03 / Credentials"
      title="Credentials"
      intro="Click or tap a card for the skills gained, tools covered, and role relevance."
      wide
    >
      {reduce ? (
        // Static grid fallback: no auto-scroll under reduced motion.
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label="Certificates">
          {certificates.map((certificate) => (
            <CertificateFlipCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      ) : (
        <div className="relative">
          <MarqueeRow
            ref={marqueeRef}
            speed={55}
            ariaLabel="Certificates"
            className="mask-fade-x py-2"
          >
            {certificates.map((certificate) => (
              <CertificateFlipCard key={certificate.id} certificate={certificate} />
            ))}
          </MarqueeRow>

          <div className="mt-5 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => marqueeRef.current?.jump(-1)}
              aria-label="Show previous certificates"
              className={ARROW_CLASS}
            >
              <CaretLeft size={18} weight="bold" />
            </button>
            <button
              type="button"
              onClick={() => marqueeRef.current?.jump(1)}
              aria-label="Show next certificates"
              className={ARROW_CLASS}
            >
              <CaretRight size={18} weight="bold" />
            </button>
          </div>
        </div>
      )}
    </Section>
  );
}
