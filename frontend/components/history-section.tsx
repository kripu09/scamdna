"use client";

import { useEffect, useState } from "react";
import { AlertCircle, Clock, ShieldAlert } from "lucide-react";

import { getHistory } from "@/lib/api";
import type { AnalysisHistory } from "@/types/analyzer";

function getRelativeTime(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function getRiskBadgeColor(score: number) {
  if (score >= 80) return "text-[#E5484D] bg-[rgba(229,72,77,0.1)] border-[rgba(229,72,77,0.25)]";
  if (score >= 50) return "text-[#F59E0B] bg-[rgba(245,158,11,0.1)] border-[rgba(245,158,11,0.25)]";
  if (score >= 30) return "text-[#F5D90B] bg-[rgba(245,217,11,0.1)] border-[rgba(245,217,11,0.25)]";
  return "text-[var(--primary)] bg-[rgba(0,193,106,0.1)] border-[rgba(0,193,106,0.25)]";
}

export function HistorySection() {
  const [history, setHistory] = useState<AnalysisHistory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const data = await getHistory();
        setHistory(data);
        setError(null);
      } catch (err) {
        setError("Unable to load recent analyses.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchHistory();
  }, []);

  if (isLoading) {
    return (
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex h-[88px] animate-pulse flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
          >
            <div className="flex items-center justify-between">
              <div className="h-4 w-24 rounded bg-[var(--border)]" />
              <div className="h-5 w-12 rounded-full bg-[var(--border)]" />
            </div>
            <div className="h-3 w-32 rounded bg-[var(--border)]" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center rounded-xl border border-[rgba(229,72,77,0.25)] bg-[rgba(229,72,77,0.08)] p-6 text-sm text-[var(--danger)]">
        <AlertCircle className="mr-2 size-5" />
        {error}
      </div>
    );
  }

  if (history.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)] p-10 text-center">
        <ShieldAlert className="size-8 text-[var(--muted)]" />
        <p className="mt-3 text-sm font-medium text-[var(--text)]">
          No analyses yet. Run your first scan.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {history.map((item, i) => (
        <div
          key={i}
          className="group flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--primary)] hover:bg-[var(--card)]"
        >
          <div className="flex items-center justify-between">
            <h4 className="truncate text-sm font-semibold text-[var(--text)]">
              {item.scam_type}
            </h4>
            <span
              className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getRiskBadgeColor(
                item.risk_score
              )}`}
            >
              {item.risk_score}/100
            </span>
          </div>
          <div className="mt-3 flex items-center text-xs text-[var(--muted)]">
            <Clock className="mr-1.5 size-3.5" />
            {getRelativeTime(item.created_at)}
          </div>
        </div>
      ))}
    </div>
  );
}
