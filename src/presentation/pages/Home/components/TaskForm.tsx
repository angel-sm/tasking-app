import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import SideModal from "@components/SideModal/SideModal";

import { createTask } from "@tasks/infrastructure/redux/redux.repository";
import { AppDispatch, RootState } from "@redux/Index";
import { ITask } from "@/context/Task/domain/Task.interface";
import {
  secondsToHoursMinutes,
  parseTimeToMinutes,
} from "@/presentation/utils/dates";
import { setTaskToUpdate } from "@/context/Task/infrastructure/redux/Task.slice";
import { TaskEditor } from "@/context/Task/application/Task-editor";
import Button from "@/presentation/components/Button/Button";

const TIME_DURATION_OPTIONS = [
  { duration: "30 min", value: 1800 },
  { duration: "45 min", value: 2700 },
  { duration: "1 hr", value: 3600 },
  { duration: "Other", value: "other" },
];

const TaskForm = () => {
  const { task } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const customTimeRef = useRef<HTMLInputElement>(null);

  const [durationSelected, setDurationSelected] = useState<number | string>(30);
  const [open, setOpen] = useState<boolean>(false);

  const handleSelectDuration = (duration: number | string) =>
    setDurationSelected(duration);

  const handleUpsertTask = () => {
    const duration = (
      typeof durationSelected === "string" && customTimeRef.current
        ? parseTimeToMinutes(customTimeRef.current.value)
        : durationSelected
    ) as number;
    const name = nameRef.current?.value ?? "";
    const description = descriptionRef.current?.value ?? "";

    const newTask = {
      duration,
      name,
      description,
    } as ITask;

    if (!task) {
      dispatch(createTask(newTask));
    } else {
      const editor = new TaskEditor();
      const id = task.id as string;
      editor.update(id, newTask);
    }
    handleCloseForm();
  };

  const handleCloseForm = () => {
    setOpen((open) => !open);
    dispatch(setTaskToUpdate(null));
  };

  /*Used to set update task values */
  useEffect(() => {
    if (task) {
      setOpen(true);
      if (nameRef.current) {
        nameRef.current.value = task.name;
      }
      if (descriptionRef.current) {
        descriptionRef.current.value = task.description as string;
      }
      if (task.duration > 60) {
        setDurationSelected("other");
        if (customTimeRef.current) {
          customTimeRef.current.value = secondsToHoursMinutes(task.duration);
        }
      } else {
        setDurationSelected(task.duration);
      }
    }
  }, [task, open]);

  return (
    <>
      <Button label="New task" onClick={() => setOpen(!open)} type="primary" />
      <SideModal
        open={open}
        onClose={handleCloseForm}
        content={() => (
          <>
            <span className="text-2xl ...">New task</span>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpsertTask();
              }}
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <div>
                <label htmlFor="name" className="">
                  Name
                </label>

                <div className="relative">
                  <input
                    type="name"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter task name..."
                    ref={nameRef}
                    disabled={!!task}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="">
                  Description
                </label>

                <div className="relative">
                  <textarea
                    id="OrderNotes"
                    className="mt-2 p-4 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                    rows={4}
                    placeholder="Enter task description..."
                    ref={descriptionRef}
                  />
                </div>
              </div>

              <div className="grid">
                <label>Task duration</label>
                <div className="grid grid-cols-4 rounded-lg border border-gray-100 bg-gray-200 p-1 gap-1 items-center">
                  {TIME_DURATION_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSelectDuration(option.value)}
                      type="button"
                      className={`inline-block rounded-md px-4 py-2 text-sm text-gray-500 focus:relative ${durationSelected === option.value ? "text-indigo-700 bg-white font-medium" : "hover:text-gray-700 hover:bg-white"}`}
                    >
                      {option.duration}
                    </button>
                  ))}
                </div>
                {durationSelected === "other" && (
                  <div className="relative mt-2">
                    <input
                      type="description"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="ej. 1h 30m"
                      ref={customTimeRef}
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white"
                >
                  {task ? "Update task" : "Create task"}
                </button>
              </div>
            </form>
          </>
        )}
      />
    </>
  );
};

export default TaskForm;
