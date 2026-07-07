import { Fragment, useEffect, useRef } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type TextPressureHeadlineProps = {
  text: string;
  className?: string;
  /** Optional word-index -> className map for tinting phrase groups. */
  tints?: Record<number, string>;
};

const MIN_WEIGHT = 420;
const MAX_WEIGHT = 760;
const RADIUS = 150;
const SPACE = " ";

/**
 * Variable-font "pressure" headline: letters near the cursor gain weight.
 * Writes styles directly on refs (no React state per frame).
 * Static on mobile and under reduced motion.
 */
export function TextPressureHeadline({
  text,
  className = "",
  tints = {},
}: TextPressureHeadlineProps) {
  const reduce = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLHeadingElement>(null);
  const interactive = !reduce && !isMobile;
  const words = text.split(SPACE);

  useEffect(() => {
    if (!interactive) return;
    const container = containerRef.current;
    if (!container) return;
    const letters = Array.from(
      container.querySelectorAll<HTMLSpanElement>("[data-letter]"),
    );

    let frame = 0;
    let pointer: { x: number; y: number } | null = null;

    const apply = () => {
      frame = 0;
      for (const letter of letters) {
        let weight = MIN_WEIGHT;
        if (pointer) {
          const rect = letter.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dist = Math.hypot(pointer.x - cx, pointer.y - cy);
          const t = Math.max(0, 1 - dist / RADIUS);
          weight = MIN_WEIGHT + (MAX_WEIGHT - MIN_WEIGHT) * t * t;
        }
        letter.style.fontVariationSettings = `"wght" ${Math.round(weight)}`;
      }
    };

    const onMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      pointer = null;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    container.addEventListener("pointermove", onMove);
    container.addEventListener("pointerleave", onLeave);
    return () => {
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [interactive]);

  if (!interactive) {
    return (
      <h1 className={className}>
        {words.map((word, wi) => (
          <Fragment key={wi}>
            <span className={`inline-block ${tints[wi] ?? ""}`}>{word}</span>
            {wi < words.length - 1 ? SPACE : ""}
          </Fragment>
        ))}
      </h1>
    );
  }

  return (
    <h1 ref={containerRef} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <Fragment key={wi}>
          <span
            className={`inline-block whitespace-nowrap ${tints[wi] ?? ""}`}
            aria-hidden="true"
          >
            {word.split("").map((ch, ci) => (
              <span
                key={ci}
                data-letter
                className="inline-block transition-[font-variation-settings] duration-75"
                style={{ fontVariationSettings: `"wght" ${MIN_WEIGHT}` }}
              >
                {ch}
              </span>
            ))}
          </span>
          {wi < words.length - 1 ? SPACE : ""}
        </Fragment>
      ))}
    </h1>
  );
}
