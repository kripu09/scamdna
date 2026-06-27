import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";

const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { href: "#analyze", label: "Analyze" },
      { href: "#library", label: "Scam Library" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "#privacy", label: "Privacy Policy" },
      { href: "#terms", label: "Terms" },
      { href: "https://github.com", label: "GitHub", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-xs">
            <div className="scale-110 origin-left">
              <Logo />
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-[var(--muted)]">
              Analyze suspicious messages. Understand manipulation.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h2 className="text-[15px] font-bold text-[var(--text)] tracking-wide uppercase">
                {column.heading}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        className="text-[15px] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                        href={link.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        className="text-[15px] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
          <p>Copyright &copy; {new Date().getFullYear()} ScamDNA. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
