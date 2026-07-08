import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { TextPressureHeadline } from "../components/hero/TextPressureHeadline";
import { CountUp } from "../components/ui/CountUp";
import { MagneticButton } from "../components/ui/MagneticButton";
import { certificates } from "../data/certificates";
import { profile } from "../data/profile";
import { mainProjects, secondaryProjects } from "../data/projects";

const STATS = [
  { value: `${mainProjects.length}`, label: "analytics systems" },
  { value: `${secondaryProjects.length}`, label: "supporting builds" },
  { value: `${certificates.length}`, label: "certifications" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 90]);
  const cardY = useTransform(scrollY, [0, 700], [0, -60]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 pb-16"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={reduce ? undefined : { y: bgY }}
      >
        <div className="bg-blueprint absolute inset-0" />
        {/* single accent field, top-right */}
        <div className="absolute -top-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-[#e8480c]/[0.07] blur-[100px]" />
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f7f6f3]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="inline-flex items-center gap-2.5 rounded-full border border-[#16181d]/15 bg-white/60 py-1.5 pr-4 pl-1.5 backdrop-blur">
            <img
              src={profile.photoHeadshot}
              alt=""
              className="h-7 w-7 rounded-full object-cover"
              width={28}
              height={28}
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#16181d]">
              {profile.name}
            </span>
          </p>

          <TextPressureHeadline
            text={profile.headline}
            className="mt-7 max-w-3xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-[#16181d] sm:text-6xl lg:text-[5rem]"
            tints={{ 3: "text-[#e8480c]", 4: "text-[#e8480c]", 5: "text-[#e8480c]" }}
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4b4f58] sm:text-lg">
            {profile.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <MagneticButton>
              <a
                href="#work"
                className="inline-block rounded-full bg-[#16181d] px-7 py-3 text-sm font-semibold text-[#f7f6f3] transition-colors hover:bg-[#e8480c] active:scale-[0.98]"
              >
                See the systems
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#contact"
                className="inline-block rounded-full border border-[#16181d]/20 bg-white/50 px-7 py-3 text-sm font-medium text-[#16181d] backdrop-blur transition-colors hover:border-[#e8480c]/60 active:scale-[0.98]"
              >
                Contact
              </a>
            </MagneticButton>
          </div>

          <dl className="mt-11 flex flex-wrap gap-x-9 gap-y-3 border-t border-[#16181d]/10 pt-5">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <dd className="font-mono text-xl font-bold text-[#16181d]">
                  <CountUp value={stat.value} />
                </dd>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a8e98]">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* pinned-badge portrait card, desktop only */}
        <motion.div className="hidden lg:block" style={reduce ? undefined : { y: cardY }}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -2.5 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="paper-card group mx-auto w-72 rounded-2xl p-4"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={profile.photo}
                alt={`${profile.name} portrait`}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                width={288}
                height={360}
              />
            </div>
            <div className="flex items-center justify-between px-1 pt-3 pb-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4b4f58]">
                {profile.roleLine.split(" / ")[0]}
              </p>
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#e8480c]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
