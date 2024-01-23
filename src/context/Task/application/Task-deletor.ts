import { IDeleteTask } from "../domain/Task.repository";
import { HttpRepository } from "../infrastructure/http/http.repository";

export class TaskDeletor implements IDeleteTask {
  private repository: HttpRepository;

  constructor() {
    this.repository = new HttpRepository();
  }

  async delete(id: string): Promise<void> {
    this.repository.delete(id);
  }
}
