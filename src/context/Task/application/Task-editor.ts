import { ITask } from "../domain/Task.interface";
import { IUpdateTask } from "../domain/Task.repository";
import { HttpRepository } from "../infrastructure/http/http.repository";

export class TaskEditor implements IUpdateTask {
  private repository: HttpRepository;

  constructor() {
    this.repository = new HttpRepository();
  }
  async update(id: string, newData: ITask): Promise<void> {
    await this.repository.update(id, newData);
  }
}
