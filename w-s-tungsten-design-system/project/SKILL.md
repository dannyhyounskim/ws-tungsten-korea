---
name: wstk-design
description: Use this skill to generate well-branded interfaces and assets for W.S. Tungsten Korea (WSTK), the Ferro Tungsten manufacturer, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

Key facts:
- **Brand:** W.S. Tungsten Korea (WSTK) — industrial metallurgy, Ferro Tungsten. Tone is confident, factual, engineering-led. No emoji.
- **Tokens:** link `styles.css` (it `@import`s everything). Colors, type, spacing, schemes live in `tokens/`.
- **Look:** square corners (radii = 0), Fraunces serif headings + Inter body, deep-teal/ink palette with ore-gold accent, hard 3px press-down button shadows, flat outlined cards, macro tungsten-ore photography, solid (never gradient) backgrounds.
- **Schemes:** wrap sections in `.scheme-1` (deep teal) / `.scheme-2` (pampas) / `.scheme-3` (teal tint) / `.scheme-4` (ink) — children inherit correct contrast.
- **Components:** React primitives under `components/` exposed on `window.WSTungstenDesignSystem_3ea155` (Button, Card, Badge, Eyebrow, Input, Textarea, Checkbox, Label, Accordion, Navbar, Footer). See each `.prompt.md`.
- **UI kit:** `ui_kits/website/` is a click-through recreation of the marketing site.
- **Icons:** Google Material Symbols (Outlined) via CDN — substitute for the original `relume-icons`.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to design as an expert in this brand.

If the user invokes this skill without other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
