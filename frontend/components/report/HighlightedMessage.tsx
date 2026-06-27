import type { TriggerSentence } from "@/types/analyzer";
import { Card } from "@/components/ui/Card";

type HighlightedMessageProps = {
  triggerSentences: TriggerSentence[];
};

// Map factors to color categories
function getFactorStyle(factor: string): { tagClass: string; sentenceClass: string } {
  const lower = factor.toLowerCase();
  if (lower.includes("fear") || lower.includes("urgency")) {
    return { tagClass: "highlight-tag highlight-tag--danger", sentenceClass: "highlight-sentence highlight-sentence--danger" };
  }
  if (lower.includes("greed") || lower.includes("fomo")) {
    return { tagClass: "highlight-tag highlight-tag--warning", sentenceClass: "highlight-sentence highlight-sentence--warning" };
  }
  return { tagClass: "highlight-tag highlight-tag--neutral", sentenceClass: "highlight-sentence highlight-sentence--neutral" };
}

export function HighlightedMessage({ triggerSentences }: HighlightedMessageProps) {
  if (!triggerSentences.length) return null;

  return (
    <Card className="p-5">
      <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
        Highlighted Message
      </p>
      <div className="space-y-1 rounded-xl bg-[var(--surface)] p-4 font-mono text-sm leading-7">
        {triggerSentences.map((item, index) => {
          const style = getFactorStyle(item.factor);
          return (
            <span key={`${item.sentence}-${index}`} className={style.sentenceClass}>
              <span className="text-[var(--text)]">{item.sentence}</span>
              <span className={style.tagClass}>{item.factor.toUpperCase()}</span>
            </span>
          );
        })}
      </div>
      {/* Inline explanations */}
      <div className="mt-4 space-y-2">
        {triggerSentences.map((item, index) => {
          const style = getFactorStyle(item.factor);
          return (
            <div key={`reason-${index}`} className="flex items-start gap-2 text-sm">
              <span className={`${style.tagClass} mt-0.5 shrink-0`}>{item.factor.toUpperCase()}</span>
              <span className="text-[var(--muted)]">{item.reason}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
