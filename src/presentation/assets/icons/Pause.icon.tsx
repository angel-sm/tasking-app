import { IIcon } from "./Icon.interface";

function PauseIcon({ width, height }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "34"}
      height={height ?? "34"}
      viewBox="0 0 24 24"
      style={{ msFilter: "" }}
      fill="rgba(0, 0, 0, 1)"
    >
      <path d="M8 7h3v10H8zm5 0h3v10h-3z"></path>
    </svg>
  );
}

export default PauseIcon;
