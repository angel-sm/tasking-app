import { Task } from "@/context/Task/domain/Task.model";
import { updateTask } from "@/context/Task/infrastructure/redux/redux.repository";
import { AppDispatch } from "@/context/shared/infrastructure/redux/Index";
import Button from "@/presentation/components/Button/Button";
import { Option } from "@/presentation/components/Dropdown/Dropdown.interface";
import Dropdown from "@components/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface IRowStatusProps {
  document: Task;
}

export interface Classes {
  [type: string]: {
    [prop: string]: string;
  };
}

const RowStatus = ({ document }: IRowStatusProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const options =
      document.status === "PROGRESS"
        ? [
            {
              title: "Finalize",
              action() {
                document.finalize();
                dispatch(
                  updateTask({
                    id: document.id as string,
                    newTask: document.getPrimitives(),
                  })
                );
              },
            },
          ]
        : [
            {
              title: "Progress",
              action() {
                document.start();
                dispatch(
                  updateTask({
                    id: document.id as string,
                    newTask: document.getPrimitives(),
                  })
                );
              },
            },
          ];

    setOptions(options);
  }, [dispatch, document]);

  const classes = {
    todo: {
      container: "border bg-white",
      button: "text-gray-600 hover:bg-gray-50 hover:text-gray-700",
    },
    progress: {
      container: "bg-indigo-500 hover:bg-indigo-600",
      button: "font-medium text-white",
    },
    done: {
      container: "bg-green-500",
      button: "font-medium text-white",
    },
  } as Classes;

  return (
    <Dropdown
      button={(handleOpen) => (
        <Button
          disabled={document.status === "DONE"}
          label={document.status.toLocaleUpperCase()}
          onClick={handleOpen}
          type="secondary"
          custom={classes[document.status.toLocaleLowerCase()]}
        />
      )}
      group="Pass to"
      options={options}
    />
  );
};

export default RowStatus;
