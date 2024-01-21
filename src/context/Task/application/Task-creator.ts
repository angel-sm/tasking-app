import { ITask } from "../domain/Task.interface";
import { Task } from "../domain/Task.model";
import { ICreateTask } from "../domain/Task.repository";
import { LocalRepository } from "../infrastructure/local/local.repository";

export class TaskCreator implements ICreateTask {
  private repository: LocalRepository;

  constructor() {
    this.repository = new LocalRepository();
  }

  async create(data: ITask): Promise<void> {
    const newTask = Task.Create(data);
    console.log(newTask);
    newTask.start(data.duration);

    this.repository.create(newTask);
  }
}
