import { ShieldCheck } from "lucide-react";
import Link from "next/link";

type LogoProps = {
  withText?: boolean;
};

export function Logo({ withText = true }: LogoProps) {
  return (
    <Link
      aria-label="ScamDNA home"
      className="inline-flex items-center gap-3"
      href="/"
    >
      <span className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--primary)]">
        <ShieldCheck className="size-5" />
      </span>
      {withText ? (
        <span className="font-heading text-lg font-bold tracking-tight text-[var(--text)]">
          ScamDNA
        </span>
      ) : null}
    </Link>
  );
}
