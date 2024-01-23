import { Task } from "@/context/Task/domain/Task.model";
import { updateTask } from "@/context/Task/infrastructure/redux/redux.repository";
import { AppDispatch } from "@/context/shared/infrastructure/redux/Index";
import Button from "@/presentation/components/Button/Button";
import PauseIcon from "@assets/icons/Pause.icon";
import { useDispatch } from "react-redux";

interface IPauseButtonProps {
  document: Task;
  timeLeft: number;
}

const PauseButton = ({ document }: IPauseButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Button
      label={() => <PauseIcon width={14} height={14} />}
      onClick={() => {
        document.pause();
        dispatch(
          updateTask({ id: document.id, newTask: document.getPrimitives() })
        );
      }}
      type="secondary"
    />
  );
};

export default PauseButton;
