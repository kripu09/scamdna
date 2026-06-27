"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const NAV_ITEMS = [
  { href: "#analyze", label: "Analyze" },
  { href: "#library", label: "Scam Library" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(8,18,15,0.88)] backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between gap-6">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <Button href="#analyze" size="sm">
            Analyze Message
          </Button>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex size-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition-colors hover:bg-[var(--card)] md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-[var(--border)] md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                className="rounded-xl px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text)]"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2">
              <Button href="#analyze" size="sm">
                Analyze Message
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
