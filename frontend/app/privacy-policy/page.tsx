import { 
  Lock, 
  ShieldCheck, 
  Bot, 
  Globe, 
  Ban, 
  AlertTriangle 
} from "lucide-react";

import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "Privacy Policy | ScamDNA",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center sm:text-left">
            <h1 className="font-heading text-4xl font-bold text-[var(--text)] sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-base text-[var(--muted)]">
              How ScamDNA handles your data and protects your privacy.
            </p>
          </div>

          {/* Quick Summary Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 text-center">
              <Lock className="size-6 text-[var(--primary)]" />
              <span className="text-[13px] font-bold text-[var(--text)]">We Never Store Messages</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 text-center">
              <ShieldCheck className="size-6 text-[var(--primary)]" />
              <span className="text-[13px] font-bold text-[var(--text)]">SHA-256 Hash Only</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 text-center">
              <Bot className="size-6 text-[var(--primary)]" />
              <span className="text-[13px] font-bold text-[var(--text)]">AI-Powered Analysis</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 text-center">
              <Globe className="size-6 text-[var(--primary)]" />
              <span className="text-[13px] font-bold text-[var(--text)]">Privacy-First Design</span>
            </div>
          </div>

          {/* Detailed Sections Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* What We Store */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,193,106,0.1)]">
                  <Lock className="size-5 text-[var(--primary)]" />
                </div>
                <h2 className="text-lg font-bold text-[var(--text)]">What We Store</h2>
              </div>
              <ul className="mt-5 space-y-2.5 text-[15px] text-[var(--muted)]">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[var(--primary)]" /> Message hash (SHA-256)
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[var(--primary)]" /> Risk score
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[var(--primary)]" /> Scam type
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[var(--primary)]" /> Timestamp
                </li>
              </ul>
            </div>

            {/* What We Do Not Store */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(229,72,77,0.1)]">
                  <Ban className="size-5 text-[#E5484D]" />
                </div>
                <h2 className="text-lg font-bold text-[var(--text)]">What We Do Not Store</h2>
              </div>
              <ul className="mt-5 space-y-2.5 text-[15px] text-[var(--muted)]">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#E5484D]" /> Original messages
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#E5484D]" /> OTPs
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#E5484D]" /> Phone numbers
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#E5484D]" /> Passwords
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#E5484D]" /> Financial details
                </li>
              </ul>
            </div>

            {/* AI Processing */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 sm:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                  <Bot className="size-5 text-[var(--text)]" />
                </div>
                <h2 className="text-lg font-bold text-[var(--text)]">AI Processing</h2>
              </div>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[var(--muted)]">
                <p>
                  Messages are analyzed using Google's Gemini API. In order to detect psychological manipulation, your message text is temporarily transmitted to Gemini for analysis.
                </p>
                <p>
                  Original messages are not stored in ScamDNA databases, logs, or local storage. Once the analysis is complete, the original text is instantly discarded from our systems. Our analysis history stores only anonymized metadata to track global scam trends without compromising user privacy.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="rounded-xl border border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.05)] p-6 sm:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(245,158,11,0.1)]">
                  <AlertTriangle className="size-5 text-[#F59E0B]" />
                </div>
                <h2 className="text-lg font-bold text-[#F59E0B]">Disclaimer</h2>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)]">
                AI analysis may be incorrect, incomplete, or lack context. Users should independently verify suspicious communications through official channels. ScamDNA is an educational tool and should not be solely relied upon for absolute security determinations.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
