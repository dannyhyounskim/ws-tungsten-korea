Flat outlined container with square corners and a scheme-aware border. The brand's cards are structural, not floating — no drop shadow.

```jsx
<Card padding="lg">
  <h3 style={{ fontFamily: "var(--font-heading)" }}>What is Ferro Tungsten</h3>
</Card>
```

Props: `variant` (`default` | `transparent`), `padding` (`none` | `sm` | `md` | `lg`). Inherits scheme colors, so it inverts correctly on dark sections.
