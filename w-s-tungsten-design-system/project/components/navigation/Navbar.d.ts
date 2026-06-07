import * as React from "react";

export interface NavLink {
  label: string;
  href: string;
}

/**
 * Ink top navigation bar with wordmark, links, and language selector.
 * @startingPoint section="Navigation" subtitle="Site navbar (ink)" viewport="1280x80"
 */
export interface NavbarProps {
  /** Logo image src (white mark). Falls back to a "WSTK" wordmark. */
  logoSrc?: string;
  links?: NavLink[];
  languages?: string[];
  activeHref?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Navbar(props: NavbarProps): JSX.Element;
