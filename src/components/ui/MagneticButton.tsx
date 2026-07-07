import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

/**
 * Wrapper that pulls its child gently toward the cursor.
 * Static on mobile and under reduced motion.
 */
export function MagneticButton({
  children,
  className = "",
  strength = 0.25,
}: MagneticButtonProps) {
  const reduce = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16 });
  const sy = useSpring(y, { stiffness: 180, damping: 16 });

  if (reduce || isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={{ x: sx, y: sy, display: "inline-block" }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * strength);
        y.set((event.clientY - rect.top - rect.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
