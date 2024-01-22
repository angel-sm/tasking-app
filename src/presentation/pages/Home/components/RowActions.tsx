import { useDispatch } from "react-redux";

import { setTaskToUpdate } from "@/context/Task/infrastructure/redux/Task.slice";
import { AppDispatch } from "@/context/shared/infrastructure/redux/Index";

import Dropdown from "@components/Dropdown/Dropdown";
import { TaskDeletor } from "@/context/Task/application/Task-deletor";
import { Task } from "@/context/Task/domain/Task.model";
import Button from "@/presentation/components/Button/Button";
import VerticalDotsIcon from "@/presentation/assets/icons/VerticalDots.icon";

interface IRowActionsProps {
  document: Task;
  timeLeft: number;
}

const RowActions = ({ document, timeLeft }: IRowActionsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Dropdown
      button={(handleOpen) => (
        <Button
          label={() => <VerticalDotsIcon height={14} width={14} />}
          onClick={handleOpen}
          type="secondary"
        />
      )}
      group="Actions"
      options={[
        {
          title: "Edit",
          action() {
            document.pause(timeLeft);
            dispatch(setTaskToUpdate(document));
          },
        },
        {
          title: "Delete",
          action() {
            const deletor = new TaskDeletor();
            const id = document.id as string;
            deletor.delete(id);
          },
        },
      ]}
    />
  );
};

export default RowActions;
