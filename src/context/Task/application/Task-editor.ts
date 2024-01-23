import { ITask } from "../domain/Task.interface";
import { Task } from "../domain/Task.model";
import { IUpdateTask } from "../domain/Task.repository";
import { LocalRepository } from "../infrastructure/local/local.repository";

export class TaskEditor implements IUpdateTask {
  private repository: LocalRepository;

  constructor() {
    this.repository = new LocalRepository();
  }
  async update(id: string, newData: ITask): Promise<void> {
    const oldTask = await this.repository.find(id);
    const taskUpdated = Task.Create(
      Object.assign(
        {},
        oldTask?.getPrimitives() as ITask,
        newData as ITask
      ) as unknown as ITask
    );
    await this.repository.update(id, taskUpdated);
  }
}
