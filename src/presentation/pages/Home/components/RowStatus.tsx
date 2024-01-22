import { Task } from "@/context/Task/domain/Task.model";
import Button from "@/presentation/components/Button/Button";
import { Option } from "@/presentation/components/Dropdown/Dropdown.interface";
import Dropdown from "@components/Dropdown/Dropdown";
import { useState } from "react";

interface IRowStatusProps {
  document: Task;
}

export interface Classes {
  [type: string]: {
    [prop: string]: string;
  };
}

const RowStatus = ({ document }: IRowStatusProps) => {
  const [options] = useState<Option[]>(
    document.status === "PROGRESS"
      ? [
          {
            title: "Finalize",
            action() {
              // const editor = new TaskEditor();
              document.finalize();
              console.log(document);
              // editor.update(document.id as string, document.getPrimitives());
            },
          },
        ]
      : [
          {
            title: "Progress",
            action() {
              // const editor = new TaskEditor();
              document.start();
              console.log(document);
              // editor.update(document.id as string, document.getPrimitives());
            },
          },
        ]
  );

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
