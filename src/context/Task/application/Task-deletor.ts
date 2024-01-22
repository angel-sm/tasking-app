import { IDeleteTask } from "../domain/Task.repository";
import { LocalRepository } from "../infrastructure/local/local.repository";

export class TaskDeletor implements IDeleteTask {
  private repository: LocalRepository;

  constructor() {
    this.repository = new LocalRepository();
  }

  async delete(id: string): Promise<void> {
    this.repository.delete(id);
  }
}
