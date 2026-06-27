import { ArrowDown } from "lucide-react";

type ManipulationFlowProps = {
  steps: string[];
};

export function ManipulationFlow({ steps }: ManipulationFlowProps) {
  return (
    <div className="flex flex-col items-start gap-1">
      {steps.map((step, index) => (
        <div key={`${step}-${index}`} className="flex flex-col items-start">
          <span className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-sm font-medium text-[var(--text)]">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <ArrowDown className="my-1 ml-3 size-3 text-[var(--muted)]" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
