import { createSlice } from "@reduxjs/toolkit";

import { ITasksInitialState } from "./redux-repository.interface";
import { createTask } from "./redux.repository";
import { PayloadAction } from "@reduxjs/toolkit/react";
import { Task } from "../../domain/Task.model";

const slice = createSlice({
  name: "tasks",
  initialState: <ITasksInitialState>{
    tasks: [],
    task: null,
  },
  reducers: {
    setTaskToUpdate: (state, action: PayloadAction<Task | null>) => {
      state.task = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.tasks.push(action.payload);
    });
  },
});

export const { setTaskToUpdate } = slice.actions;
export default slice.reducer;
