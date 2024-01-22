import { IUUID } from "../../shared/domain/uuid";

export interface ITask extends IUUID {
  name: string;
  description?: string;
  startDate?: number;
  finalizeDate?: number;
  timeLeft?: number;
  duration: number;
  status?: "PROGRESS" | "TODO" | "DONE";
  isStopped: boolean;
}
