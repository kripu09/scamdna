import type { PsychologicalFactors } from "@/types/analyzer";

type FactorBarsProps = {
  factors: PsychologicalFactors;
};

const FACTOR_CONFIG: Array<{ key: keyof PsychologicalFactors; label: string }> = [
  { key: "fear", label: "Fear" },
  { key: "urgency", label: "Urgency" },
  { key: "authority", label: "Authority" },
  { key: "greed", label: "Greed" },
  { key: "curiosity", label: "Curiosity" },
  { key: "trust_manipulation", label: "Trust Manipulation" },
  { key: "fomo", label: "FOMO" },
];

function getBarColor(value: number): string {
  if (value >= 75) return "#E5484D";
  if (value >= 45) return "#F59E0B";
  return "#00C16A";
}

export function FactorBars({ factors }: FactorBarsProps) {
  return (
    <div className="space-y-3">
      {FACTOR_CONFIG.map(({ key, label }) => {
        const value = factors[key];
        return (
          <div key={key} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--text)]">{label}</span>
              <span className="text-[var(--muted)]">{value}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--border)]">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${value}%`, backgroundColor: getBarColor(value) }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
