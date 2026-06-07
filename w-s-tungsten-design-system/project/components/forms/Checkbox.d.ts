import * as React from "react";

/** Square checkbox; filled ink when checked. Controlled or uncontrolled. */
export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
