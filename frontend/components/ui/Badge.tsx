import type { ReactNode } from "react";

type BadgeTone = "neutral" | "primary" | "success" | "warning" | "danger";

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
};

function getToneClasses(tone: BadgeTone): string {
  if (tone === "primary" || tone === "success") {
    return "border-[rgba(0,193,106,0.25)] bg-[rgba(0,193,106,0.1)] text-[#00C16A]";
  }

  if (tone === "warning") {
    return "border-[rgba(245,158,11,0.25)] bg-[rgba(245,158,11,0.1)] text-[#F59E0B]";
  }

  if (tone === "danger") {
    return "border-[rgba(229,72,77,0.25)] bg-[rgba(229,72,77,0.1)] text-[#E5484D]";
  }

  return "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]";
}

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${getToneClasses(
        tone,
      )}`}
    >
      {children}
    </span>
  );
}
