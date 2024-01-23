import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/Index";

import Pagination from "@components/Pagination/Pagination";
import Table from "@components/Table/Table";

import TaskForm from "./components/TaskForm";
import TaskRow from "./components/TaskRow";
import Filters from "./components/Filters";
import { Task } from "@/context/Task/domain/Task.model";
import { useEffect } from "react";

import { searchTasks } from "@tasks/infrastructure/redux/redux.repository";
import GraphicModal from "./components/GraphicModal";

const COLUMNS = ["Task", "Description", "Duration", "Time left", ""];

const Home = () => {
  const { tasks, filterTasks } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(searchTasks());
  }, [dispatch]);

  return (
    <div className="">
      <div className="flex gap-2 justify-end mb-3">
        <GraphicModal />
        <Filters />
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
