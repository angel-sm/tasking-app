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
  action: PayloadAction<{ [id: string]: Task }>
) => {
  state.tasks = action.payload;
};

export const updateTaskBuilder = (
  state: ITasksInitialState,
  action: PayloadAction<Task | null>
) => {
  const tasks = action.payload as unknown as { [id: string]: Task };
  state.tasks = tasks;
};

export const deleteTaskBuilder = (
  state: ITasksInitialState,
  action: PayloadAction<Task | null>
) => {
  const id = action.payload?.id as string;
  delete state.tasks[id];
};
