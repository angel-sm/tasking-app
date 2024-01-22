import { Task } from "@/context/Task/domain/Task.model";
import PlayIcon from "@/presentation/assets/icons/Play.icon";
import Button from "@/presentation/components/Button/Button";

interface IRestartButtonProps {
  document: Task;
  setTimeLeft: (timeLeft: number) => void;
}

const RestartButton = ({ document, setTimeLeft }: IRestartButtonProps) => (
  <Button
    label={() => <PlayIcon width={14} height={14} />}
    onClick={() => {
      const timeLeft = document.restart() as number;
      setTimeLeft(timeLeft);
    }}
    type="secondary"
  />
);

export default RestartButton;
