import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import NewTaskForm from "./components/NewTaskForm";
import TaskRow from "./components/TaskRow";

const COLUMNS = ["Task", "Description", "Time", "Actions"];

const Home = () => (
  <>
    <div className="grid grid-cols-1">
      <div className="col-9">
        <div className="grid grid-rows-1 grid-cols-1 p-2 my-2 justify-items-end border-2">
          <NewTaskForm />
        </div>
        <Table
          columns={COLUMNS}
          rows={() =>
            Array(10)
              .fill("")
              .map(() => <TaskRow />)
          }
        />
        <Pagination />
      </div>
    </div>
  </>
);

export default Home;
