import { ReactNode } from "react";

export interface Classes {
  [type: string]: {
    [prop: string]: string;
  };
}

export interface IButtonProps {
  onClick?: () => void;
  label: (() => ReactNode) | string;
  type?: "primary" | "secondary";
  custom?: {
    [porp: string]: string;
  };
  disabled?: boolean;
}
