import { Task } from "@/context/Task/domain/Task.model";
import { Option } from "@/presentation/components/Dropdown/Dropdown.interface";
import Dropdown from "@components/Dropdown/Dropdown";
import { useState } from "react";

interface IRowStatusProps {
  document: Task;
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
  return (
    <Dropdown
      button={document.status.toLocaleUpperCase()}
      group="Pass to"
      options={options}
    />
  );
};

export default RowStatus;
