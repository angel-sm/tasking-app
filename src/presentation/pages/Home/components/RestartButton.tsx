import { Task } from "@/context/Task/domain/Task.model";
import PlayIcon from "@/presentation/assets/icons/Play.icon";

interface IRestartButtonProps {
  document: Task;
  setTimeLeft: (timeLeft: number) => void;
}

const RestartButton = ({ document, setTimeLeft }: IRestartButtonProps) => (
  <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
    <button
      onClick={() => {
        const timeLeft = document.restart() as number;
        setTimeLeft(timeLeft);
        console.log("🚀 ~ document:", document);
      }}
      type="button"
      className="border-e px-4 py-1 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
    >
      <PlayIcon width={18} height={18} />
    </button>
  </div>
);

export default RestartButton;
