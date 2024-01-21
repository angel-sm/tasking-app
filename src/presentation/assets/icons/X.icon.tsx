import { IIcon } from "./Icon.interface";

function XIcon({ width, height }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "34"}
      height={height ?? "34"}
      viewBox="0 0 24 24"
      style={{ msFilter: "" }}
      fill="rgba(0, 0, 0, 1)"
    >
      <path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
    </svg>
  );
}

export default XIcon;
