import { TriangleAlert } from "lucide-react";

export function Disclaimer() {
  return (
    <div className="flex items-start gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 text-xs leading-relaxed text-[var(--muted)]">
      <TriangleAlert className="mt-0.5 size-3.5 shrink-0 text-[var(--warning)]" />
      <p>
        This analysis identifies psychological manipulation patterns. It does not make definitive fraud determinations. Verify important information independently.
      </p>
    </div>
  );
}
