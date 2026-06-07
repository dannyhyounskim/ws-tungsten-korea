import * as React from "react";

/** Small square category / status tag in brand tones. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "primary" | "accent" | "success" | "solid";
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
