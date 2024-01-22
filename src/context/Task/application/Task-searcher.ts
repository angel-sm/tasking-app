import { Task } from "../domain/Task.model";
import { ISearchTasks } from "../domain/Task.repository";
import { LocalRepository } from "../infrastructure/local/local.repository";

export class TaskSearcher implements ISearchTasks {
  private repository: LocalRepository;

  constructor() {
    this.repository = new LocalRepository();
  }

  async search(): Promise<Task[] | []> {
    return await this.repository.search();
  }
}
