import * as React from "react";

export interface AccordionItemData {
  q: React.ReactNode;
  a: React.ReactNode;
}

/**
 * Divider-ruled disclosure list for FAQs and policy sections.
 * @startingPoint section="Feedback" subtitle="FAQ accordion" viewport="700x300"
 */
export interface AccordionProps {
  items: AccordionItemData[];
  /** `single` closes others on open; `multiple` allows many open. */
  type?: "single" | "multiple";
  /** Indices open by default. */
  defaultOpen?: number[];
  className?: string;
  style?: React.CSSProperties;
}

export function Accordion(props: AccordionProps): JSX.Element;
