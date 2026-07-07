import { motion, useScroll, useSpring } from "framer-motion";

/** Thin accent progress bar pinned above the navbar. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-[#e8480c]"
      style={{ scaleX }}
    />
  );
}
