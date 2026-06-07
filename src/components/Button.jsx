import React from "react";

/* Injects the brand button CSS once. Hover/press states (the signature
 * 3px hard-shadow that collapses as the button depresses) need real
 * pseudo-classes, so we ship a tiny scoped stylesheet. */
function useButtonStyles() {
  React.useEffect(() => {
    if (document.getElementById("wstk-button-styles")) return;
    const el = document.createElement("style");
    el.id = "wstk-button-styles";
    el.textContent = `
.wstk-btn{
  display:inline-flex;align-items:center;justify-content:center;gap:12px;
  font-family:var(--font-body);font-weight:var(--weight-medium);
  border-radius:var(--radius-button);white-space:nowrap;cursor:pointer;
  border:1.5px solid transparent;text-decoration:none;
  transition:transform var(--dur-base) var(--ease-standard),
             box-shadow var(--dur-base) var(--ease-standard),
             background-color var(--dur-base) var(--ease-standard);
}
.wstk-btn:disabled{pointer-events:none;opacity:.5;}
.wstk-btn--default{padding:11px 24px;font-size:var(--text-regular);}
.wstk-btn--sm{padding:7px 20px;font-size:var(--text-small);}
.wstk-btn--icon{padding:0;width:44px;height:44px;}

/* primary — teal with gold-free hard shadow */
.wstk-btn-primary{background:var(--color-deep-sea-green);color:#fff;
  border-color:var(--color-deep-sea-green-dark);
  box-shadow:0 3px 0 0 var(--color-deep-sea-green-dark);}
.wstk-btn-primary:hover{transform:translateY(3px);box-shadow:none;}

/* secondary — outline that adapts to the section scheme */
.wstk-btn-secondary{background:transparent;color:var(--color-scheme-text);
  border-color:var(--color-scheme-border);
  box-shadow:0 3px 0 0 var(--color-scheme-border);}
.wstk-btn-secondary:hover{transform:translateY(3px);box-shadow:none;}

/* light — for dark schemes: solid white chip */
.wstk-btn-light{background:#fff;color:var(--color-neutral-darkest);
  border-color:var(--color-neutral-lighter);
  box-shadow:0 3px 0 0 var(--color-neutral-lighter);}
.wstk-btn-light:hover{transform:translateY(3px);box-shadow:none;}

/* link — inline text action */
.wstk-btn-link{padding:0;gap:8px;background:transparent;border:0;
  color:var(--color-scheme-text);box-shadow:none;text-underline-offset:4px;}
.wstk-btn-link:hover{text-decoration:underline;}
`;
    document.head.appendChild(el);
  }, []);
}

const VARIANT_CLASS = {
  primary: "wstk-btn-primary",
  secondary: "wstk-btn-secondary",
  light: "wstk-btn-light",
  link: "wstk-btn-link",
};

export function Button({
  children,
  variant = "primary",
  size = "default",
  iconLeft,
  iconRight,
  href,
  className = "",
  ...props
}) {
  useButtonStyles();
  const sizeClass =
    size === "sm" ? "wstk-btn--sm" : size === "icon" ? "wstk-btn--icon" : "wstk-btn--default";
  const cls = `wstk-btn ${sizeClass} ${VARIANT_CLASS[variant] || VARIANT_CLASS.primary} ${className}`.trim();
  const Tag = href ? "a" : "button";
  return (
    <Tag className={cls} href={href} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
