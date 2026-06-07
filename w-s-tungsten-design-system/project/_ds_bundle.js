/* @ds-bundle: {"format":3,"namespace":"WSTungstenDesignSystem_3ea155","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d6c7d09b8f02","components/core/Button.jsx":"7627207c58da","components/core/Card.jsx":"0f9d1ab0575d","components/core/Eyebrow.jsx":"2fe5a76b338a","components/feedback/Accordion.jsx":"9fb5fe23c6f7","components/forms/Checkbox.jsx":"bb3a20b67527","components/forms/Input.jsx":"2e3a08f0f85d","components/forms/Label.jsx":"12499cee8ef6","components/forms/Textarea.jsx":"44ba35350897","components/navigation/Footer.jsx":"c53321797877","components/navigation/Navbar.jsx":"1ee2f8f55f0e","ui_kits/website/app.jsx":"a7bb45b0baa5","ui_kits/website/sections-home.jsx":"27b44eb81d2d","ui_kits/website/sections-pages.jsx":"635543d748b3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WSTungstenDesignSystem_3ea155 = window.WSTungstenDesignSystem_3ea155 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Small square status/category tag. Square corners; tones map to the
 * brand palette. Solid + soft fills. */
const TONES = {
  neutral: {
    bg: "var(--color-neutral-lightest)",
    fg: "var(--color-neutral-darkest)",
    bd: "var(--color-ink-15)"
  },
  primary: {
    bg: "var(--color-deep-sea-green-lightest)",
    fg: "var(--color-deep-sea-green)",
    bd: "transparent"
  },
  accent: {
    bg: "var(--color-web-orange-lighter)",
    fg: "var(--color-web-orange-darker)",
    bd: "transparent"
  },
  success: {
    bg: "var(--color-de-york-lighter)",
    fg: "var(--color-de-york-darker)",
    bd: "transparent"
  },
  solid: {
    bg: "var(--color-deep-sea-green)",
    fg: "#fff",
    bd: "transparent"
  }
};
function Badge({
  children,
  tone = "neutral",
  className = "",
  style,
  ...props
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
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
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  link: "wstk-btn-link"
};
function Button({
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
  const sizeClass = size === "sm" ? "wstk-btn--sm" : size === "icon" ? "wstk-btn--icon" : "wstk-btn--default";
  const cls = `wstk-btn ${sizeClass} ${VARIANT_CLASS[variant] || VARIANT_CLASS.primary} ${className}`.trim();
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href
  }, props), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Outlined container. Square corners, 1px scheme-aware border, no shadow —
 * the brand's cards are flat and structural, not floating. */
function Card({
  children,
  variant = "default",
  padding = "lg",
  className = "",
  style,
  ...props
}) {
  const pad = padding === "none" ? 0 : padding === "sm" ? 16 : padding === "md" ? 24 : 32;
  const base = {
    borderRadius: "var(--radius-card)",
    border: "1px solid var(--color-scheme-border)",
    background: variant === "transparent" ? "transparent" : "var(--color-scheme-foreground)",
    color: "var(--color-scheme-text)",
    padding: pad,
    overflow: "hidden",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: base
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Eyebrow / overline label — the small semibold uppercase kicker that sits
 * above headings throughout the site ("Our Technology", "Connect"). */
function Eyebrow({
  children,
  className = "",
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    className: className,
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-small)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "inherit",
      margin: 0,
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
/* Accordion — the FAQ / policy disclosure pattern. Square, divider-ruled
 * rows with a chevron that rotates open. `type="multiple"` allows several
 * panels open at once. */
function Accordion({
  items = [],
  type = "single",
  defaultOpen = [],
  className = "",
  style
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(type === "multiple" ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--color-scheme-border)",
        borderTop: i === 0 ? "1px solid var(--color-scheme-border)" : undefined
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "18px 0",
        background: "transparent",
        border: 0,
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-bold)",
        fontSize: "var(--text-medium)",
        color: "var(--color-scheme-text)",
        textAlign: "left"
      }
    }, it.q, /*#__PURE__*/React.createElement("svg", {
      width: "28",
      height: "28",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      style: {
        flex: "none",
        transition: "transform var(--dur-slow) var(--ease-standard)",
        transform: isOpen ? "rotate(180deg)" : "none"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows var(--dur-slow) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 22,
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-regular)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--color-scheme-text)",
        opacity: 0.85
      }
    }, it.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Square checkbox. Unchecked = outlined; checked = filled ink with a white
 * tick. Controlled or uncontrolled. */
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  id,
  className = "",
  style,
  ...props
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": on,
    id: id,
    onClick: toggle,
    className: className,
    style: {
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
      ...style
    }
  }, props), on ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "square",
    strokeLinejoin: "miter"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 6"
  })) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Text input — square corners, 1px scheme-aware border, subtle tint on
 * hover, ring on focus. Supports an optional leading/trailing icon and a
 * boxed prefix/suffix slot. */
function Input({
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
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100%"
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      minHeight: 44,
      display: "inline-flex",
      alignItems: "center",
      padding: "0 12px",
      borderBlock: "1px solid var(--color-scheme-border)",
      borderInlineStart: "1px solid var(--color-scheme-border)",
      color: "var(--color-scheme-text)",
      fontSize: "var(--text-regular)"
    }
  }, prefix) : null, icon && iconPosition === "left" ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      display: "inline-flex",
      color: "var(--color-neutral)"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("input", _extends({
    className: className,
    style: inputStyle
  }, props)), icon && iconPosition === "right" ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      display: "inline-flex",
      color: "var(--color-neutral)"
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Form field label. Inter, medium weight, small size. */
function Label({
  children,
  htmlFor,
  className = "",
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: htmlFor,
    className: className,
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-small)",
      color: "var(--color-scheme-text)",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Multi-line text input. Matches Input styling; defaults to a comfortable
 * inquiry-form height. */
function Textarea({
  className = "",
  style,
  rows = 5,
  ...props
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: className,
    rows: rows,
    style: {
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
      ...style
    }
  }, props));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/* Site footer — ink (scheme-4) band with the white wordmark, link row, a
 * hairline divider, and a legal line. Pass `logoSrc` for the mark. */
function Footer({
  logoSrc,
  links = [{
    label: "Our Business",
    href: "#"
  }, {
    label: "Commitment",
    href: "#"
  }, {
    label: "Contact Us",
    href: "#"
  }, {
    label: "Home",
    href: "#"
  }, {
    label: "About Us",
    href: "#"
  }],
  legal = "ⓒ W.S. Tungsten Korea  CEO : Jang JeHo   Tel : +82 054-705-3601   Fax : +82 054-705-3602   E-mail : info@wstk.kr",
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: `scheme-4 ${className}`,
    style: {
      paddingInline: "5%",
      paddingBlock: "48px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap",
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "W.S. Tungsten Korea",
    style: {
      height: 34,
      width: "auto"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 22,
      color: "#fff",
      letterSpacing: "0.04em"
    }
  }, "WSTK")), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: 24,
      listStyle: "none",
      margin: 0,
      padding: 0,
      flexWrap: "wrap"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    onClick: l.onClick,
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "var(--text-regular)",
      color: "#fff"
    }
  }, l.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      width: "100%",
      background: "var(--color-white-20)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      paddingTop: 24,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-small)",
      color: "var(--color-white-60)",
      textAlign: "center"
    }
  }, legal));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
/* Site navbar — ink (scheme-4) bar with the white WSTK wordmark, primary
 * links, and a language selector. Pass `logoSrc` so the mark resolves in
 * your project. Links are plain {label, href} objects. */
function Navbar({
  logoSrc,
  links = [{
    label: "Our Business",
    href: "#"
  }, {
    label: "Commitment",
    href: "#"
  }, {
    label: "Contact",
    href: "#"
  }],
  languages = ["English", "Korean", "Japanese"],
  activeHref,
  className = "",
  style
}) {
  const [lang, setLang] = React.useState(languages[0]);
  const [openLang, setOpenLang] = React.useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    className: `scheme-4 ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: 72,
      paddingInline: "5%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "W.S. Tungsten Korea",
    style: {
      height: 36,
      width: "auto"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 22,
      color: "#fff",
      letterSpacing: "0.04em"
    }
  }, "WSTK")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: l.onClick,
    style: {
      padding: "8px 16px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-regular)",
      color: "#fff",
      opacity: activeHref === l.href ? 1 : 0.82,
      fontWeight: activeHref === l.href ? 600 : 400
    }
  }, l.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpenLang(v => !v),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 16px",
      background: "transparent",
      border: 0,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-regular)",
      color: "#fff"
    }
  }, lang, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    style: {
      transition: "transform 200ms",
      transform: openLang ? "rotate(180deg)" : "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))), openLang ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "100%",
      right: 0,
      minWidth: 140,
      background: "var(--color-neutral-darker)",
      border: "1px solid var(--color-white-20)",
      zIndex: 50
    }
  }, languages.map(lg => /*#__PURE__*/React.createElement("button", {
    key: lg,
    type: "button",
    onClick: () => {
      setLang(lg);
      setOpenLang(false);
    },
    style: {
      display: "block",
      width: "100%",
      textAlign: "left",
      padding: "10px 16px",
      background: "transparent",
      border: 0,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-regular)",
      color: "#fff"
    }
  }, lg))) : null)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* W.S. Tungsten — website app shell. Simple state-routed SPA tying the
 * navbar, page bodies, and footer together. */
(function () {
  const NS = window.WSTungstenDesignSystem_3ea155;
  const {
    Navbar,
    Footer
  } = NS;
  const {
    HomePage
  } = window.WSTKHome;
  const {
    OurBusiness,
    Commitment,
    ContactUs
  } = window.WSTKPages;
  const LOGO = "../../assets/logo/logo-light.png";
  const ROUTES = {
    home: "#home",
    business: "#business",
    commitment: "#commitment",
    contact: "#contact"
  };
  function App() {
    const [route, setRoute] = React.useState("home");
    const go = r => {
      setRoute(r);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
    const links = [{
      label: "Our Business",
      href: ROUTES.business,
      route: "business"
    }, {
      label: "Commitment",
      href: ROUTES.commitment,
      route: "commitment"
    }, {
      label: "Contact",
      href: ROUTES.contact,
      route: "contact"
    }];
    const onLinkClick = (e, l) => {
      e.preventDefault();
      go(l.route);
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
      logoSrc: LOGO,
      activeHref: ROUTES[route],
      links: links.map(l => ({
        label: l.label,
        href: l.href,
        onClick: e => onLinkClick(e, l)
      }))
    }), route === "home" && /*#__PURE__*/React.createElement(HomePage, {
      onNav: go
    }), route === "business" && /*#__PURE__*/React.createElement(OurBusiness, null), route === "commitment" && /*#__PURE__*/React.createElement(Commitment, null), route === "contact" && /*#__PURE__*/React.createElement(ContactUs, null), /*#__PURE__*/React.createElement(Footer, {
      logoSrc: LOGO,
      links: [{
        label: "Our Business",
        href: ROUTES.business,
        onClick: e => {
          e.preventDefault();
          go("business");
        }
      }, {
        label: "Commitment",
        href: ROUTES.commitment,
        onClick: e => {
          e.preventDefault();
          go("commitment");
        }
      }, {
        label: "Contact Us",
        href: ROUTES.contact,
        onClick: e => {
          e.preventDefault();
          go("contact");
        }
      }, {
        label: "Home",
        href: ROUTES.home,
        onClick: e => {
          e.preventDefault();
          go("home");
        }
      }]
    }));
  }
  ReactDOM.createRoot(document.getElementById("app")).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections-home.jsx
try { (() => {
/* W.S. Tungsten — Home page sections.
 * Reads brand primitives from the compiled bundle namespace and exposes
 * each section on window for app.jsx to compose. */
(function () {
  const NS = window.WSTungstenDesignSystem_3ea155;
  const {
    Button,
    Card,
    Eyebrow,
    Badge
  } = NS;
  const IMG = "../../assets/images/";
  const Icon = ({
    name,
    size = 48
  }) => /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: size,
      lineHeight: 1
    }
  }, name);

  /* ---- Hero (scheme-1, deep teal) ---- */
  function Hero({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "scheme-1",
      style: {
        paddingInline: "5%",
        paddingBlock: "clamp(56px,8vw,112px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 56,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        marginBottom: 20
      }
    }, "Ferro Tungsten made with precision"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-medium)",
        maxWidth: 520,
        color: "var(--color-white-60)"
      }
    }, "W.S. Tungsten Korea has a stable raw material supply chain and advanced automation technology, and is the only tungsten smelter in a non-communist country, leading the world market."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginTop: 32,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "light",
      onClick: () => onNav("business")
    }, "Product"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => onNav("contact")
    }, "Contact"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: IMG + "home-hero-header-section.png",
      alt: "Tungsten ore",
      style: {
        width: "100%",
        aspectRatio: "1.1/1",
        objectFit: "cover"
      }
    })))));
  }

  /* ---- Competitiveness (scheme-2, pampas) ---- */
  function Competitiveness() {
    const bullets = ["The only Ferro Tungsten manufacturer in Korea", "The only non-communist tungsten smelter", "85% AI automation production technology", "Use of various tungsten concentrates", "Wolframite, scheelite, low-grade WO₃, etc."];
    return /*#__PURE__*/React.createElement("section", {
      className: "scheme-2",
      style: {
        paddingInline: "5%",
        paddingBlock: "clamp(56px,8vw,112px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "two-col",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 56,
        alignItems: "start",
        marginBottom: 64
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        color: "var(--color-deep-sea-green)",
        marginBottom: 12
      }
    }, "W. S. Tungsten Korea"), /*#__PURE__*/React.createElement("h2", null, "Our Competitiveness")), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "grid",
        gap: 12
      }
    }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: 12,
        fontSize: "var(--text-medium)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        color: "var(--color-deep-sea-green)",
        fontSize: 22
      }
    }, "check"), b)))), /*#__PURE__*/React.createElement("img", {
      src: IMG + "home-feature-section.png",
      alt: "WSTK business card on tungsten ore",
      style: {
        width: "100%",
        aspectRatio: "16/7",
        objectFit: "cover"
      }
    })));
  }

  /* ---- Stats: What is Ferro Tungsten (scheme-1, deep teal) ---- */
  function Stats() {
    const stats = [["W", "Element Symbol"], ["3422 °C", "Melting Point"], ["74", "Atomic Number"], ["5930 °C", "Boiling Point"], ["183.84", "Atomic Weight (u)"], ["19.25", "Density"]];
    return /*#__PURE__*/React.createElement("section", {
      className: "scheme-1",
      style: {
        paddingInline: "5%",
        paddingBlock: "clamp(56px,8vw,112px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "stats-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "0.6fr 1fr",
        gap: 56,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        color: "var(--color-web-orange)",
        marginBottom: 12
      }
    }, "Our Product"), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginBottom: 20
      }
    }, "What is Ferro Tungsten"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--color-white-60)",
        fontSize: "var(--text-medium)"
      }
    }, "Ferro Tungsten is an alloy of iron (Fe) and tungsten (over 75%). It is an additive for tungsten alloy steel \u2014 used for wear and heat resistance across the aerospace, defense, and alloy tool-steel industries.")), /*#__PURE__*/React.createElement("div", {
      className: "stat-cards",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 24
      }
    }, stats.map(([v, l], i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      style: {
        textAlign: "center",
        padding: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 500,
        fontSize: "clamp(40px,4vw,72px)",
        lineHeight: 1.15,
        marginBottom: 6
      }
    }, v), /*#__PURE__*/React.createElement("h6", {
      style: {
        fontWeight: 600
      }
    }, l)))))));
  }

  /* ---- Timeline: Ai automated process (scheme-3, teal tint) ---- */
  function ProcessTimeline() {
    const steps = [["Concentrate Warehoused", "Fast concentrate analysis using portable XRF", "home-stats-section-0.jpg"], ["Automatic Weighing & Compounding", "Quick compounding-ratio analysis and automatic weighing", "home-stats-section-1.jpg"], ["Automated Thermite Reaction", "Quality control by measuring reaction time and temperature", "home-stats-section-2.jpg"], ["Cooling", "Controlled cooling process", "home-stats-section-3.jpg"], ["Analysis", "Precise analysis by ICP-OES", "home-stats-section-4.jpg"], ["Packing", "Size screening and packaging to customer requirements", "home-stats-section-5.jpg"]];
    return /*#__PURE__*/React.createElement("section", {
      className: "scheme-3",
      style: {
        paddingInline: "5%",
        paddingBlock: "clamp(56px,8vw,112px)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        marginBottom: 56
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        color: "var(--color-deep-sea-green)",
        marginBottom: 12
      }
    }, "Our Technology"), /*#__PURE__*/React.createElement("h2", null, "AI-automated processes with safety and efficiency")), /*#__PURE__*/React.createElement("div", {
      className: "timeline",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: 24
      }
    }, steps.map(([t, d, img], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: IMG + img,
      alt: t,
      style: {
        width: "100%",
        aspectRatio: "1/1",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 13,
        height: 13,
        borderRadius: "50%",
        background: "var(--color-neutral-darkest)",
        boxShadow: "0 0 0 6px var(--color-deep-sea-green-lightest)",
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 3,
        background: "var(--color-neutral-darkest)",
        width: "100%"
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h6", {
      style: {
        fontWeight: 700,
        marginBottom: 6
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-small)"
      }
    }, d)))))));
  }

  /* ---- Home CTA: contact methods (scheme-2, pampas) ---- */
  function HomeContact() {
    const methods = [["mail", "Email", "Send us your specifications and questions directly.", "info@wstk.kr"], ["chat", "Fax", "Send your specifications and questions via fax.", "+82 054-705-3602"], ["call", "Phone", "Call us to discuss your Ferro Tungsten needs today.", "+82 054-705-3601"], ["location_on", "Office", "Visit our facility to see operations firsthand.", "Gyeongju-si, Gyeongsangbuk-do, Korea"]];
    return /*#__PURE__*/React.createElement("section", {
      className: "scheme-2",
      style: {
        paddingInline: "5%",
        paddingBlock: "clamp(56px,8vw,112px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        marginBottom: 56
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        color: "var(--color-deep-sea-green)",
        marginBottom: 12
      }
    }, "Connect"), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginBottom: 20
      }
    }, "Ready to partner with us?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-medium)"
      }
    }, "For inquiries, please do not hesitate to contact us.")), /*#__PURE__*/React.createElement("div", {
      className: "methods",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 32
      }
    }, methods.map(([ic, h, d, link], i) => /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        fontSize: 44,
        color: "var(--color-deep-sea-green)"
      }
    }, ic), /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: "20px 0 12px",
        fontWeight: 700
      }
    }, h), /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: 16,
        fontSize: "var(--text-regular)"
      }
    }, d), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        textDecoration: "underline",
        textUnderlineOffset: 4,
        fontSize: "var(--text-regular)"
      }
    }, link))))));
  }
  function HomePage({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
      onNav: onNav
    }), /*#__PURE__*/React.createElement(Competitiveness, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(ProcessTimeline, null), /*#__PURE__*/React.createElement(HomeContact, null));
  }
  window.WSTKHome = {
    HomePage
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections-home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections-pages.jsx
try { (() => {
/* W.S. Tungsten — Our Business / Commitment / Contact page bodies. */
(function () {
  const NS = window.WSTungstenDesignSystem_3ea155;
  const {
    Button,
    Card,
    Eyebrow,
    Accordion,
    Input,
    Textarea,
    Checkbox,
    Label
  } = NS;
  const IMG = "../../assets/images/";
  function PageHeader({
    title,
    intro
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "scheme-1",
      style: {
        paddingInline: "5%",
        paddingBlock: "clamp(56px,8vw,112px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 768,
        margin: "0 auto",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        marginBottom: 20
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-medium)",
        color: "var(--color-white-60)"
      }
    }, intro)));
  }

  /* ---- Our Business ---- */
  function OurBusiness() {
    const items = [["01", "AUTOMATION", "To maximize productivity, 85% of the smelter is automated. Automation handles hazardous-area tasks to protect workers and create an efficient operating environment."], ["02", "AI-POWERED QUALITY CONTROL", "A real-time AI quality-analysis system manages quality, reduces raw-material usage, and maximizes production efficiency through data-driven optimization."], ["03", "ESG COMPLIANCE", "Eco-friendly processes exclude harmful substances, minimize carbon emissions, and operate recycling systems — with ethical, RMI-compliant supply-chain management."], ["04", "CUSTOMIZED PRODUCTION", "Customized ferro tungsten tailored to your requirements, with fast response, flexible low- and high-volume production, and R&D cooperation."]];
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Our Business",
      intro: "WSTK supplies ferro tungsten to customer specification using an automated, environmentally friendly production line."
    }), /*#__PURE__*/React.createElement("section", {
      className: "scheme-2",
      style: {
        paddingInline: "5%",
        paddingBlock: "clamp(56px,8vw,112px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-list",
      style: {
        display: "grid",
        gap: 80
      }
    }, items.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      className: "biz-row",
      style: {
        display: "grid",
        gridTemplateColumns: "max-content 1fr",
        gap: 56,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 500,
        fontSize: "clamp(72px,11vw,160px)",
        lineHeight: 0.85,
        color: "var(--color-neutral-darkest)"
      }
    }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 2,
        background: "var(--color-neutral-lighter)",
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 2,
        width: "100%",
        background: "var(--color-neutral-darkest)"
      }
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginBottom: 20
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-medium)",
        maxWidth: 640
      }
    }, d))))))), /*#__PURE__*/React.createElement(BusinessCTA, null));
  }
  function BusinessCTA() {
    return /*#__PURE__*/React.createElement("section", {
      className: "scheme-1",
      style: {
        paddingInline: "5%",
        paddingBlock: "clamp(56px,8vw,112px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "two-col",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 56,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        color: "var(--color-web-orange)",
        marginBottom: 16
      }
    }, "Locations"), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginBottom: 20
      }
    }, "Ready to work with us"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--color-white-60)",
        fontSize: "var(--text-medium)",
        marginBottom: 32
      }
    }, "Contact W.S. Tungsten Korea today to discuss your ferro tungsten needs and partnership opportunities."), /*#__PURE__*/React.createElement(InquiryForm, {
      dark: true
    })), /*#__PURE__*/React.createElement("img", {
      src: IMG + "home-stats-section-2.jpg",
      alt: "Facility",
      style: {
        width: "100%",
        height: "100%",
        minHeight: 420,
        objectFit: "cover"
      }
    }))));
  }

  /* ---- Commitment ---- */
  function Commitment() {
    const faqs = [["Commitment", "W.S. Tungsten Korea is committed to responsible sourcing of minerals, particularly tungsten (W), ensuring our procurement does not contribute to human-rights abuses, conflict, or environmental harm. We align with the OECD Due Diligence Guidance."], ["Scope", "This policy applies to all employees, suppliers, contractors, and business partners involved in the sourcing, procurement, and handling of raw materials used in our ferro-tungsten production."], ["Our Principles", "Avoid minerals that finance armed groups; respect human rights to international standards; promote transparency and traceability; and engage suppliers to ensure responsible sourcing."], ["Due Diligence Framework", "Identify and assess supply-chain risks, require origin disclosure, maintain procurement records, conduct periodic risk assessments, and take corrective action when risks are identified."], ["Supplier Requirements", "Suppliers must comply with this policy, provide accurate origin information, cooperate with due-diligence requests, and support responsible-sourcing initiatives."], ["Transparency & Disclosure", "This policy is publicly available on our website. We are committed to continuous improvement and transparent communication with stakeholders."]];
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Our commitment to quality & responsibility",
      intro: "An overview of W.S. Tungsten Korea's dedication to high standards in metallurgical manufacturing."
    }), /*#__PURE__*/React.createElement("section", {
      className: "scheme-2",
      style: {
        paddingInline: "5%",
        paddingBlock: "clamp(56px,8vw,112px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "two-col",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 56,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        color: "var(--color-deep-sea-green)",
        marginBottom: 16
      }
    }, "Sustainability"), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginBottom: 20
      }
    }, "Built for a sustainable supply chain"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-medium)"
      }
    }, "We pursue sustainable corporate management through ethical supply-chain practices, energy-saving equipment, and recycling systems \u2014 minimizing carbon emissions in compliance with RMI standards.")), /*#__PURE__*/React.createElement("img", {
      src: IMG + "home-stats-section-4.jpg",
      alt: "Sustainable operations",
      style: {
        width: "100%",
        aspectRatio: "4/3",
        objectFit: "cover"
      }
    })))), /*#__PURE__*/React.createElement("section", {
      className: "scheme-3",
      style: {
        paddingInline: "5%",
        paddingBlock: "clamp(56px,8vw,112px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "faq-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "0.8fr 1fr",
        gap: 56,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        marginBottom: 20
      }
    }, "Responsible Mineral Sourcing Policy"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-medium)"
      }
    }, "W.S. Tungsten Korea is committed to continuous improvement, responsible sourcing, and transparent communication with stakeholders across the global tungsten supply chain.")), /*#__PURE__*/React.createElement(Accordion, {
      type: "multiple",
      defaultOpen: [0],
      items: faqs.map(([q, a]) => ({
        q,
        a
      }))
    })))));
  }

  /* ---- Inquiry form (shared) ---- */
  function InquiryForm({
    dark
  }) {
    const [agree, setAgree] = React.useState(false);
    return /*#__PURE__*/React.createElement("form", {
      style: {
        display: "grid",
        gap: 20,
        maxWidth: 460
      },
      onSubmit: e => e.preventDefault()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Label, {
      htmlFor: "cn"
    }, "Name"), /*#__PURE__*/React.createElement(Input, {
      id: "cn",
      placeholder: "Your name"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Label, {
      htmlFor: "ce"
    }, "Email"), /*#__PURE__*/React.createElement(Input, {
      id: "ce",
      type: "email",
      placeholder: "you@company.com"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Label, {
      htmlFor: "cm"
    }, "Message"), /*#__PURE__*/React.createElement(Textarea, {
      id: "cm",
      placeholder: "Tell us about your project",
      style: {
        minHeight: 140
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      id: "ca",
      checked: agree,
      onChange: setAgree
    }), /*#__PURE__*/React.createElement(Label, {
      htmlFor: "ca",
      style: {
        cursor: "pointer"
      }
    }, "I agree to the terms")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: dark ? "light" : "primary"
    }, "Send")));
  }

  /* ---- Contact Us ---- */
  function ContactUs() {
    const details = [["mail", "Email", "info@wstk.kr"], ["call", "Phone", "+82 054-705-3601"], ["print", "Fax", "+82 054-705-3602"], ["location_on", "Office", "116-24, Cheonbuksandan-ro 2-gil, Cheonbuk-myeon, Gyeongju-si, Gyeongsangbuk-do, Republic of Korea"]];
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Contact Us",
      intro: "Reach out to W.S. Tungsten Korea for inquiries or information. Available in English, Korean, and Japanese."
    }), /*#__PURE__*/React.createElement("section", {
      className: "scheme-2",
      style: {
        paddingInline: "5%",
        paddingBlock: "clamp(56px,8vw,112px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "two-col",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 56,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        color: "var(--color-deep-sea-green)",
        marginBottom: 16
      }
    }, "Message"), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginBottom: 20
      }
    }, "Send inquiry"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-medium)",
        marginBottom: 32
      }
    }, "Tell us about your project."), /*#__PURE__*/React.createElement(InquiryForm, null)), /*#__PURE__*/React.createElement("div", {
      className: "detail-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 32
      }
    }, details.map(([ic, h, v]) => /*#__PURE__*/React.createElement("div", {
      key: h
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        fontSize: 34,
        color: "var(--color-deep-sea-green)"
      }
    }, ic), /*#__PURE__*/React.createElement("h6", {
      style: {
        fontWeight: 700,
        margin: "14px 0 6px"
      }
    }, h), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-regular)"
      }
    }, v))))))));
  }
  window.WSTKPages = {
    OurBusiness,
    Commitment,
    ContactUs
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections-pages.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
