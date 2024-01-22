export interface IDropDownProps {
  button: string;
  options: Array<Option>;
  group: string;
}

export interface Option {
  title: string;
  action(): unknown;
}
