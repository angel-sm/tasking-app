import { Task } from "@/context/Task/domain/Task.model";
import Button from "@/presentation/components/Button/Button";
import PauseIcon from "@assets/icons/Pause.icon";

interface IPauseButtonProps {
  document: Task;
  timeLeft: number;
}

const PauseButton = ({ document, timeLeft }: IPauseButtonProps) => (
  <Button
    label={() => <PauseIcon width={14} height={14} />}
    onClick={() => {
      document.pause(timeLeft);
      console.log("🚀 ~ document:", document);
    }}
    type="secondary"
  />
);

export default PauseButton;
