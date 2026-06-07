import React from "react";
import { Button } from "./Button.jsx";
import { Input } from "./Input.jsx";
import { Textarea } from "./Textarea.jsx";
import { Checkbox } from "./Checkbox.jsx";
import { Label } from "./Label.jsx";

/* Shared contact / inquiry form. `dark` swaps the submit button to the
 * white "light" chip for use on dark (scheme-1) sections. */
export function InquiryForm({ dark }) {
  const [agree, setAgree] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <form style={{ display: "grid", gap: 20, maxWidth: 460 }} onSubmit={onSubmit}>
      <div style={{ display: "grid", gap: 8 }}>
        <Label htmlFor="cn">Name</Label>
        <Input id="cn" name="name" placeholder="Your name" required />
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        <Label htmlFor="ce">Email</Label>
        <Input id="ce" name="email" type="email" placeholder="you@company.com" required />
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        <Label htmlFor="cm">Message</Label>
        <Textarea id="cm" name="message" placeholder="Tell us about your project" style={{ minHeight: 140 }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Checkbox id="ca" checked={agree} onChange={setAgree} />
        <Label htmlFor="ca" style={{ cursor: "pointer" }}>I agree to the terms</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <Button type="submit" variant={dark ? "light" : "primary"} disabled={!agree}>Send</Button>
        {sent ? (
          <span style={{ fontSize: "var(--text-regular)", opacity: 0.75 }}>
            Thank you — we&rsquo;ll be in touch shortly.
          </span>
        ) : null}
      </div>
    </form>
  );
}
