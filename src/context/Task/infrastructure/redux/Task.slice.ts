import { createSlice } from "@reduxjs/toolkit";

import { ITasksInitialState } from "./redux-repository.interface";
import { createTask, searchTasks } from "./redux.repository";
import { PayloadAction } from "@reduxjs/toolkit/react";
import { Task } from "../../domain/Task.model";

const slice = createSlice({
  name: "tasks",
  initialState: <ITasksInitialState>{
    tasks: [],
    filterTasks: [],
    task: null,
  },
  reducers: {
    setTaskToUpdate: (state, action: PayloadAction<Task | null>) => {
      state.task = action.payload;
    },
    setTaskFilters: (state, action: PayloadAction<Array<string> | null>) => {
      const filters = action.payload;

      if (!filters?.length) {
        state.filterTasks = [];
        return;
      }

      const tasks = new Set();

      filters.forEach((filter) => {
        state.tasks.forEach((task) => {
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
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.tasks.push(action.payload);
    });
    builder.addCase(searchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

export const { setTaskToUpdate, setTaskFilters } = slice.actions;
export default slice.reducer;
