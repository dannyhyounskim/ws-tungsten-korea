import * as React from "react";

/**
 * Single-line text input with square corners and a scheme-aware border.
 * @startingPoint section="Forms" subtitle="Text input with icon & prefix" viewport="700x140"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  prefix?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
