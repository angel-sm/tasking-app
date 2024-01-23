import RowActions from "./RowActions";
import RowStatus from "./RowStatus";
import { secondsToHoursMinutes } from "@/presentation/utils/dates";
import { Task } from "@/context/Task/domain/Task.model";
import PauseButton from "./PauseButton";
import RestartButton from "./RestartButton";
import CountdownTimer from "./Timer";
import { useState } from "react";

interface TaskRowProps {
  document: Task;
}

const TaskRow = ({ document }: TaskRowProps) => {
  const [timeLeft, setTimeLeft] = useState(
    document.timeLeft ? document.timeLeft : document.duration
  );

  return (
    <tr>
      <td className="px-4 py-2 font-medium text-gray-900">{document.name}</td>
      <td className="px-4 py-2 text-gray-700">
        {String(document.description)}
      </td>
      <td className="px-4 py-2 text-gray-700">
        {secondsToHoursMinutes(document.duration)}
      </td>
      <td>
        <CountdownTimer
          initialDuration={timeLeft}
          onTimerEnd={(time) => {
            setTimeLeft(time);
          }}
          document={document}
        />
      </td>
      <td className="px-4 py-2">
        <div className="flex gap-1">
          <RowStatus document={document} />
          {document.status === "PROGRESS" && (
            <>
              {document.isStopped ? (
                <RestartButton document={document} />
              ) : (
                <PauseButton document={document} timeLeft={timeLeft} />
              )}
            </>
          )}
          <RowActions document={document} />
        </div>
      </td>
    </tr>
  );
};

export default TaskRow;
