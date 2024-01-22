import { IIcon } from "./Icon.interface";

function VerticalDotsIcon({ width, height }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "34"}
      height={height ?? "34"}
      viewBox="0 0 24 24"
      style={{ msFilter: "" }}
      fill="rgba(0, 0, 0, 1)"
    >
      <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
    </svg>
  );
}

export default VerticalDotsIcon;
