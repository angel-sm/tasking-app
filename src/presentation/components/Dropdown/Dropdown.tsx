import { useState } from "react";
import { IDropDownProps } from "./Dropdown.interface";

const Dropdown = ({ button, options, group }: IDropDownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        >
          {button}
        </button>
      </div>
      {open && (
        <div
          className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
          role="menu"
        >
          <strong className="block pt-2 px-2 text-xs font-medium uppercase text-gray-400">
            {group}
          </strong>

          <div className="p-2">
            {options &&
              options.map((option) => (
                <button
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
