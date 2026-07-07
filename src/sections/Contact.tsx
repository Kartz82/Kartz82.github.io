import { useState } from "react";
import { MagneticButton } from "../components/ui/MagneticButton";
import { Reveal } from "../components/ui/Reveal";
import { links } from "../data/links";
import { profile } from "../data/profile";

/** Act 5: full-bleed ink closing block with contact actions and footer. */
export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable; the mailto link still works.
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 px-3 pb-3 pt-10 sm:px-4 sm:pb-4">
      <div className="relative overflow-hidden rounded-3xl bg-[#101218] px-6 py-16 text-white sm:px-12 sm:py-20 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#e8480c]/[0.14] blur-[100px]"
        />

        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#ff8a5c]">
              Contact
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Systems ready for review.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {profile.openTo}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <a
                  href={`mailto:${links.email}`}
                  className="inline-block rounded-full bg-[#e8480c] px-7 py-3 text-sm font-semibold text-white transition-[filter] hover:brightness-110 active:scale-[0.98]"
                >
                  {links.email}
                </a>
              </MagneticButton>
              <button
                type="button"
                onClick={copyEmail}
                className="rounded-full border border-white/25 px-5 py-3 text-sm text-white/85 transition-colors hover:border-[#ff8a5c] hover:text-white"
                aria-live="polite"
              >
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={links.github}
                rel="noreferrer"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 transition-colors hover:border-white/50 hover:text-white"
              >
                GitHub / Kartz82
              </a>
              <a
                href={links.resume}
                download
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 transition-colors hover:border-white/50 hover:text-white"
              >
                Download resume (PDF)
              </a>
              {links.linkedin && (
                <a
                  href={links.linkedin}
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 transition-colors hover:border-white/50 hover:text-white"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </Reveal>

          {/* footer */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <p
              aria-hidden="true"
              className="select-none bg-gradient-to-b from-white/[0.14] to-white/[0.02] bg-clip-text font-display text-[16vw] font-bold leading-none tracking-tighter text-transparent sm:text-9xl"
            >
              {profile.name.split(" ")[0]}
            </p>
            <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <p className="text-sm text-white/45">
                {profile.name} · Analytics Engineering Portfolio
              </p>
              <a href="#top" className="text-sm text-white/60 transition-colors hover:text-white">
                Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
