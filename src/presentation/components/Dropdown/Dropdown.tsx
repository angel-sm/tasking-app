import { useState } from "react";
import { IDropDownProps } from "./Dropdown.interface";

const Dropdown = ({ button, options, group }: IDropDownProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      {button(handleOpen)}
      {open && (
        <div className="origin-top-right z-10 absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <strong className="block pt-2 px-2 text-xs font-medium uppercase text-gray-400">
            {group}
          </strong>

          <div className="p-2">
            {options &&
              options.map((option) => (
                <button
                  key={option.title}
                  type="button"
                  className="block w-full text-left rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                  onClick={option.action}
                >
                  {option.title}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
