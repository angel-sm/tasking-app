import { ITask } from "../domain/Task.interface";
import { Task } from "../domain/Task.model";
import { ICreateTask } from "../domain/Task.repository";
import { HttpRepository } from "../infrastructure/http/http.repository";

export class TaskCreator implements ICreateTask {
  private repository: HttpRepository;

  constructor() {
    this.repository = new HttpRepository();
  }

  async create(data: ITask): Promise<Task> {
    const newTask = Task.Create(data);
    this.repository.create(newTask);
    return newTask;
  }
}
