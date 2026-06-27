import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { AnalyzeResponse } from "@/types/analyzer";

type RiskScoreProps = Pick<AnalyzeResponse, "risk_score" | "risk_level" | "scam_type">;

type RiskTone = "success" | "warning" | "danger";

function getRiskTone(score: number): { badgeTone: RiskTone; color: string } {
  if (score >= 75) return { badgeTone: "danger", color: "#E5484D" };
  if (score >= 45) return { badgeTone: "warning", color: "#F59E0B" };
  return { badgeTone: "success", color: "#00C16A" };
}

export function RiskScore({ risk_score, risk_level, scam_type }: RiskScoreProps) {
  const tone = getRiskTone(risk_score);
  const circumference = 2 * Math.PI * 40;
  const dashOffset = circumference - (circumference * risk_score) / 100;

  return (
    <Card className="p-5">
      <div className="flex items-center gap-5">
        {/* Score ring */}
        <div className="relative flex size-[120px] shrink-0 items-center justify-center sm:size-[140px] lg:size-[160px]">
          <svg aria-hidden="true" className="-rotate-90 h-full w-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="none" r="40" stroke="var(--border)" strokeWidth="8" />
            <circle
              cx="50" cy="50" fill="none" r="40"
              stroke={tone.color}
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={dashOffset}
              strokeLinecap="round" strokeWidth="8"
            />
          </svg>
          <span className="absolute font-heading text-[48px] font-extrabold leading-none lg:text-[56px]" style={{ color: tone.color }}>
            {risk_score}
          </span>
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
            Manipulation Risk Score
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Badge tone={tone.badgeTone}>{risk_level}</Badge>
            <span className="text-sm text-[var(--muted)]">·</span>
            <span className="text-sm text-[var(--muted)]">{scam_type}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
