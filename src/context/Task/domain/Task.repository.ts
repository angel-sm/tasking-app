import { ITask } from "./Task.interface";
import { Task } from "./Task.model";

export interface ISearchTasks {
  search(): Promise<
    | {
        [id: string]: Task;
      }
    | []
  >;
}

export interface IFindTask {
  find(id: string): Promise<Task | undefined>;
}

export interface ICreateTask {
  create(data: ITask): Promise<Task>;
}

export interface IUpdateTask {
  update(id: string, newData: ITask): Promise<void>;
}

export interface IDeleteTask {
  delete(id: string): Promise<void>;
}

export interface ITaskRepository extends IFindTask, IDeleteTask {
  search(): Promise<Task[]>;
  create(data: Task): Promise<void>;
  update(id: string, newData: Task): Promise<void>;
}
