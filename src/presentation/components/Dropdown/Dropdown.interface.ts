export interface IDropDownProps {
  button: string;
  options: Array<Option>;
  group: string;
}

interface Option {
  title: string;
  action(): unknown;
}
