import React from "react";

/* Material Symbols (Outlined) glyph — the brand's substitute for the
 * original relume-icons set (same geometric, single-weight Material style).
 * The font is loaded via the Google Fonts link in index.html. */
export function Icon({ name, size = 24, color, style, className = "", ...props }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`.trim()}
      style={{ fontSize: size, lineHeight: 1, color, ...style }}
      {...props}
    >
      {name}
    </span>
  );
}
