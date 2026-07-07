import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&";

type DecryptedTextProps = {
  text: string;
  className?: string;
};

/**
 * Scramble-in label. Runs once when scrolled into view.
 * Reduced motion renders the final text immediately.
 */
export function DecryptedText({ text, className }: DecryptedTextProps) {
  const reduce = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(reduce ? text : "");
  const started = useRef(false);

  useEffect(() => {
    if (reduce) {
      setDisplay(text);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let interval = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        let step = 0;
        const total = Math.max(text.length * 2, 12);
        interval = window.setInterval(() => {
          step += 1;
          const resolved = Math.floor((step / total) * text.length);
          const scrambled = text
            .split("")
            .map((ch, i) => {
              if (ch === " " || i < resolved) return ch;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("");
          setDisplay(scrambled);
          if (step >= total) {
            setDisplay(text);
            window.clearInterval(interval);
          }
        }, 30);
        observer.disconnect();
      },
      { threshold: 0.5 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
    };
  }, [text, reduce]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{display || " "}</span>
    </span>
  );
}
