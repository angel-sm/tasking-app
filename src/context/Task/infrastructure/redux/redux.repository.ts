import { createAsyncThunk } from "@reduxjs/toolkit";

import { TaskCreator } from "../../application/Task-creator";

import { ITask } from "../../domain/Task.interface";

export const createTask = createAsyncThunk(
  "tasks/create",
  async (data: ITask) => {
    const creator = new TaskCreator();
    const taskStored = await creator.create(data);
    return taskStored;
  }
);
