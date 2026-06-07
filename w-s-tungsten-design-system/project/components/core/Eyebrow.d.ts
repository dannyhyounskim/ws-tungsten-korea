import * as React from "react";

/** Eyebrow / overline kicker label that sits above section headings. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
