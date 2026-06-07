Ink top nav bar (scheme-4) with the white WSTK wordmark, primary links, and a language dropdown (English / Korean / Japanese).

```jsx
<Navbar logoSrc="assets/logo/logo-light.png" activeHref="#business"
  links={[{label:"Our Business",href:"#business"},{label:"Commitment",href:"#commit"},{label:"Contact",href:"#contact"}]} />
```

Pass `logoSrc` so the mark resolves in your project; omit it for a text fallback.
