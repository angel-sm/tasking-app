import { add, differenceInMinutes } from "date-fns";
import { ITask } from "./Task.interface";
import { UUID } from "../../shared/domain/uuid";

export class Task {
  id?: string;
  name: string;
  description?: string;
  slug: string;
  startDate?: Date;
  finalizeDate?: Date;
  timelapStopped?: Date;
  duration: number;
  status: "PROGRESS" | "TODO" | "DONE";

  constructor({
    id,
    name,
    description,
    slug,
    startDate,
    finalizeDate,
    timelapStopped,
    duration,
  }: ITask) {
    this.id = id ?? UUID.Generator().id;
    this.name = name;
    this.description = description;
    this.slug = slug ?? Task.GenerateSlug(name);
    this.startDate = startDate;
    this.finalizeDate = finalizeDate;
    this.timelapStopped = timelapStopped;
    this.duration = duration;
    this.status = "TODO";
  }

  static GenerateSlug(name: string) {
    return name.replace(/\s/g, "-").toLocaleLowerCase();
  }

  static Create(data: ITask) {
    return new Task(data);
  }

  public start(duration: number) {
    this.startDate = new Date();
    this.duration = duration;
    this.finalizeDate = add(this.startDate as Date, {
      minutes: duration,
    });
    this.status = "PROGRESS";
  }

  public pause() {
    this.timelapStopped = new Date();
  }

  public restart() {
    const taskTimes = {
      timelapStopped: this.timelapStopped,
      timeLeft: differenceInMinutes(
        this.timelapStopped as Date,
        this.finalizeDate as Date
      ),
    };

    this.timelapStopped = undefined;
    return taskTimes;
  }

  public finalize() {
    this.status = "DONE";
  }
}
