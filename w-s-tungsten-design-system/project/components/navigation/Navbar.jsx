import React from "react";

/* Site navbar — ink (scheme-4) bar with the white WSTK wordmark, primary
 * links, and a language selector. Pass `logoSrc` so the mark resolves in
 * your project. Links are plain {label, href} objects. */
export function Navbar({
  logoSrc,
  links = [
    { label: "Our Business", href: "#" },
    { label: "Commitment", href: "#" },
    { label: "Contact", href: "#" },
  ],
  languages = ["English", "Korean", "Japanese"],
  activeHref,
  className = "",
  style,
}) {
  const [lang, setLang] = React.useState(languages[0]);
  const [openLang, setOpenLang] = React.useState(false);
  return (
    <nav
      className={`scheme-4 ${className}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 72,
        paddingInline: "5%",
        ...style,
      }}
    >
      <a href="#" style={{ display: "flex", alignItems: "center" }}>
        {logoSrc ? (
          <img src={logoSrc} alt="W.S. Tungsten Korea" style={{ height: 36, width: "auto" }} />
        ) : (
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: "#fff", letterSpacing: "0.04em" }}>
            WSTK
          </span>
        )}
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={l.onClick}
            style={{
              padding: "8px 16px",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-regular)",
              color: "#fff",
              opacity: activeHref === l.href ? 1 : 0.82,
              fontWeight: activeHref === l.href ? 600 : 400,
            }}
          >
            {l.label}
          </a>
        ))}
        <div style={{ position: "relative" }}>
          <button
            type="button"
            onClick={() => setOpenLang((v) => !v)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              background: "transparent",
              border: 0,
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-regular)",
              color: "#fff",
            }}
          >
            {lang}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              style={{ transition: "transform 200ms", transform: openLang ? "rotate(180deg)" : "none" }}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {openLang ? (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                minWidth: 140,
                background: "var(--color-neutral-darker)",
                border: "1px solid var(--color-white-20)",
                zIndex: 50,
              }}
            >
              {languages.map((lg) => (
                <button
                  key={lg}
                  type="button"
                  onClick={() => {
                    setLang(lg);
                    setOpenLang(false);
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "10px 16px",
                    background: "transparent",
                    border: 0,
                    cursor: "pointer",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-regular)",
                    color: "#fff",
                  }}
                >
                  {lg}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
