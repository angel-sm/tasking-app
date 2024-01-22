import { createAsyncThunk } from "@reduxjs/toolkit";

import { TaskCreator } from "../../application/Task-creator";

import { ITask } from "../../domain/Task.interface";
import { TaskSearcher } from "../../application/Task-searcher";

export const createTask = createAsyncThunk(
  "tasks/create",
  async (data: ITask) => {
    const creator = new TaskCreator();
    const taskStored = await creator.create(data);
    return taskStored;
  }
);

export const searchTasks = createAsyncThunk("tasks/search", async () => {
  const searcher = new TaskSearcher();
  const tasks = await searcher.search();
  return tasks;
});
