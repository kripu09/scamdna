import type { AnalyzeResponse } from "@/types/analyzer";
import { AccordionItem } from "@/components/ui/Accordion";

import { Disclaimer } from "./Disclaimer";
import { FactorBars } from "./FactorBars";
import { HighlightedMessage } from "./HighlightedMessage";
import { ManipulationFlow } from "./ManipulationFlow";
import { Recommendation } from "./Recommendation";
import { RiskScore } from "./RiskScore";

type ReportCardProps = {
  result: AnalyzeResponse;
};

export function ReportCard({ result }: ReportCardProps) {
  return (
    <div className="space-y-4">
      {/* 1. Risk Score — most prominent */}
      <RiskScore
        language_detected={result.language_detected}
        risk_level={result.risk_level}
        risk_score={result.risk_score}
        scam_type={result.scam_type}
      />

      {/* 2. Why This Looks Suspicious */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
        <h2 className="font-heading text-[22px] font-bold text-[var(--text)]">
          Why This Looks Suspicious
        </h2>
        <p className="mt-1 text-sm font-medium text-[var(--text)]/60">
          Key manipulation tactics identified in the message.
        </p>
        <div className="mt-4 text-base leading-relaxed text-[var(--text)]/90">
          {result.scam_explanation}
        </div>
      </div>

      {/* 3. Highlighted Message — signature feature */}
      <HighlightedMessage triggerSentences={result.trigger_sentences} />

      {/* 4. Recommendation */}
      <Recommendation recommendation={result.recommendation} />

      {/* 5. Advanced Analysis — accordion */}
      <div className="space-y-3 pt-2">
        <div className="mb-4">
          <h2 className="font-heading text-[22px] font-bold text-[var(--text)]">
            Advanced Analysis
          </h2>
          <p className="mt-1 text-sm font-medium text-[var(--text)]/60">
            Deep dive into the psychological breakdown.
          </p>
        </div>
        <AccordionItem title="Psychological Factors">
          <FactorBars factors={result.psychological_factors} />
        </AccordionItem>
        <AccordionItem title="Manipulation Flow">
          <ManipulationFlow steps={result.manipulation_flow} />
        </AccordionItem>
        <AccordionItem title="Technical Details">
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-[var(--muted)]">Scam Type</span>
              <span className="text-[var(--text)]">{result.scam_type}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--muted)]">Language Detected</span>
              <span className="text-[var(--text)]">{result.language_detected}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--muted)]">Risk Level</span>
              <span className="text-[var(--text)]">{result.risk_level}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--muted)]">Triggers Found</span>
              <span className="text-[var(--text)]">{result.trigger_sentences.length}</span>
            </div>
          </div>
        </AccordionItem>
      </div>

      {/* 6. Disclaimer */}
      <Disclaimer />
    </div>
  );
}
