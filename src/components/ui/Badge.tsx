import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "default" | "accent" | "placeholder" | "inverse";
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  const tones = {
    default: "border-[#16181d]/15 bg-[#16181d]/[0.04] text-[#4b4f58]",
    accent: "border-[#e8480c]/30 bg-[#e8480c]/[0.07] text-[#c23a08]",
    placeholder: "border-dashed border-[#e8480c]/40 bg-[#e8480c]/[0.05] text-[#c23a08]",
    inverse: "border-white/20 bg-white/[0.07] text-white/85",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase leading-none tracking-[0.14em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
