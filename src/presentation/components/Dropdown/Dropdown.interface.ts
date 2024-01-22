import { ReactNode } from "react";

export interface IDropDownProps {
  button: (handleOpen: () => void) => ReactNode;
  options: Array<Option>;
  group: string;
}

export interface Option {
  title: string;
  action(): unknown;
}
