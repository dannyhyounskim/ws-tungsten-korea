import React from "react";

/* Accordion — the FAQ / policy disclosure pattern. Square, divider-ruled
 * rows with a chevron that rotates open. `type="multiple"` allows several
 * panels open at once. */
export function Accordion({ items = [], type = "single", defaultOpen = [], className = "", style }) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(type === "multiple" ? prev : []);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };
  return (
    <div className={className} style={style}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div
            key={i}
            style={{
              borderBottom: "1px solid var(--color-scheme-border)",
              borderTop: i === 0 ? "1px solid var(--color-scheme-border)" : undefined,
            }}
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              style={{
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
                textAlign: "left",
              }}
            >
              {it.q}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  flex: "none",
                  transition: "transform var(--dur-slow) var(--ease-standard)",
                  transform: isOpen ? "rotate(180deg)" : "none",
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows var(--dur-slow) var(--ease-standard)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    paddingBottom: 22,
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-regular)",
                    lineHeight: "var(--leading-relaxed)",
                    color: "var(--color-scheme-text)",
                    opacity: 0.85,
                  }}
                >
                  {it.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
