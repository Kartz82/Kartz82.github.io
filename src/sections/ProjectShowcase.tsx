import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Badge } from "../components/ui/Badge";
import { CountUp } from "../components/ui/CountUp";
import { DecryptedText } from "../components/ui/DecryptedText";
import { Reveal } from "../components/ui/Reveal";
import { useIsMobile } from "../hooks/useIsMobile";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import type { MainProject } from "../types/portfolio";
import { mainProjects, secondaryProjects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

function ProjectPanel({ project, index }: { project: MainProject; index: number }) {
  const image = project.visualAssets?.[0];

  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="relative grid w-full items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
    >
      <div>
        <p className="font-display text-6xl font-bold leading-none tracking-tighter text-[#16181d]/[0.08] sm:text-7xl">
          0{index + 1}
        </p>
        <h3
          id={`${project.id}-title`}
          className="mt-2 font-display text-3xl font-bold tracking-tight text-[#16181d] sm:text-4xl"
        >
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-[#c23a08]">{project.recruiterTitle}</p>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#4b4f58]">
          {project.hook}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <Badge key={tool}>{tool}</Badge>
          ))}
        </div>

        <dl className="mt-6 grid max-w-md grid-cols-3 gap-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className={`rounded-xl border bg-white/70 p-3 ${
                metric.verified
                  ? "border-[#16181d]/12"
                  : "border-dashed border-[#e8480c]/35"
              }`}
            >
              <dt className="font-mono text-[9px] uppercase tracking-wider text-[#8a8e98]">
                {metric.label}
              </dt>
              <dd
                className={`mt-1 font-mono text-sm font-bold ${
                  metric.verified ? "text-[#16181d]" : "text-[#c23a08]"
                }`}
              >
                <CountUp value={metric.value} />
              </dd>
            </div>
          ))}
        </dl>

        {project.links.map((link) =>
          link.type === "placeholder" ? (
            <div key={link.label} className="mt-4">
              <Badge tone="placeholder">{link.label}</Badge>
            </div>
          ) : (
            <a
              key={link.label}
              href={link.href}
              rel="noreferrer"
              className="mt-4 inline-block rounded-full border border-[#16181d]/20 px-4 py-1.5 text-sm text-[#16181d] transition-colors hover:border-[#e8480c]/60"
            >
              {link.label}
            </a>
          ),
        )}
      </div>

      {/* framed dashboard panel */}
      <figure className="ink-panel group overflow-hidden rounded-2xl p-3">
        <div className="flex items-center gap-2 px-1 pb-2.5 pt-0.5">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
          </span>
          <span className="ml-2 truncate font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
            {image?.src.split("/").pop() ?? "report.png"}
          </span>
        </div>
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            className="aspect-[16/9] w-full rounded-lg object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            loading={index === 0 ? "eager" : "lazy"}
          />
        ) : (
          <ul className="space-y-2 p-4">
            {project.outputs.map((output) => (
              <li key={output} className="rounded-lg bg-white/[0.06] px-4 py-3 text-sm text-white/85">
                {output}
              </li>
            ))}
          </ul>
        )}
        <figcaption className="px-1 pt-2.5 pb-1 text-xs text-white/50">
          {image?.alt ?? project.recruiterTitle}
        </figcaption>
      </figure>
    </article>
  );
}

/**
 * Act 2: the five systems. Desktop scrolls vertically while the panels pan
 * horizontally through a pinned viewport; mobile and reduced-motion get a
 * plain vertical stack of the same panels.
 */
export function ProjectShowcase() {
  const reduce = usePrefersReducedMotion();
  const isMobile = useIsMobile(1024);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const horizontal = !reduce && !isMobile;

  useEffect(() => {
    if (!horizontal) return;
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const current = Math.min(
              mainProjects.length,
              Math.floor(self.progress * mainProjects.length) + 1,
            );
            if (counterRef.current) {
              counterRef.current.textContent = `0${current}`;
            }
          },
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, [horizontal]);

  if (!horizontal) {
    return (
      <section id="work" className="scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <DecryptedText
              text="Selected Systems"
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#c23a08]"
            />
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#16181d] sm:text-5xl">
              Five analytics systems
            </h2>
          </Reveal>
          <div className="mt-14 space-y-20">
            {mainProjects.map((project, index) => (
              <Reveal key={project.id}>
                <ProjectPanel project={project} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="scroll-mt-16">
      <div ref={wrapRef} className="relative flex h-[100dvh] flex-col overflow-hidden">
        <div className="mx-auto flex w-full max-w-7xl items-baseline justify-between px-5 pt-24 sm:px-8">
          <DecryptedText
            text="Selected Systems"
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#c23a08]"
          />
          <p className="font-mono text-sm text-[#8a8e98]" aria-hidden="true">
            <span ref={counterRef} className="font-bold text-[#16181d]">
              01
            </span>
            {" / "}0{mainProjects.length}
          </p>
        </div>

        <div ref={trackRef} className="flex h-full items-center will-change-transform">
          {mainProjects.map((project, index) => (
            <div
              key={project.id}
              className="flex h-full w-screen shrink-0 items-center px-5 sm:px-8 lg:px-16"
            >
              <div className="mx-auto w-full max-w-6xl">
                <ProjectPanel project={project} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Compact strip for the three supporting builds, below the showcase. */
export function SecondaryStrip() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4">
            <DecryptedText
              text="Also Built"
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#c23a08]"
            />
            <span
              aria-hidden="true"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8e98]"
            >
              Supporting work
            </span>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {secondaryProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.07}>
              <article className="paper-card group flex h-full flex-col rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold tracking-tight text-[#16181d]">
                  {project.title}
                </h3>
                <ul className="mt-3 flex-1 space-y-2">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-[#4b4f58]">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-1 w-3 shrink-0 rounded-full bg-[#e8480c]/60"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[#16181d]/10 pt-4">
                  {project.badges.map((badge) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
