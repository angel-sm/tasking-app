import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/Index";

import Pagination from "@components/Pagination/Pagination";
import Table from "@components/Table/Table";

import TaskForm from "./components/TaskForm";
import TaskRow from "./components/TaskRow";
import ChartIcon from "@/presentation/assets/icons/Chart.icon";
import Button from "@/presentation/components/Button/Button";
import Filters from "./components/Filters";
import { Task } from "@/context/Task/domain/Task.model";
import { useEffect } from "react";

import { searchTasks } from "@tasks/infrastructure/redux/redux.repository";

const COLUMNS = ["Task", "Description", "Duration", "Progress", "Actions"];

const Home = () => {
  const { tasks, filterTasks } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(searchTasks());
  }, []);

  return (
    <div className="">
      <div className="flex gap-2 justify-end">
        <Filters />
        <Button
          label={() => (
            <div className="flex">
              <ChartIcon width={16} height={16} />
              <span className="ml-2 font-medium">Stats</span>
            </div>
          )}
        />
        <TaskForm />
      </div>
      <div className="">
        <Table
          columns={COLUMNS}
          rows={() =>
            !filterTasks.length
              ? tasks.map((task: Task) => (
                  <TaskRow key={task.id} document={task} />
                ))
              : filterTasks.map((task: Task) => (
                  <TaskRow key={task.id} document={task} />
                ))
          }
        />
      </div>
      <div className="grid grid-rows-1 grid-cols-1 p-2 my-2 justify-items-end mt-2">
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
