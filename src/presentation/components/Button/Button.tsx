import { Classes, IButtonProps } from "./Button.interface";

const Button = ({
  onClick,
  label,
  type = "secondary",
  custom,
  disabled = false,
}: IButtonProps) => {
  const classes = {
    primary: {
      container: "bg-indigo-500 hover:bg-indigo-600",
      button: "font-medium text-white",
    },
    secondary: {
      container: "border bg-white",
      button: "text-gray-600 hover:bg-gray-50 hover:text-gray-700",
    },
  } as Classes;

  return (
    <div
      className={`inline-flex items-center overflow-hidden rounded-md border ${custom ? custom.container : classes[type].container}`}
    >
      <button
        disabled={disabled}
        type="button"
        onClick={onClick}
        className={`px-4 py-2 text-sm/none ${custom ? custom.button : classes[type].button}`}
      >
        {typeof label === "function" && label()}
        {typeof label === "string" && label}
      </button>
    </div>
  );
};

export default Button;
