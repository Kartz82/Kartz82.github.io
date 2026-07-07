import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type MarqueeRowProps = {
  children: ReactNode;
  /** Pixels per second at full speed. */
  speed?: number;
  /** Multiplier applied while hovered (e.g. 0.2 = slows to 20%). */
  hoverFactor?: number;
  className?: string;
  ariaLabel?: string;
};

export type MarqueeRowHandle = {
  /** Nudge the track by one card-width. 1 = next (leftward), -1 = previous. */
  jump: (direction: 1 | -1) => void;
};

const JUMP_DURATION = 420;

/**
 * Right-to-left marquee driven by rAF so hover can ease the speed
 * without the position jumps CSS duration changes cause.
 * Reduced motion renders a static, natively scrollable row instead.
 */
export const MarqueeRow = forwardRef<MarqueeRowHandle, MarqueeRowProps>(
  function MarqueeRow(
    { children, speed = 60, hoverFactor = 0.18, className = "", ariaLabel },
    ref,
  ) {
    const reduce = usePrefersReducedMotion();
    const trackRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const targetFactor = useRef(1);
    const offsetRef = useRef(0);
    const jumpRef = useRef<{ from: number; to: number; start: number } | null>(null);

    useImperativeHandle(ref, () => ({
      jump(direction) {
        const track = trackRef.current;
        if (!track) return;
        const firstCard = track.children[0] as HTMLElement | undefined;
        const gap = 16; // matches gap-4
        const step = (firstCard?.getBoundingClientRect().width ?? 320) + gap;
        const current = offsetRef.current;
        jumpRef.current = {
          from: current,
          to: current - direction * step,
          start: performance.now(),
        };
      },
    }));

    useEffect(() => {
      if (reduce) return;
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      let factor = 1;
      let frame = 0;
      let last = performance.now();
      let visible = true;

      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
      });
      observer.observe(container);

      const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

      const tick = (now: number) => {
        if (visible) {
          const jump = jumpRef.current;
          if (jump) {
            const t = Math.min((now - jump.start) / JUMP_DURATION, 1);
            offsetRef.current = jump.from + (jump.to - jump.from) * easeOutCubic(t);
            if (t >= 1) jumpRef.current = null;
          } else {
            const dt = Math.min((now - last) / 1000, 0.05);
            factor += (targetFactor.current - factor) * 0.08;
            offsetRef.current -= speed * factor * dt;
          }

          const half = track.scrollWidth / 2;
          if (half > 0) {
            if (offsetRef.current <= -half) offsetRef.current += half;
            if (offsetRef.current > 0) offsetRef.current -= half;
          }
          track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
        last = now;
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);

      return () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
      };
    }, [reduce, speed]);

    if (reduce) {
      return (
        <div
          className={`flex gap-4 overflow-x-auto pb-2 ${className}`}
          aria-label={ariaLabel}
        >
          {children}
        </div>
      );
    }

    return (
      <div
        ref={containerRef}
        className={`overflow-hidden ${className}`}
        aria-label={ariaLabel}
        onPointerEnter={() => (targetFactor.current = hoverFactor)}
        onPointerLeave={() => (targetFactor.current = 1)}
        onFocusCapture={() => (targetFactor.current = 0)}
        onBlurCapture={() => (targetFactor.current = 1)}
      >
        <div ref={trackRef} className="flex w-max gap-4 will-change-transform">
          {children}
          <div className="flex gap-4" aria-hidden="true">
            {children}
          </div>
        </div>
      </div>
    );
  },
);
