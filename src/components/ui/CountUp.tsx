import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

/**
 * Animates the numeric part of a value string ("~9.8", "2.7M+", "17 yrs")
 * from zero when it scrolls into view. Non-numeric values ("dbt Core",
 * "[PLACEHOLDER]") render as-is. Static under reduced motion.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const reduce = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  // Vertical-only margin: a horizontal inset would exclude elements near the
  // left edge on narrow viewports.
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const parsed = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  const [display, setDisplay] = useState(parsed && !reduce ? `${parsed[1]}0${parsed[3]}` : value);

  useEffect(() => {
    if (!parsed || reduce) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    const [, prefix, numStr, suffix] = parsed;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const decimals = (numStr.split(".")[1] ?? "").length;
    const grouped = numStr.includes(",");
    const start = performance.now();
    const duration = 1100;
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - t) ** 3;
      const current = target * eased;
      const text = grouped
        ? current.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        : current.toFixed(decimals);
      setDisplay(`${prefix}${text}${suffix}`);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
