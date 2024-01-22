import { ITask } from "../domain/Task.interface";
import { Task } from "../domain/Task.model";
import { ICreateTask } from "../domain/Task.repository";
import { LocalRepository } from "../infrastructure/local/local.repository";

export class TaskCreator implements ICreateTask {
  private repository: LocalRepository;

  constructor() {
    this.repository = new LocalRepository();
  }

  async create(data: ITask): Promise<Task> {
    const newTask = Task.Create(data);
    this.repository.create(newTask);
    return newTask;
  }
}
