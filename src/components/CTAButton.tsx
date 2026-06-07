import type { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  icon?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  "aria-label"?: string;
}

/**
 * Single source of truth for call-to-action links across the site.
 * Handles primary/ghost styling, optional left/right icons, and external rels.
 */
export function CTAButton({
  href,
  children,
  variant = "ghost",
  external = false,
  icon,
  iconRight,
  className = "",
  ...rest
}: CTAButtonProps) {
  const base = variant === "primary" ? "btn-primary" : "btn-ghost";
  const externalProps = external
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};

  return (
    <a href={href} className={`${base} ${className}`.trim()} {...externalProps} {...rest}>
      {icon}
      {children}
      {iconRight}
    </a>
  );
}
