import { IUUID } from "../../shared/domain/uuid";

export interface ITask extends IUUID {
  name: string;
  description?: string;
  slug?: string;
  startDate?: Date;
  finalizeDate?: Date;
  timelapStopped?: Date;
  duration: number;
}
