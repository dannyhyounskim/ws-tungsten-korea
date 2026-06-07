# W.S. Tungsten Korea — Marketing Website

A production implementation of the **W.S. Tungsten Korea (WSTK)** marketing site,
built from the Claude Design handoff bundle in
[`w-s-tungsten-design-system/`](w-s-tungsten-design-system/). WSTK is a
metallurgical manufacturer of Ferro Tungsten — the only tungsten smelter in a
non-communist country and the only Ferro Tungsten manufacturer in Korea.

The brand reads **industrial, precise, premium-serious**: square corners, a deep
teal + ink palette warmed by ore-gold, Fraunces serif display over Inter body,
hard 3px "press-down" button shadows, and macro photography of crystalline
tungsten ore.

## Stack

- **Vite** + **React 18** (the design prototypes were React/JSX)
- **react-router-dom** for the four routes
- Plain CSS custom properties for the design tokens (ported verbatim from the
  design system) — no CSS framework

## Getting started

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Pages

| Route            | Page          | Sections |
| ---------------- | ------------- | -------- |
| `/`              | Home          | Hero · Competitiveness · What is Ferro Tungsten · AI-automated process timeline · Connect |
| `/our-business`  | Our Business  | Automation · AI quality control · ESG · Customized production · CTA + inquiry form |
| `/commitment`    | Commitment    | Sustainability · Responsible Mineral Sourcing Policy (accordion) |
| `/contact`       | Contact Us    | Inquiry form · contact details |

## Project structure

```
src/
  main.jsx              app entry (BrowserRouter)
  App.jsx              routes + nav/footer shell + scroll-to-top
  styles/
    styles.css         global entry — @imports the tokens + app globals
    tokens/            colors, typography, spacing, schemes, fonts, base
  components/          Button, Card, Badge, Eyebrow, Input, Textarea,
                       Checkbox, Label, Accordion, Navbar, Footer, Icon,
                       InquiryForm
  pages/               Home, OurBusiness, Commitment, ContactUs
public/
  fonts/               Fraunces + Inter woff2
  assets/images/       ore + facility photography
  assets/logo/         logo-light.png (white mark, dark surfaces only)
```

## Design system

The token CSS, schemes (`scheme-1`–`scheme-4`), and component behavior all match
[`w-s-tungsten-design-system/`](w-s-tungsten-design-system/) — see its
[`readme.md`](w-s-tungsten-design-system/project/readme.md) for the full brand
guide (content voice, visual foundations, iconography).

## Notes / open items (carried over from the design handoff)

- **Icons** are **Google Material Symbols (Outlined)** via CDN — a substitute for
  the original `relume-icons` (which shipped only as a React package). Names align;
  swap in the real set if licensed.
- **Logo:** only the white/transparent mark shipped, so it is used on dark
  surfaces (navbar/footer) only. A dark-on-light variant would be needed for any
  light-background placement.
