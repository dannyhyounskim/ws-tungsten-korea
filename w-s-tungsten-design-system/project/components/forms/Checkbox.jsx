import React from "react";

/* Square checkbox. Unchecked = outlined; checked = filled ink with a white
 * tick. Controlled or uncontrolled. */
export function Checkbox({ checked, defaultChecked, onChange, id, className = "", style, ...props }) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={on}
      id={id}
      onClick={toggle}
      className={className}
      style={{
        width: 18,
        height: 18,
        flex: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        cursor: "pointer",
        borderRadius: "var(--radius-checkbox)",
        border: "1px solid var(--color-scheme-border)",
        background: on ? "var(--color-neutral-darkest)" : "transparent",
        color: "#fff",
        transition: "background-color var(--dur-base) var(--ease-standard)",
        ...style,
      }}
      {...props}
    >
      {on ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
          <path d="M5 12l5 5L20 6" />
        </svg>
      ) : null}
    </button>
  );
}
