import { TaskCreator } from "../../../../context/Task/application/Task-creator";
import SideModal from "../../../components/SideModal/SideModal";

const NewTaskForm = () => {
  const handleCreateTask = () => {
    const taskCreator = new TaskCreator();

    taskCreator
      .create({
        name: "task 1",
        description:
          "Scale backend applications from one customer, to millions. Get started on FL0 for free.",
        duration: 30,
      })
      .then(() => {});
  };

  return (
    <SideModal
      content={() => (
        <>
          <span className="text-2xl ...">New task</span>

          <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="name" className="">
                Name
              </label>

              <div className="relative">
                <input
                  type="name"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter task name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="">
                Description
              </label>

              <div className="relative">
                <input
                  type="description"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter task description"
                />
              </div>
            </div>

            <div className="grid">
              <label>Duration</label>
              <div className="grid grid-cols-4 rounded-lg border border-gray-100 bg-gray-200 p-1 gap-1 items-center">
                <button className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                  30 min
                </button>

                <button className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                  45 min
                </button>

                <button className="inline-block rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative">
                  1 hour
                </button>
                <button className="inline-block rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative">
                  Other
                </button>
              </div>
              <div className="relative mt-2">
                <input
                  type="description"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="ej. 1h 30m"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={handleCreateTask}
                type="submit"
                className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Create task
              </button>
            </div>
          </form>
        </>
      )}
    />
  );
};

export default NewTaskForm;
