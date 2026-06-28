import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "Terms of Service | ScamDNA",
};

export default function TermsPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-[var(--text)] sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-[var(--muted)]">Last updated: June 2026</p>

          <div className="prose prose-invert mt-12 max-w-none text-[var(--text)]">
            <h2>Educational Purpose</h2>
            <p>
              ScamDNA is an informational and awareness tool designed to educate users about psychological manipulation tactics used in digital communications. It is not a substitute for professional cybersecurity advice or incident response services.
            </p>

            <h2>No Guarantee</h2>
            <p>
              ScamDNA does not guarantee scam detection accuracy. The platform uses artificial intelligence to identify linguistic patterns. AI can produce false positives (flagging legitimate messages) and false negatives (missing actual scams).
            </p>

            <h2>User Responsibility</h2>
            <p>
              Users remain fully responsible for any decisions or actions taken based on analysis results. If a message appears suspicious, you should verify it independently with the claimed organization using trusted, official contact channels.
            </p>

            <h2>Service Availability</h2>
            <p>
              Service may be modified, suspended, or discontinued without notice. We do not guarantee uninterrupted availability of the ScamDNA platform or its analysis endpoints.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              ScamDNA is provided "as-is" without any warranties, express or implied. Under no circumstances shall ScamDNA, its creators, or partners be held liable for any financial loss, data breach, or other damages resulting from the use or inability to use this service.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
