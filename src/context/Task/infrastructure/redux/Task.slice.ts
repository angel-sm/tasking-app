import { createSlice } from "@reduxjs/toolkit";

import { ITasksInitialState } from "./redux-repository.interface";
import {
  createTask,
  searchTasks,
  deleteTask,
  updateTask,
} from "./redux.repository";
import { PayloadAction } from "@reduxjs/toolkit/react";
import { Task } from "../../domain/Task.model";
import {
  createTaskBuilder,
  deleteTaskBuilder,
  searchTasksBuilder,
  updateTaskBuilder,
} from "./redux.builder";

const slice = createSlice({
  name: "tasks",
  initialState: <ITasksInitialState>{
    tasks: {},
    filterTasks: [],
    task: null,
  },
  reducers: {
    updateTaskInfo: () => {
      (state: ITasksInitialState, action: PayloadAction<Task | null>) => {
        const id = action.payload?.id as string;
        state.tasks[id] = action.payload as Task;
      };
    },
    setTaskToUpdate: (
      state: ITasksInitialState,
      action: PayloadAction<Task | null>
    ) => {
      state.task = action.payload;
    },
    setTaskFilters: (
      state: ITasksInitialState,
      action: PayloadAction<Array<string> | null>
    ) => {
      const filters = action.payload;

      if (!filters?.length) {
        state.filterTasks = [];
        return;
      }

      const tasks = new Set();

      filters.forEach((filter) => {
        Object.values(state.tasks).forEach((task) => {
          if (tasks.has(task)) {
            return;
          }

          if (filter === "short") {
            task.duration <= 1800 && tasks.add(task);
            return;
          }
          if (filter === "medium") {
            task.duration > 1800 && task.duration <= 3600 && tasks.add(task);
            return;
          }
          if (filter === "long") {
            task.duration > 3600 && tasks.add(task);
            return;
          }
        });
      });

      state.filterTasks = Array.from(tasks) as Array<Task>;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTask.fulfilled, createTaskBuilder);
    builder.addCase(searchTasks.fulfilled, searchTasksBuilder);
    builder.addCase(updateTask.fulfilled, updateTaskBuilder);
    builder.addCase(deleteTask.fulfilled, deleteTaskBuilder);
  },
});

export const { setTaskToUpdate, setTaskFilters } = slice.actions;
export default slice.reducer;
