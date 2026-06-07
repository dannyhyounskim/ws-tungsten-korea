import React from "react";

/* Small square status/category tag. Square corners; tones map to the
 * brand palette. Solid + soft fills. */
const TONES = {
  neutral: { bg: "var(--color-neutral-lightest)", fg: "var(--color-neutral-darkest)", bd: "var(--color-ink-15)" },
  primary: { bg: "var(--color-deep-sea-green-lightest)", fg: "var(--color-deep-sea-green)", bd: "transparent" },
  accent: { bg: "var(--color-web-orange-lighter)", fg: "var(--color-web-orange-darker)", bd: "transparent" },
  success: { bg: "var(--color-de-york-lighter)", fg: "var(--color-de-york-darker)", bd: "transparent" },
  solid: { bg: "var(--color-deep-sea-green)", fg: "#fff", bd: "transparent" },
};

export function Badge({ children, tone = "neutral", className = "", style, ...props }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-medium)",
        fontSize: "var(--text-small)",
        lineHeight: 1,
        padding: "5px 10px",
        borderRadius: "var(--radius-badge)",
        background: t.bg,
        color: t.fg,
        border: `1px solid ${t.bd}`,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
