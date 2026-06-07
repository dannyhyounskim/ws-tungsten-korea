Divider-ruled FAQ / policy accordion. Pass `items` as `{ q, a }` pairs.

```jsx
<Accordion
  type="multiple"
  defaultOpen={[0]}
  items={[
    { q: "Commitment", a: "W.S. Tungsten Korea is committed to responsible sourcing…" },
    { q: "Scope", a: "This policy applies to all employees, suppliers and partners." },
  ]}
/>
```

`type="single"` collapses siblings on open; `type="multiple"` allows several panels open.
