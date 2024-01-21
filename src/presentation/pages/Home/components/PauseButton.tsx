import PauseIcon from "../../../assets/icons/Pause.icon";

const PauseButton = () => (
  <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
    <button
      type="button"
      className="border-e px-4 py-1 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
    >
      <PauseIcon width={18} height={18} />
    </button>
  </div>
);

export default PauseButton;
