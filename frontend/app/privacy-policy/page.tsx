import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "Privacy Policy | ScamDNA",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-[var(--text)] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[var(--muted)]">Last updated: June 2026</p>

          <div className="prose prose-invert mt-12 max-w-none text-[var(--text)]">
            <h2>What We Store</h2>
            <p>
              ScamDNA is built on a privacy-first architecture. We store only anonymized metadata about analyses:
            </p>
            <ul>
              <li>Message hash (SHA-256)</li>
              <li>Risk score</li>
              <li>Scam type</li>
              <li>Timestamp</li>
            </ul>
            <p>
              <strong>ScamDNA does NOT store:</strong>
            </p>
            <ul>
              <li>Original message text</li>
              <li>Phone numbers or sender IDs</li>
              <li>OTPs or passwords</li>
              <li>Personal identities</li>
              <li>Financial information or account numbers</li>
            </ul>

            <h2>AI Processing</h2>
            <p>
              Messages are analyzed using Google's Gemini API. In order to detect psychological manipulation, your message text is transmitted to Gemini for analysis.
            </p>
            <p>
              ScamDNA itself does not store the original message content in our database, logs, or local storage. Once the analysis is complete, the original text is discarded from our systems.
            </p>

            <h2>Security</h2>
            <p>
              We use a privacy-first architecture. Our analysis history stores only anonymized metadata to track global scam trends without compromising user privacy.
            </p>

            <h2>Disclaimer</h2>
            <p>
              AI analysis may be incorrect, incomplete, or lack context. Users should independently verify suspicious communications through official channels. ScamDNA is an educational tool and should not be solely relied upon for absolute security determinations.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
