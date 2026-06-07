import React from "react";

/* Site footer — ink (scheme-4) band with the white wordmark, link row, a
 * hairline divider, and a legal line. Pass `logoSrc` for the mark. */
export function Footer({
  logoSrc,
  links = [
    { label: "Our Business", href: "#" },
    { label: "Commitment", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
  ],
  legal = "ⓒ W.S. Tungsten Korea  CEO : Jang JeHo   Tel : +82 054-705-3601   Fax : +82 054-705-3602   E-mail : info@wstk.kr",
  className = "",
  style,
}) {
  return (
    <footer
      className={`scheme-4 ${className}`}
      style={{ paddingInline: "5%", paddingBlock: "48px", ...style }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
          paddingBottom: 40,
        }}
      >
        <a href="#">
          {logoSrc ? (
            <img src={logoSrc} alt="W.S. Tungsten Korea" style={{ height: 34, width: "auto" }} />
          ) : (
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: "#fff", letterSpacing: "0.04em" }}>WSTK</span>
          )}
        </a>
        <ul style={{ display: "flex", gap: 24, listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" }}>
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={l.onClick}
                style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--text-regular)", color: "#fff" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ height: 1, width: "100%", background: "var(--color-white-20)" }} />
      <p
        style={{
          paddingTop: 24,
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-small)",
          color: "var(--color-white-60)",
          textAlign: "center",
        }}
      >
        {legal}
      </p>
    </footer>
  );
}
