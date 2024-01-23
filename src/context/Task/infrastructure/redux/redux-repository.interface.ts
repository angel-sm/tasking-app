import { ITask } from "../../domain/Task.interface";
import { Task } from "../../domain/Task.model";

export interface ITasksInitialState {
  tasks: {
    [id: string]: Task;
  };
  filterTasks: Array<Task>;
  task: Task | null;
}

export interface IUpdateTask {
  id: string;
  newTask: ITask;
}
