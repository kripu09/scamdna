import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonAsButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

function getVariantClasses(variant: ButtonVariant): string {
  if (variant === "secondary") {
    return "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--card)]";
  }

  if (variant === "ghost") {
    return "border-transparent bg-transparent text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]";
  }

  return "border-[var(--primary)] bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]";
}

function getSizeClasses(size: ButtonSize): string {
  if (size === "sm") {
    return "h-10 px-4 text-sm";
  }

  if (size === "lg") {
    return "h-[52px] px-6 text-sm";
  }

  return "h-11 px-5 text-sm";
}

function getBaseClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className: string,
): string {
  return [
    "inline-flex items-center justify-center gap-2 rounded-xl border font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(0,193,106,0.4)] disabled:cursor-not-allowed disabled:opacity-50",
    getVariantClasses(variant),
    getSizeClasses(size),
    className,
  ].join(" ");
}

export function Button(props: ButtonProps) {
  const { children, className = "", size = "md", variant = "primary" } = props;
  const classes = getBaseClasses(variant, size, className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLinkProps;

    return (
      <Link className={classes} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButtonProps;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
