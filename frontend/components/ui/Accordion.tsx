"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        className="accordion-trigger"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {title}
        <ChevronDown className="accordion-chevron" />
      </button>
      <div className="accordion-content" data-open={isOpen}>
        <div className="accordion-inner">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
