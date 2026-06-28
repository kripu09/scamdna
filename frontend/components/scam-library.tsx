"use client";

import { useState } from "react";
import {
  Building2,
  Briefcase,
  Gift,
  Headset,
  Heart,
  KeySquare,
  Package,
  QrCode,
  Smartphone,
  TrendingUp,
  X,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { scamLibrary, type ScamCategory } from "@/data/scam-library";

const ICON_MAP: Record<string, LucideIcon> = {
  Building2,
  Smartphone,
  Briefcase,
  Gift,
  KeySquare,
  Package,
  TrendingUp,
  Headset,
  QrCode,
  Heart,
};

function getRiskColor(risk: string) {
  switch (risk.toLowerCase()) {
    case "critical":
      return "text-[#E5484D] bg-[rgba(229,72,77,0.1)] border-[rgba(229,72,77,0.25)]";
    case "high":
      return "text-[#F59E0B] bg-[rgba(245,158,11,0.1)] border-[rgba(245,158,11,0.25)]";
    default:
      return "text-[var(--primary)] bg-[rgba(0,193,106,0.1)] border-[rgba(0,193,106,0.25)]";
  }
}

export function ScamLibrary() {
  const [selectedScam, setSelectedScam] = useState<ScamCategory | null>(null);

  // Lock body scroll when modal is open
  if (typeof document !== "undefined") {
    document.body.style.overflow = selectedScam ? "hidden" : "unset";
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {scamLibrary.map((scam) => {
          const IconComponent = ICON_MAP[scam.icon] || ShieldAlert;
          return (
            <button
              key={scam.id}
              onClick={() => setSelectedScam(scam)}
              className="flex min-h-[90px] flex-col items-center justify-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--primary)] hover:bg-[var(--card)]"
              type="button"
            >
              <IconComponent className="size-6 text-[var(--primary)]" />
              <span className="text-center text-[13px] font-semibold text-[var(--text)]">
                {scam.title}
              </span>
            </button>
          );
        })}
      </div>

      {selectedScam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#08120F]/80 backdrop-blur-sm"
            onClick={() => setSelectedScam(null)}
            aria-hidden="true"
          />

          {/* Modal */}
          <div
            className="relative flex max-h-full w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--border)] p-5 sm:px-6">
              <div className="flex items-center gap-3">
                {(() => {
                  const Icon = ICON_MAP[selectedScam.icon] || ShieldAlert;
                  return <Icon className="size-6 text-[var(--primary)]" />;
                })()}
                <h3 className="font-heading text-xl font-bold text-[var(--text)]">
                  {selectedScam.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedScam(null)}
                className="rounded-lg p-2 text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text)]"
                type="button"
                aria-label="Close dialog"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-5 sm:p-6">
              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                      Risk Level
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${getRiskColor(
                        selectedScam.risk
                      )}`}
                    >
                      {selectedScam.risk}
                    </span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-[var(--text)]/90">
                    {selectedScam.description}
                  </p>
                </div>

                <div className="rounded-xl border border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.05)] p-5">
                  <h4 className="flex items-center gap-2 text-[15px] font-bold text-[#F59E0B]">
                    <AlertTriangle className="size-4" />
                    Red Flags
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {selectedScam.redFlags.map((flag, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[14px] text-[var(--text)]/90">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#F59E0B]" />
                        <span className="leading-relaxed">{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-[rgba(0,193,106,0.2)] bg-[rgba(0,193,106,0.05)] p-5">
                  <h4 className="flex items-center gap-2 text-[15px] font-bold text-[var(--primary)]">
                    <ShieldCheck className="size-4" />
                    How to Stay Safe
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {selectedScam.preventionTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[14px] text-[var(--text)]/90">
                        <span className="mt-1 text-[var(--primary)]">✓</span>
                        <span className="leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
