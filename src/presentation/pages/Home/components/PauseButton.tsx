import { Task } from "@/context/Task/domain/Task.model";
import PauseIcon from "@assets/icons/Pause.icon";

interface IPauseButtonProps {
  document: Task;
  timeLeft: number;
}

const PauseButton = ({ document, timeLeft }: IPauseButtonProps) => (
  <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
    <button
      onClick={() => {
        document.pause(timeLeft);
        console.log("🚀 ~ document:", document);
      }}
      type="button"
      className="border-e px-4 py-1 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
    >
      <PauseIcon width={18} height={18} />
    </button>
  </div>
);

export default PauseButton;
