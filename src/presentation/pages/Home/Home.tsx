import { useSelector } from "react-redux";

import { RootState } from "@redux/Index";

import Pagination from "@components/Pagination/Pagination";
import Table from "@components/Table/Table";

import TaskForm from "./components/TaskForm";
import TaskRow from "./components/TaskRow";

const COLUMNS = ["Task", "Description", "Duration", "Progress", "Actions"];

const Home = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  return (
    <div className="">
      <div className="grid grid-rows-1 grid-cols-1 p-2 my-2 justify-items-end">
        <TaskForm />
      </div>
      <div className="">
        <Table
          columns={COLUMNS}
          rows={() =>
            tasks.map((task) => <TaskRow key={task.id} document={task} />)
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
