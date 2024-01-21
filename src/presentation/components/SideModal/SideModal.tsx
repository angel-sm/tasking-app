import { ReactNode, useState } from "react";
import XIcon from "../../assets/icons/X.icon";

interface SideModel {
  content: () => ReactNode;
}

const SideModal = ({ content }: SideModel) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="border-e px-4 py-1 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        >
          New task
        </button>
      </div>
      {open && (
        <div className="w-full md:w-8/12 lg:w-5/12 fixed top-0	right-0 h-screen bg-zinc-50 drop-shadow-2xl transition delay-150 duration-300 ease-in-out z-50">
          <div className="px-5 pt-5">
            <div className="inline-flex items-center overflow-hidden rounded-md bg-white">
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="px-4 py-1 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
              >
                <XIcon width={18} height={18} />
              </button>
            </div>
          </div>
          <div className="p-10">{content && content()}</div>
        </div>
      )}
    </>
  );
};

export default SideModal;
