import { PayloadAction } from "@reduxjs/toolkit";
import { ITasksInitialState } from "./redux-repository.interface";
import { Task } from "../../domain/Task.model";

export const createTaskBuilder = (
  state: ITasksInitialState,
  action: PayloadAction<Task | null>
) => {
  const id = action.payload?.id as string;
  const task = action.payload as Task;
  state.tasks[id] = task;
};

export const searchTasksBuilder = (
  state: ITasksInitialState,
  action: PayloadAction<{ [id: string]: Task } | []>
) => {
  state.tasks = action.payload as { [id: string]: Task };
};

export const updateTaskBuilder = (
  state: ITasksInitialState,
  action: PayloadAction<{ [id: string]: Task }>
) => {
  const tasks = action.payload;
  state.tasks = tasks;
};

export const deleteTaskBuilder = (
  state: ITasksInitialState,
  action: PayloadAction<string>
) => {
  const id = action.payload;
  delete state.tasks[id];
};
