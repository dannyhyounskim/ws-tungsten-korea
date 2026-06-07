import React from "react";

/* Form field label. Inter, medium weight, small size. */
export function Label({ children, htmlFor, className = "", style, ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      className={className}
      style={{
        fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-medium)",
        fontSize: "var(--text-small)",
        color: "var(--color-scheme-text)",
        ...style,
      }}
      {...props}
    >
      {children}
    </label>
  );
}
