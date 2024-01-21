import PlayIcon from "../../../assets/icons/Play.icon";

const RestartButton = () => (
  <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
    <button
      type="button"
      className="border-e px-4 py-1 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
    >
      <PlayIcon width={14} height={14} />
    </button>
  </div>
);

export default RestartButton;
