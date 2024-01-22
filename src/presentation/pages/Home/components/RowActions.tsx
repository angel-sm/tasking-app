import { useDispatch } from "react-redux";

import { setTaskToUpdate } from "@/context/Task/infrastructure/redux/Task.slice";
import { AppDispatch } from "@/context/shared/infrastructure/redux/Index";

import Dropdown from "@components/Dropdown/Dropdown";
import { TaskDeletor } from "@/context/Task/application/Task-deletor";
import { Task } from "@/context/Task/domain/Task.model";

interface IRowActionsProps {
  document: Task;
}

const RowActions = ({ document }: IRowActionsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Dropdown
      button="..."
      group="Actions"
      options={[
        {
          title: "Edit",
          action() {
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
