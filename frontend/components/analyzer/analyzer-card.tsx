"use client";

import { useState } from "react";

import { ReportCard } from "@/components/report/ReportCard";
import { analyzeMessage } from "@/lib/api";
import type { AnalyzeResponse } from "@/types/analyzer";

import { AnalyzeButton } from "./analyze-button";
import { MessageTextarea } from "./message-textarea";

export function AnalyzerCard() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<AnalyzeResponse | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      setError("Please paste a message to analyze.");
      setResult(null);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const analysis = await analyzeMessage(trimmedMessage);
      setResult(analysis);
    } catch {
      setError("Unable to analyze message. Please try again.");
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Analyzer input */}
      <div className="space-y-4">
        <MessageTextarea
          isDisabled={isLoading}
          onChange={setMessage}
          placeholder="Paste a suspicious WhatsApp, SMS, or email message here..."
          value={message}
        />

        <div className="flex items-center justify-between text-[13px] text-[var(--muted)]">
          <span className="flex items-center gap-1.5">
            🔒 We never store your original message.
          </span>
          <span className="font-medium tracking-wide">
            {message.length} / 5000 characters
          </span>
        </div>

        <AnalyzeButton
          isDisabled={isLoading || message.trim().length === 0}
          isLoading={isLoading}
          onClick={handleAnalyze}
        />

        {error ? (
          <div className="rounded-xl border border-[rgba(229,72,77,0.25)] bg-[rgba(229,72,77,0.08)] p-5">
            <h3 className="flex items-center gap-2 font-heading text-[17px] font-bold text-[var(--danger)]">
              ⚠️ Analysis Failed
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--text)]/80">
              Unable to analyze this message right now. Please try again in a few seconds.
            </p>
            <button
              className="mt-4 rounded-lg bg-[rgba(229,72,77,0.15)] px-4 py-2 text-[13px] font-semibold text-[var(--danger)] transition-colors hover:bg-[rgba(229,72,77,0.25)]"
              onClick={() => setError("")}
              type="button"
            >
              Try Again
            </button>
          </div>
        ) : null}
      </div>

      {/* Report renders directly below */}
      {result ? (
        <div className="mt-10 border-t border-[var(--border)] pt-10">
          <ReportCard result={result} />
        </div>
      ) : null}
    </div>
  );
}
