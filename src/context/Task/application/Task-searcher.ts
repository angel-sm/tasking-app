import { Task } from "../domain/Task.model";
import { ISearchTasks } from "../domain/Task.repository";
import { HttpRepository } from "../infrastructure/http/http.repository";

export class TaskSearcher implements ISearchTasks {
  private repository: HttpRepository;

  constructor() {
    this.repository = new HttpRepository();
  }
  async search(): Promise<{ [id: string]: Task } | []> {
    const tasks = (await this.repository.search()).sort((a) => {
      return a.status === "PROGRESS" ? -1 : 1;
    });
    return tasks.reduce(
      (a, v) => ({ ...a, [v.id as string]: Task.Create(v) }),
      {}
    );
  }
}
