import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`min-h-[180px] w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4 text-base text-[var(--text)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus-visible:ring-2 focus-visible:ring-[rgba(0,193,106,0.3)] disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
