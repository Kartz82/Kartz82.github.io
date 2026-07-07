import { useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import type { Certificate, IssuerTheme } from "../../types/portfolio";

type ThemeStyle = {
  card: string;
  title: string;
  meta: string;
  accentBar: string;
  glow: string;
};

const GOOGLE_BAR =
  "bg-[linear-gradient(90deg,#4285f4_25%,#ea4335_25%,#ea4335_50%,#fbbc05_50%,#fbbc05_75%,#34a853_75%)]";

const THEMES: Record<IssuerTheme, ThemeStyle> = {
  microsoft: {
    card: "border-[#16181d]/12 bg-gradient-to-br from-white to-slate-100 text-slate-900",
    title: "text-slate-900",
    meta: "text-slate-600",
    accentBar:
      "bg-[linear-gradient(90deg,#f25022_25%,#7fba00_25%,#7fba00_50%,#00a4ef_50%,#00a4ef_75%,#ffb900_75%)]",
    glow: "hover:shadow-[0_18px_50px_rgba(255,255,255,0.12)]",
  },
  "google-cloud": {
    card: "border-[#16181d]/12 bg-gradient-to-br from-white to-blue-50 text-slate-900",
    title: "text-slate-900",
    meta: "text-slate-600",
    accentBar: GOOGLE_BAR,
    glow: "hover:shadow-[0_18px_50px_rgba(66,133,244,0.2)]",
  },
  databricks: {
    card: "border-orange-300/50 bg-gradient-to-br from-[#2a1613] to-[#1b100d] text-orange-50",
    title: "text-orange-50",
    meta: "text-orange-200/80",
    accentBar: "bg-gradient-to-r from-[#ff3621] to-[#ff8a3d]",
    glow: "hover:shadow-[0_18px_50px_rgba(255,54,33,0.22)]",
  },
  dbt: {
    card: "border-orange-300/50 bg-gradient-to-br from-[#271511] to-[#190f0c] text-orange-50",
    title: "text-orange-50",
    meta: "text-orange-200/80",
    accentBar: "bg-gradient-to-r from-[#ff694a] to-[#ffb38a]",
    glow: "hover:shadow-[0_18px_50px_rgba(255,105,74,0.22)]",
  },
  snowflake: {
    card: "border-sky-200/70 bg-gradient-to-br from-white to-sky-100 text-slate-900",
    title: "text-slate-900",
    meta: "text-sky-800/80",
    accentBar: "bg-gradient-to-r from-[#29b5e8] to-[#7dd3fc]",
    glow: "hover:shadow-[0_18px_50px_rgba(41,181,232,0.22)]",
  },
  "google-skillshop": {
    card: "border-[#16181d]/12 bg-gradient-to-br from-white to-amber-50 text-slate-900",
    title: "text-slate-900",
    meta: "text-slate-600",
    accentBar: GOOGLE_BAR,
    glow: "hover:shadow-[0_18px_50px_rgba(251,188,5,0.18)]",
  },
  cisco: {
    card: "border-[#16181d]/12 bg-gradient-to-br from-white to-blue-50 text-slate-900",
    title: "text-slate-900",
    meta: "text-slate-600",
    accentBar: "bg-gradient-to-r from-[#049fd9] to-[#67e8f9]",
    glow: "hover:shadow-[0_18px_50px_rgba(4,159,217,0.2)]",
  },
  kaggle: {
    card: "border-[#16181d]/12 bg-gradient-to-br from-white to-cyan-50 text-slate-900",
    title: "text-slate-900",
    meta: "text-slate-600",
    accentBar: "bg-gradient-to-r from-[#20beff] to-[#7dd3fc]",
    glow: "hover:shadow-[0_18px_50px_rgba(32,190,255,0.2)]",
  },
  ibm: {
    card: "border-blue-300/50 bg-gradient-to-br from-[#101b33] to-[#0b1222] text-blue-50",
    title: "text-blue-50",
    meta: "text-blue-200/80",
    accentBar: "bg-gradient-to-r from-[#0f62fe] to-[#78a9ff]",
    glow: "hover:shadow-[0_18px_50px_rgba(15,98,254,0.22)]",
  },
};

/**
 * Credential flip card. Front: title, issuer, category with issuer-themed
 * styling. Back: skills gained, tools covered, role relevance. Click, tap,
 * Enter, or Space flips it; reduced motion swaps faces without rotation.
 */
export function CertificateFlipCard({ certificate }: { certificate: Certificate }) {
  const [flipped, setFlipped] = useState(false);
  const reduce = usePrefersReducedMotion();
  const theme = THEMES[certificate.issuerTheme];

  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      aria-pressed={flipped}
      aria-label={`${certificate.title}, issued by ${certificate.issuer}. ${
        flipped ? "Showing details. Activate to show front." : "Activate to show details."
      }`}
      className={`group h-72 w-72 shrink-0 rounded-2xl text-left transition-shadow duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8480c] sm:w-80 ${theme.glow}`}
      style={{ perspective: 1100 }}
    >
      <span
        className="relative block h-full w-full transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transformStyle: "preserve-3d",
          transform:
            flipped && !reduce
              ? "rotateY(180deg) scale(1.02)"
              : "rotateY(0deg) scale(1)",
        }}
      >
        {/* Front */}
        <span
          className={`absolute inset-0 flex flex-col overflow-hidden rounded-2xl border p-6 shadow-xl ${theme.card} ${
            reduce && flipped ? "invisible" : ""
          }`}
          style={{ backfaceVisibility: "hidden" }}
          aria-hidden={flipped}
        >
          {/* soft glare */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-10 h-44 w-44 rotate-12 rounded-full bg-white/40 blur-2xl mix-blend-soft-light"
          />
          <span
            className={`block h-2 w-20 rounded-full shadow-sm ${theme.accentBar}`}
            aria-hidden="true"
          />
          <span
            className={`mt-4 block font-mono text-[10px] uppercase tracking-[0.2em] ${theme.meta}`}
          >
            {certificate.category}
          </span>
          <span
            className={`mt-2 block font-display text-lg font-semibold leading-snug ${theme.title}`}
          >
            {certificate.title}
          </span>
          <span className={`mt-auto block text-sm font-semibold ${theme.meta}`}>
            {certificate.issuer}
          </span>
          <span className={`mt-2 block text-xs opacity-80 ${theme.meta}`}>
            Tap to view details
          </span>
        </span>

        {/* Back */}
        <span
          className={`absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-[#141b30] to-[#0c1120] p-6 text-slate-100 shadow-xl ${
            reduce && !flipped ? "invisible" : ""
          }`}
          style={{
            backfaceVisibility: "hidden",
            transform: reduce ? undefined : "rotateY(180deg)",
          }}
          aria-hidden={!flipped}
        >
          <span className={`block h-2 w-20 rounded-full ${theme.accentBar}`} aria-hidden="true" />
          <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-amber-200/80">
            Skills gained
          </span>
          <span className="mt-1 block text-[13px] leading-relaxed text-slate-100">
            {certificate.skillsGained.join(" · ")}
          </span>
          {certificate.toolsCovered && (
            <>
              <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-sky-200/80">
                Tools covered
              </span>
              <span className="mt-1 block text-[13px] leading-relaxed text-slate-100">
                {certificate.toolsCovered.join(" · ")}
              </span>
            </>
          )}
          <span className="mt-auto block text-xs leading-relaxed text-slate-300">
            {certificate.roleRelevance}
          </span>
        </span>
      </span>
    </button>
  );
}
