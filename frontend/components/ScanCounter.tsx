"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

import { getStats } from "@/lib/api";

export function ScanCounter() {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const stats = await getStats();
        setTotal(stats.total_scans);
      } catch (err) {
        // Fail silently to not disrupt the UI
      }
    }
    fetchStats();
  }, []);

  if (total === null) {
    return (
      <div className="flex h-8 animate-pulse items-center justify-center rounded-full bg-[var(--surface)] px-4">
        <div className="h-3 w-32 rounded bg-[var(--border)]" />
      </div>
    );
  }

  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/50 px-4 py-1.5 text-sm font-medium text-[var(--muted)] shadow-sm backdrop-blur">
      <ShieldCheck className="size-4 text-[var(--primary)]" />
      <span>
        <strong className="text-[var(--text)]">{total.toLocaleString()}</strong> Scam Messages Analyzed
      </span>
    </div>
  );
}
