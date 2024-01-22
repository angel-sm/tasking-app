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
          id: faker.datatype.uuid(),
          name: faker.lorem.words(6),
          description: faker.lorem.words(20),
          duration,
          timeLeft: leftTimePercent,
          status: "TODO",
          isStopped: false,
        });
      };

      for (let i = 0; i < 5; i++) {
        this.mucks.push(generateMock());
      }
    }
  }

  async search(): Promise<Task[] | []> {
    return this.mucks;
  }
  async find(id: string): Promise<Task | undefined> {
    console.log(id);
    throw new Error("Method not implemented.");
  }
  async create(data: Task): Promise<void> {
    this.mucks.push(data);
    return;
  }
  async update(id: string, newData: Task): Promise<void> {
    const idx = this.mucks.findIndex((task) => task.id === id);
    this.mucks.splice(idx, 1);

    this.mucks.push(newData);

    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<void> {
    console.log(id);
    throw new Error("Method not implemented.");
  }
}
