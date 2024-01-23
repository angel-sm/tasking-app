import { Task } from "@/context/Task/domain/Task.model";
import { updateTask } from "@/context/Task/infrastructure/redux/redux.repository";
import { AppDispatch } from "@/context/shared/infrastructure/redux/Index";
import PlayIcon from "@/presentation/assets/icons/Play.icon";
import Button from "@/presentation/components/Button/Button";
import { useDispatch } from "react-redux";

interface IRestartButtonProps {
  document: Task;
}

const RestartButton = ({ document }: IRestartButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Button
      label={() => <PlayIcon width={14} height={14} />}
      onClick={() => {
        document.restart();
        dispatch(
          updateTask({
            id: document.id as string,
            newTask: document.getPrimitives(),
          })
        );
      }}
      type="secondary"
    />
  );
};

export default RestartButton;
