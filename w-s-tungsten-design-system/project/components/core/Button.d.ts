import * as React from "react";

/**
 * Primary call-to-action button. The brand's signature control: square
 * corners sitting on a 3px hard offset shadow that collapses as the button
 * "presses down" (translateY 3px) on hover.
 *
 * @startingPoint section="Core" subtitle="Press-down CTA button" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `light` is for dark sections; `secondary` adapts to the scheme. */
  variant?: "primary" | "secondary" | "light" | "link";
  /** Control size. */
  size?: "default" | "sm" | "icon";
  /** Icon node rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
  /** Render as an anchor with this href instead of a button. */
  href?: string;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
