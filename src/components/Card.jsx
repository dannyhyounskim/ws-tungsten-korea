import React from "react";

/* Outlined container. Square corners, 1px scheme-aware border, no shadow —
 * the brand's cards are flat and structural, not floating. */
export function Card({ children, variant = "default", padding = "lg", className = "", style, ...props }) {
  const pad = padding === "none" ? 0 : padding === "sm" ? 16 : padding === "md" ? 24 : 32;
  const base = {
    borderRadius: "var(--radius-card)",
    border: "1px solid var(--color-scheme-border)",
    background:
      variant === "transparent" ? "transparent" : "var(--color-scheme-foreground)",
    color: "var(--color-scheme-text)",
    padding: pad,
    overflow: "hidden",
    ...style,
  };
  return (
    <div className={className} style={base} {...props}>
      {children}
    </div>
  );
}
