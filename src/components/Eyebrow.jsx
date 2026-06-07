import React from "react";

/* Eyebrow / overline label — the small semibold uppercase kicker that sits
 * above headings throughout the site ("Our Technology", "Connect"). */
export function Eyebrow({ children, className = "", style, ...props }) {
  return (
    <p
      className={className}
      style={{
        fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-semibold)",
        fontSize: "var(--text-small)",
        letterSpacing: "var(--tracking-wide)",
        textTransform: "uppercase",
        color: "inherit",
        margin: 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
}
