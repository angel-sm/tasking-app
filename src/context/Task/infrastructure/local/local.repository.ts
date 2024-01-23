/* eslint-disable @typescript-eslint/no-unused-vars */
import { Task } from "../../domain/Task.model";
import { ITaskRepository } from "../../domain/Task.repository";

export class LocalRepository implements ITaskRepository {
  search(): Promise<Task[]> {
    throw new Error("Method not implemented.");
  }
  async find(_id: string): Promise<Task | undefined> {
    throw new Error("Method not implemented.");
  }
  async create(_data: Task): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async update(_id: string, _newData: Task): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(_id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
