import { Task } from "../../domain/Task.model";
import { ITaskRepository } from "../../domain/Task.repository";
import { faker } from "@faker-js/faker";

export class LocalRepository implements ITaskRepository {
  mucks: Array<Task> = [];

  constructor() {
    if (this.mucks.length === 0) {
      const generateMock = () => {
        let duration = Math.floor(Math.random() * 5400); // Random duration between 0 and 3600 seconds
        const leftTimePercent = Math.floor(
          duration - Math.floor(Math.random() * 1000)
        );

        if (duration > 7200) {
          duration = 7200;
        }

        return Task.Create({
          name: faker.lorem.words(6),
          description: faker.lorem.words(20),
          duration,
          timeLeft: leftTimePercent,
          status: Math.random() < 0.3 ? "DONE" : "TODO",
          isStopped: false,
        });
      };

      for (let i = 0; i < 50; i++) {
        this.mucks.push(generateMock());
      }
    }
  }

  async search(): Promise<Task[] | []> {
    return this.mucks;
  }
  async find(id: string): Promise<Task | undefined> {
    console.log(this.mucks);
    const idx = this.mucks.findIndex((task) => task.id === id);
    return this.mucks[idx];
  }
  async create(data: Task): Promise<void> {
    this.mucks.push(data);
    return;
  }
  async update(id: string, newData: Task): Promise<void> {
    const idx = this.mucks.findIndex((task) => task.id === id);
    this.mucks.splice(idx, 1);
    this.mucks.push(newData);
  }
  async delete(id: string): Promise<void> {
    const idx = this.mucks.findIndex((task) => task.id === id);
    this.mucks.splice(idx, 1);
  }
}
