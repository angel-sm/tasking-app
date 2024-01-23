import { ITask } from "../../domain/Task.interface";
import { Task } from "../../domain/Task.model";
import { ITaskRepository } from "../../domain/Task.repository";
import axios from "axios";

export class HttpRepository implements ITaskRepository {
  async search(): Promise<Task[] | []> {
    const { data } = await axios.get("https://tasking-app-api.fly.dev/tasks", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const tasks = data.tasks as Array<ITask>;
    return tasks.map((task) => Task.Create(task));
  }
  async find(id: string): Promise<Task | undefined> {
    const { data } = await axios.get(
      `https://tasking-app-api.fly.dev/tasks/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const task = data.task as ITask;
    return Task.Create(task);
  }
  async create(data: Task): Promise<void> {
    await axios.post(
      "https://tasking-app-api.fly.dev/tasks",
      data.getPrimitives(),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
  async update(id: string, newData: ITask): Promise<void> {
    await axios.put(`https://tasking-app-api.fly.dev/tasks/${id}`, newData, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
  async delete(id: string): Promise<void> {
    await axios.delete(`http://localhost:8080/tasks/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
