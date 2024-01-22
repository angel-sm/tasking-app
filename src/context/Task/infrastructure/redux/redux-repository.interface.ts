import { Task } from "../../domain/Task.model";

export interface ITasksInitialState {
  tasks: Array<Task>;
  task: Task | null;
}
