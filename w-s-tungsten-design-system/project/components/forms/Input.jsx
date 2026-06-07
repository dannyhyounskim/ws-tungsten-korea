import React from "react";

/* Text input — square corners, 1px scheme-aware border, subtle tint on
 * hover, ring on focus. Supports an optional leading/trailing icon and a
 * boxed prefix/suffix slot. */
export function Input({
  icon,
  iconPosition = "left",
  prefix,
  className = "",
  style,
  ...props
}) {
  const inputStyle = {
    flex: 1,
    width: "100%",
    minHeight: 44,
    padding: "10px 12px",
    paddingLeft: icon && iconPosition === "left" ? 40 : 12,
    paddingRight: icon && iconPosition === "right" ? 40 : 12,
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-regular)",
    color: "var(--color-scheme-text)",
    background: "transparent",
    border: "1px solid var(--color-scheme-border)",
    borderRadius: "var(--radius-input)",
    outline: "none",
    transition: "background-color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
    ...style,
  };
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", width: "100%" }}>
      {prefix ? (
        <span
          style={{
            minHeight: 44,
            display: "inline-flex",
            alignItems: "center",
            padding: "0 12px",
            borderBlock: "1px solid var(--color-scheme-border)",
            borderInlineStart: "1px solid var(--color-scheme-border)",
            color: "var(--color-scheme-text)",
            fontSize: "var(--text-regular)",
          }}
        >
          {prefix}
        </span>
      ) : null}
      {icon && iconPosition === "left" ? (
        <span style={{ position: "absolute", left: 12, display: "inline-flex", color: "var(--color-neutral)" }}>{icon}</span>
      ) : null}
      <input className={className} style={inputStyle} {...props} />
      {icon && iconPosition === "right" ? (
        <span style={{ position: "absolute", right: 12, display: "inline-flex", color: "var(--color-neutral)" }}>{icon}</span>
      ) : null}
    </div>
  );
}
