import React from "react";

/* Multi-line text input. Matches Input styling; defaults to a comfortable
 * inquiry-form height. */
export function Textarea({ className = "", style, rows = 5, ...props }) {
  return (
    <textarea
      className={className}
      rows={rows}
      style={{
        width: "100%",
        minHeight: 180,
        padding: "10px 12px",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-regular)",
        color: "var(--color-scheme-text)",
        background: "transparent",
        border: "1px solid var(--color-scheme-border)",
        borderRadius: "var(--radius-input)",
        outline: "none",
        resize: "vertical",
        transition: "border-color var(--dur-base) var(--ease-standard)",
        ...style,
      }}
      {...props}
    />
  );
}
