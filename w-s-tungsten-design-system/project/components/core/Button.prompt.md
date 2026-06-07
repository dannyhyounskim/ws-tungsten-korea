Primary action control — square-cornered button that presses down on its 3px hard shadow. Use `primary` for the main CTA, `light` on dark sections, `secondary` for the adjacent outline action.

```jsx
<div style={{ display: "flex", gap: 16 }}>
  <Button>Product</Button>
  <Button variant="secondary">Contact</Button>
</div>
```

Variants: `primary` (teal), `secondary` (scheme-aware outline), `light` (white chip for dark schemes), `link` (inline text). Sizes: `default`, `sm`, `icon`. Supports `iconLeft` / `iconRight`, and `href` to render as an anchor.
