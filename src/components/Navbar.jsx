import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const LOGO = import.meta.env.BASE_URL + "assets/logo/logo-light.png";

/* Site navbar — ink (scheme-4) bar with the white WSTK wordmark, primary
 * links, and a language selector. Routed via react-router. */
export function Navbar({
  links = [
    { label: "Our Business", to: "/our-business" },
    { label: "Commitment", to: "/commitment" },
    { label: "Contact", to: "/contact" },
  ],
  languages = ["English", "Korean", "Japanese"],
  className = "",
  style,
}) {
  const [lang, setLang] = React.useState(languages[0]);
  const [openLang, setOpenLang] = React.useState(false);
  const location = useLocation();
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    const onDoc = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpenLang(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <nav
      className={`scheme-4 ${className}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 72,
        paddingInline: "5%",
        position: "sticky",
        top: 0,
        zIndex: 100,
        ...style,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={LOGO} alt="W.S. Tungsten Korea" style={{ height: 36, width: "auto" }} />
      </Link>
      <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {links.map((l) => {
          const active = location.pathname === l.to;
          return (
            <NavLink
              key={l.label}
              to={l.to}
              style={{
                padding: "8px 16px",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-regular)",
                color: "#fff",
                opacity: active ? 1 : 0.82,
                fontWeight: active ? 600 : 400,
              }}
            >
              {l.label}
            </NavLink>
          );
        })}
        <div ref={menuRef} style={{ position: "relative" }}>
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ transition: "transform 200ms", transform: openLang ? "rotate(180deg)" : "none" }}
            >
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
                boxShadow: "var(--shadow-pop)",
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
