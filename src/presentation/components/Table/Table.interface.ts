import { ReactNode } from "react";

export interface ITableProps {
  columns: Array<string>;
  rows(): Array<ReactNode>;
}
