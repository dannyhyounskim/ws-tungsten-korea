# W.S. Tungsten Korea — Design System

A brand & UI system for **W.S. Tungsten Korea Company (WSTK)**, a metallurgical
manufacturer of **Ferro Tungsten**. WSTK positions itself as the only tungsten
smelter in a non-communist country and the only Ferro Tungsten manufacturer in
Korea, with a heavily AI-automated, environmentally responsible production line.

The brand reads **industrial, precise, and premium-serious**: square corners,
a deep teal + ink palette warmed by ore-gold, serif display type over clean
sans body, and macro photography of crystalline tungsten ore.

This system is the foundation for the **website redesign** (marketing site:
Home, Our Business, Commitment, Contact Us) and any branded collateral.

---

## Sources

This system was reverse-engineered from a Relume export of the WSTK site,
mounted read-only at `w-s-tungsten-korea-company-design/`:

- `DESIGN.md` — design tokens (colors, type scale, radii, schemes) as YAML.
- `sitemap.md` — page structure, section order, per-section scheme assignments.
- `assets.md` — logo / image / SVG placement map.
- `react/` — Next.js + Tailwind v4 component source (the real implementation).
- `react/globals.css` — tokens as Tailwind `@theme` + the `.scheme-*` utilities.
- `homepage/full.png` + per-section PNGs — visual reference (copied to `reference/`).
- `fonts/` — Fraunces + Inter woff2 (copied to `fonts/`).
- `logo/`, `images/`, `svgs/` — brand assets (copied to `assets/`).

The original used a Relume "scheme" system numbered 1–5 in `DESIGN.md`, but the
**exported CSS implements four** (`.scheme-1`–`.scheme-4`) and the components
reference those. We follow the **implemented CSS** as the source of truth.

---

## Content fundamentals

How WSTK writes. Match this voice in any new copy.

- **Voice:** confident, factual, engineering-led. States capabilities plainly —
  *"the only tungsten smelter in a non-communist country, leading the world
  market."* No hype words, no exclamation points.
- **Person:** company-as-"we" / "WSTK"; addresses the customer as "you" in CTAs
  ("Tell us about your project", "Ready to work with us"). Headlines are often
  impersonal noun phrases ("Our Competitiveness", "What is Ferro Tungsten").
- **Casing:** Title/sentence case for headings. A few section labels in the
  product/process pages are **ALL CAPS** for emphasis ("AUTOMATION",
  "AI-POWERED QUALITY CONTROL"). Eyebrows are uppercase, tracked.
- **Eyebrows:** every section opens with a short semibold uppercase kicker —
  "Our Technology", "Our Product", "Connect", "Locations", "Message".
- **Technical specificity is a feature:** real numbers and chemistry are part of
  the brand — `W`, `3422 °C`, `74`, `183.84`, `WO₃`, `ICP-OES`, `RMI`, `OECD`.
  Use real specs, never invent stats.
- **Sentence length:** short, declarative. Body copy is dense but plain.
- **No emoji.** Ever. This is a B2B industrial supplier.
- **Bilingual context:** the audience spans English / Korean / Japanese; a
  language selector is part of the chrome. Keep copy translation-friendly.

Examples (verbatim from the site):
> "W.S. Tungsten Korea has a stable raw material supply chain and advanced
> automation technology…"
> "For inquiries, please do not hesitate to contact us"
> "Precise analysis by ICP-OES"

---

## Visual foundations

**Palette.** A light theme built on cool neutrals and a signature **Deep Sea
Green** (`#0B4F6C`) teal. Dark surfaces use deep-sea-green-darker (`#041F2B`)
and near-black ink (`#050A08`). **Web Orange** (`#F2A900`) is the accent — it
echoes the warm gold mineralization in the ore photography and is used
sparingly (eyebrows on dark sections, small highlights), never as a fill for
large areas. **De York** mint (`#6CC5A1`) signals positive/eco states. **Pampas**
(`#F6F5F0`) is the warm off-white content surface. Each family is a 7-step ramp
(lightest → darkest). See `tokens/colors.css`.

**Schemes & rhythm.** Sections opt into one of four schemes that rebind
`--color-scheme-*`; alternating them builds the page rhythm:
`scheme-1` deep teal → `scheme-2` pampas → `scheme-1` deep teal → `scheme-3`
teal-tint → `scheme-2` pampas, with `scheme-4` ink for navbar + footer.

**Type.** **Fraunces** (serif) for all headings at weight **500** — characterful,
slightly old-style, gives the brand its premium-industrial feel. **Inter** for
body and UI at 400 (600 for eyebrows/labels). Big type scale: desktop H1 = 72px.
Headings use tight leading (1.2) and -1% tracking. See `tokens/typography.css`.

**Shape.** Everything is **square** — `--radius-*` all resolve to `0`. Buttons,
cards, inputs, badges, images: hard corners. This is the most defining
structural trait.

**Elevation = hard offset shadow.** There is essentially no blur in the system.
Buttons sit on a **3px solid offset shadow** (`0 3px 0 0 <darker>`) and
**press down** on hover (`translateY(3px)` + shadow removed) — a tactile,
physical-button feel. Real soft shadows appear only on transient floating UI
(e.g. the language menu). Timeline nodes use a solid ring (`box-shadow:
0 0 0 8px <bg>`) to punch through the connector line.

**Cards.** Flat and outlined: 1px scheme-aware border, square corners, no
shadow, scheme foreground fill. Structural, not floating.

**Borders & dividers.** 1px hairlines at `--color-ink-15` (light) or
`--color-white-20` (dark). Section content is ruled with thin lines, progress
bars, and 2–3px connector strokes.

**Imagery.** Macro photography of crystalline tungsten ore — silvery, faceted,
cool blue-grey tones with warm gold flecks, deep shadows, shallow depth of
field, often near-black backgrounds. Full-bleed within its column, square
corners, `object-fit: cover`. No filters, no rounding, no gradients over them.

**Backgrounds.** Solid scheme colors only. **No gradients**, no textures, no
patterns. The only gradient in the source is a tiny edge fade on an overflowing
timeline — incidental, not decorative.

**Motion.** Restrained and functional. Standard easing
`cubic-bezier(0.4,0,0.2,1)` at 150–300ms. Accordions expand height; chevrons
rotate 180°; buttons translate on press; menus fade. Marquee/loop keyframes
exist for logo/testimonial strips but are slow and linear. No bounces, no
springy overshoot in the core UI.

**Hover / press states.** Buttons: press-down (translateY + lose shadow).
Inputs: subtle background tint (`ink-5` / `white-20`) + border. Links:
underline on hover with 4px offset. Checkboxes fill solid ink with a white tick.

**Layout.** Page max-width 80rem (`--container-xxl`), centered, 5% horizontal
gutter. Vertical section rhythm 64 / 96 / 112px (mobile / md / lg). Two-column
splits (text + image, or label + content) are the dominant pattern.

---

## Iconography

The source uses **`relume-icons`** — a Material-Symbols-style line icon set
(`Mail`, `Call`, `Sms`, `LocationOn`, `KeyboardArrowDown`, `Check`). These are
not shipped as standalone files in the export (they're a React package).

**Substitution (flagged):** we use **Google Material Symbols (Outlined)** via the
Google Fonts CDN as the closest match — same geometric, single-weight, rounded-
terminal Material style. Load it where icons are needed:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap">
<span class="material-symbols-outlined">mail</span>
```

Common glyphs: `mail`, `call`, `print` (fax), `location_on`, `chat`,
`keyboard_arrow_down`, `check`. Render at section text color; 32–48px in
contact blocks, ~22px inline. **No emoji, no unicode-as-icon.** If you need the
exact Relume icons, drop in the package and swap the `<span>`s — the names align.

The `assets/svgs/navbar-*.svg` files are extracted navbar SVGs from the export
(kept for reference). The logo is `assets/logo/logo-light.png` (white WSTK mark
+ ore glyph, transparent — use on dark schemes only).

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import this). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for portable use.

**Tokens** (`tokens/`, all reachable from `styles.css`)
- `fonts.css` — `@font-face` for Fraunces + Inter (local woff2).
- `colors.css` — palette ramps, alpha ramps, semantic + scheme tokens.
- `typography.css` — families, weights, fluid type scale, leading, tracking.
- `spacing.css` — spacing scale, square radii, hard-shadow tokens, containers, motion.
- `schemes.css` — `.scheme-1`–`.scheme-4` section schemes.
- `base.css` — element defaults + helper utilities (`.wstk-container`, `.wstk-eyebrow`).

**Components** (`components/`) — `window.WSTungstenDesignSystem_3ea155`
- `core/` — Button, Card, Badge, Eyebrow
- `forms/` — Input, Textarea, Checkbox, Label
- `feedback/` — Accordion
- `navigation/` — Navbar, Footer

**UI kit** (`ui_kits/`)
- `website/` — click-through marketing site (Home · Our Business · Commitment ·
  Contact Us). `index.html` mounts it; sections split across
  `sections-home.jsx`, `sections-pages.jsx`, `app.jsx`.

**Guidelines** (`guidelines/`) — foundation specimen cards rendered in the
Design System tab (Colors, Type, Spacing, Brand).

**Assets** (`assets/`) — `logo/`, `images/` (ore + facility photography),
`svgs/`. `fonts/` holds the woff2 binaries. `reference/` holds the original
homepage screenshots.

> **Font note:** Fraunces and Inter are bundled. If you have licensed display
> cuts or a different optical size of Fraunces, drop them into `fonts/` and
> update `tokens/fonts.css`.
