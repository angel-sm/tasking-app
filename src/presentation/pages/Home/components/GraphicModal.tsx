import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import SideModal from "@/presentation/components/SideModal/SideModal";
import { useState } from "react";
import { Task } from "@/context/Task/domain/Task.model";
import { RootState } from "@/context/shared/infrastructure/redux/Index";
import { useSelector } from "react-redux";
import Button from "@/presentation/components/Button/Button";
import ChartIcon from "@/presentation/assets/icons/Chart.icon";

ChartJS.register(ArcElement, Tooltip, Legend);
const GraphicModal = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const totalInTodo = tasks.filter(
    (task: Task) => task.status === "TODO"
  ).length;

  const totalInDone = tasks.filter(
    (task: Task) => task.status === "DONE"
  ).length;

  const data = {
    labels: ["To do", "Finilized"],
    datasets: [
      {
        label: " Tasks",
        data: [totalInTodo, totalInDone],
        backgroundColor: ["rgba(80, 80, 80, 0.2)", "rgba(34, 197, 94, 0.2)"],
        borderColor: ["rgba(80, 80, 80, 1)", "rgba(34, 197, 94, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const [open, setOpen] = useState<boolean>(false);

  const handleCloseForm = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <Button
        label={() => (
          <div className="flex ">
            <ChartIcon width={16} height={16} />
            <span className="ml-2 font-medium">Stats</span>
          </div>
        )}
        onClick={() => setOpen(!open)}
      />
      <SideModal
        open={open}
        onClose={handleCloseForm}
        content={() => (
          <div className="h-5/12 rounded-lg">
            <Pie data={data} />
          </div>
        )}
      />
    </>
  );
};

export default GraphicModal;
