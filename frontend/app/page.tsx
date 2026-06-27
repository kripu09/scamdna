import { ArrowDown, BookOpen } from "lucide-react";

import { AnalyzerCard } from "@/components/analyzer/analyzer-card";
import { Container } from "@/components/layout/Container";
import { AccordionItem } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const FLOW_STEPS = [
  {
    step: "01",
    title: "Paste Message",
    description: "Copy a suspicious WhatsApp, SMS, or email message.",
  },
  {
    step: "02",
    title: "Analyze",
    description: "ScamDNA identifies psychological manipulation patterns.",
  },
  {
    step: "03",
    title: "Understand",
    description: "See exactly which sentences trigger manipulation and why.",
  },
  {
    step: "04",
    title: "Stay Safe",
    description: "Get a clear recommendation on what to do next.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Does ScamDNA store my messages?",
    answer:
      "No. Your original message is never stored, logged, or shared. The analysis is generated in real time and discarded after the session.",
  },
  {
    question: "Can ScamDNA detect all types of scams?",
    answer:
      "ScamDNA identifies psychological manipulation patterns commonly found in phishing, lottery scams, KYC fraud, job scams, and social engineering attacks. It may not catch every variation, and is not a replacement for professional cybersecurity tools.",
  },
  {
    question: "Why was my legitimate message flagged?",
    answer:
      "Some legitimate messages from banks, government bodies, or employers use urgency and authority language. ScamDNA analyzes manipulation patterns, not intent. A flagged message is not necessarily a scam — it means the language contains techniques commonly used in scams.",
  },
  {
    question: "Can legitimate messages contain manipulation tactics?",
    answer:
      "Yes. Marketing emails, bank alerts, and official notices often use urgency and authority. ScamDNA helps you recognize these patterns so you can verify the source independently before acting.",
  },
  {
    question: "How should I verify a suspicious message?",
    answer:
      "Contact the organization directly using their official website or phone number — not the contact details in the suspicious message. Never click links, share OTPs, or make payments based on unsolicited messages.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="pb-4 pt-16 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mx-auto max-w-[850px] font-heading text-[42px] font-extrabold tracking-tighter text-[var(--text)] leading-[1.1] sm:text-6xl lg:text-7xl">
              Understand the psychology behind suspicious messages.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[var(--muted)]">
              ScamDNA analyzes suspicious messages and explains the
              psychological manipulation behind them — before you click,
              reply, or pay.
            </p>
            <div className="mt-8">
              <Button href="#analyze" size="lg">
                Analyze a Message
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Analyzer — directly below hero, no gap */}
      <section id="analyze" className="py-8 sm:py-12">
        <Container>
          <div className="mx-auto max-w-2xl">
            <AnalyzerCard />
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="border-t border-[var(--border)] py-12 sm:py-16">
        <Container>
          <h2 className="font-heading text-[28px] font-bold tracking-tight text-[var(--text)] sm:text-[30px] lg:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
            A straightforward workflow that helps you slow down and inspect
            suspicious messages before acting.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FLOW_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5"
              >
                <span className="text-xs font-medium text-[var(--primary)]">
                  {item.step}
                </span>
                <h3 className="mt-2 text-base font-semibold text-[var(--text)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Scam Library Preview */}
      <section id="library" className="border-t border-[var(--border)] py-12 sm:py-16">
        <Container>
          <h2 className="font-heading text-[28px] font-bold tracking-tight text-[var(--text)] sm:text-[30px] lg:text-4xl">
            Scam Library
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
            A curated reference of common scam patterns, techniques, and
            response guidance.
          </p>

          <Card className="mt-8 p-5">
            <div className="flex items-start gap-3">
              <BookOpen className="mt-0.5 size-5 shrink-0 text-[var(--primary)]" />
              <div>
                <p className="text-sm font-medium text-[var(--text)]">
                  Coming soon
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                  Scam examples, typologies, and response guidance will be
                  available here in a searchable reference library.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-[var(--border)] py-12 sm:py-16">
        <Container>
          <h2 className="font-heading text-[28px] font-bold tracking-tight text-[var(--text)] sm:text-[30px] lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
            Common questions about how ScamDNA works and how to stay safe.
          </p>

          <div className="mx-auto mt-8 max-w-2xl space-y-3">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.question} title={item.question}>
                <p className="text-[15px] leading-relaxed text-[var(--muted)]">
                  {item.answer}
                </p>
              </AccordionItem>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
