import * as React from "react";

export interface FooterLink {
  label: string;
  href: string;
}

/**
 * Ink site footer with wordmark, link row, divider, and legal line.
 * @startingPoint section="Navigation" subtitle="Site footer (ink)" viewport="1280x260"
 */
export interface FooterProps {
  logoSrc?: string;
  links?: FooterLink[];
  legal?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Footer(props: FooterProps): JSX.Element;
