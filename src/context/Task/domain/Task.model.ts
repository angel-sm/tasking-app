import { add } from "date-fns";
import { ITask } from "./Task.interface";
import { UUID } from "../../shared/domain/uuid";

export class Task {
  id?: string;
  name: string;
  description?: string;
  startDate?: number;
  finalizeDate?: number;
  timeLeft?: number;
  duration: number;
  status: "PROGRESS" | "TODO" | "DONE";
  isStopped: boolean;
  createdAt: number;
  updatedAt: number;

  constructor({
    id,
    name,
    description,
    startDate,
    finalizeDate,
    timeLeft,
    duration,
    isStopped,
    status,
  }: ITask) {
    this.id = id ?? UUID.Generator().id;
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.finalizeDate = finalizeDate;
    this.timeLeft = timeLeft;
    this.duration = duration; // manage in seconds
    this.status = status ?? "TODO";
    this.isStopped = isStopped ?? false;
    this.createdAt = new Date().getTime();
    this.updatedAt = new Date().getTime();
  }

  static Create(data: ITask) {
    return new Task(data);
  }

  getPrimitives() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      startDate: this.startDate,
      finalizeDate: this.finalizeDate,
      timeLeft: this.timeLeft,
      duration: this.duration,
      status: this.status,
      isStopped: this.isStopped,
    };
  }

  public start() {
    this.startDate = new Date().getTime();
    this.finalizeDate = add(new Date(this.startDate), {
      minutes: this.duration,
    }).getTime();
    this.status = "PROGRESS";
  }

  public pause(timeLeft: number) {
    this.timeLeft = timeLeft;
    this.isStopped = true;
  }

  public restart() {
    this.isStopped = false;
    return this.timeLeft;
  }

  public finalize() {
    this.status = "DONE";
  }
}
