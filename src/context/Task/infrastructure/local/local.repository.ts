import { Task } from "../../domain/Task.model";
import { ITaskRepository } from "../../domain/Task.repository";

export class LocalRepository implements ITaskRepository {
  async search(): Promise<Task[] | []> {
    throw new Error("Method not implemented.");
  }
  async find(): Promise<Task | undefined> {
    throw new Error("Method not implemented.");
  }
  async create(data: Task): Promise<void> {
    console.log("🚀 ~ LocalRepository ~ create ~ data:", data);
    throw new Error("Method not implemented.");
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
