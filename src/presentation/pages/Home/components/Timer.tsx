/* eslint-disable prefer-const */
import { Task } from "@/context/Task/domain/Task.model";
import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  initialDuration: number;
  onTimerEnd: (time: number) => void;
  document: Task;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialDuration,
  onTimerEnd,
  document,
}) => {
  const [duration, setDuration] = useState(initialDuration);

  useEffect(() => {
    if (document.status === "PROGRESS" && !document.isStopped) {
      let timerId: NodeJS.Timeout;

      const updateTimer = () => {
        setDuration((prevDuration) => {
          if (prevDuration === 0) {
            clearInterval(timerId);
            onTimerEnd(0);
          }
          return prevDuration - 1;
        });
      };

      timerId = setInterval(updateTimer, 1000);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [onTimerEnd, document.status, document.isStopped, document]);

  useEffect(() => {
    if (document.isStopped) {
      onTimerEnd(duration);
    }
  }, [document.isStopped, duration, onTimerEnd]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingSeconds = seconds % 60;
    const time = `${minutes > 60 ? String(hours).padStart(2, "0") : "00"}:${String(minutes - hours * 60).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    return time;
  };

  return (
    <div>
      <p>{formatTime(duration)}</p>
    </div>
  );
};

export default CountdownTimer;
