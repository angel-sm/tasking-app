import { createAsyncThunk } from "@reduxjs/toolkit";

import { TaskCreator } from "../../application/Task-creator";

import { ITask } from "../../domain/Task.interface";
import { TaskSearcher } from "../../application/Task-searcher";
import { TaskEditor } from "../../application/Task-editor";
import { IUpdateTask } from "./redux-repository.interface";
import { TaskDeletor } from "../../application/Task-deletor";
import { Task } from "../../domain/Task.model";

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

export const updateTask = createAsyncThunk(
  "tasks/update",
  async ({ id, newTask }: IUpdateTask) => {
    const editor = new TaskEditor();
    await editor.update(id, newTask);

    const searcher = new TaskSearcher();
    const tasks = (await searcher.search()) as {
      [id: string]: Task;
    };

    const oldTask = tasks[id];
    const task = Object.assign({}, oldTask, newTask);

    delete tasks[id];
    tasks[id] = Task.Create(task);

    return tasks;
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async (id: string) => {
    const deletor = new TaskDeletor();
    await deletor.delete(id);
    return id;
  }
);
