import * as React from "react";

/**
 * Outlined, square-cornered container. Flat by default — a 1px scheme-aware
 * border, no shadow. Used for stat tiles, content blocks, form panels.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "transparent";
  padding?: "none" | "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
