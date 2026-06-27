import { ShieldCheck } from "lucide-react";

type RecommendationProps = {
  recommendation: string;
};

export function Recommendation({ recommendation }: RecommendationProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-[rgba(0,193,106,0.2)] bg-[rgba(0,193,106,0.06)] p-4">
      <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[var(--primary)]" />
      <div>
        <p className="text-sm font-medium text-[var(--primary)]">Recommendation</p>
        <p className="mt-1 text-sm leading-relaxed text-[var(--text)]">{recommendation}</p>
      </div>
    </div>
  );
}
