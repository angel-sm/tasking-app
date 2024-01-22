import { Task } from "../../domain/Task.model";
import { ITaskRepository } from "../../domain/Task.repository";

export class LocalRepository implements ITaskRepository {
  async search(): Promise<Task[] | []> {
    throw new Error("Method not implemented.");
  }
  async find(id: string): Promise<Task | undefined> {
    console.log("🚀 ~ LocalRepository ~ find ~ id:", id);
    throw new Error("Method not implemented.");
  }
  async create(data: Task): Promise<void> {
    console.log("🚀 Task stored!!! ", data);
    return;
  }
  async update(id: string, newData: Task): Promise<void> {
    console.log("🚀 ~ LocalRepository ~ update ~ newData:", newData);
    console.log("🚀 ~ LocalRepository ~ update ~ id:", id);
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<void> {
    console.log("🚀 ~ LocalRepository ~ delete ~ id:", id);
    throw new Error("Method not implemented.");
  }
}
