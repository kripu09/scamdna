import { 
  BookOpen, 
  AlertTriangle, 
  UserCircle, 
  Activity,
  Scale
} from "lucide-react";

import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "Terms of Service | ScamDNA",
};

export default function TermsPage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center sm:text-left">
            <h1 className="font-heading text-4xl font-bold text-[var(--text)] sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-base text-[var(--muted)]">
              The rules and responsibilities of using the ScamDNA platform.
            </p>
          </div>

          {/* Quick Summary Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 text-center">
              <BookOpen className="size-6 text-[var(--primary)]" />
              <span className="text-[13px] font-bold text-[var(--text)]">Educational Tool</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 text-center">
              <AlertTriangle className="size-6 text-[#F59E0B]" />
              <span className="text-[13px] font-bold text-[var(--text)]">AI Can Make Mistakes</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 text-center">
              <UserCircle className="size-6 text-[var(--primary)]" />
              <span className="text-[13px] font-bold text-[var(--text)]">User Responsibility</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 text-center">
              <Activity className="size-6 text-[var(--primary)]" />
              <span className="text-[13px] font-bold text-[var(--text)]">Service Availability</span>
            </div>
          </div>

          {/* Detailed Sections Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Educational Purpose */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,193,106,0.1)]">
                  <BookOpen className="size-5 text-[var(--primary)]" />
                </div>
                <h2 className="text-lg font-bold text-[var(--text)]">Educational Purpose</h2>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)]">
                ScamDNA is an informational and awareness tool designed to educate users about psychological manipulation tactics used in digital communications. It is not a substitute for professional cybersecurity advice or incident response services.
              </p>
            </div>

            {/* No Guarantee */}
            <div className="rounded-xl border border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.05)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(245,158,11,0.1)]">
                  <AlertTriangle className="size-5 text-[#F59E0B]" />
                </div>
                <h2 className="text-lg font-bold text-[#F59E0B]">No Guarantee</h2>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)]">
                ScamDNA does not guarantee scam detection accuracy. The platform uses artificial intelligence to identify linguistic patterns. AI can produce false positives (flagging legitimate messages) and false negatives (missing actual scams).
              </p>
            </div>

            {/* User Responsibility */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                  <UserCircle className="size-5 text-[var(--text)]" />
                </div>
                <h2 className="text-lg font-bold text-[var(--text)]">User Responsibility</h2>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)]">
                Users remain fully responsible for any decisions or actions taken based on analysis results. If a message appears suspicious, you should verify it independently with the claimed organization using trusted, official contact channels.
              </p>
            </div>

            {/* Service Availability */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                  <Activity className="size-5 text-[var(--text)]" />
                </div>
                <h2 className="text-lg font-bold text-[var(--text)]">Service Availability</h2>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)]">
                Service may be modified, suspended, or discontinued without notice. We do not guarantee uninterrupted availability of the ScamDNA platform or its analysis endpoints.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 sm:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                  <Scale className="size-5 text-[var(--text)]" />
                </div>
                <h2 className="text-lg font-bold text-[var(--text)]">Limitation of Liability</h2>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)]">
                ScamDNA is provided "as-is" without any warranties, express or implied. Under no circumstances shall ScamDNA, its creators, or partners be held liable for any financial loss, data breach, or other damages resulting from the use or inability to use this service.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
