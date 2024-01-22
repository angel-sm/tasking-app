export function secondsToHoursMinutes(seconds: number): string {
  if (seconds < 0) {
    return "Invalid input";
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const hoursText = hours > 0 ? `${hours}h` : "";
  const minutesText = minutes > 0 ? `${minutes}m` : "";

  const result = `${hoursText} ${minutesText}`.trim();

  return result || "0m";
}

export function parseTimeToMinutes(timeString: string): number {
  const regex = /^(\d+)h?\s*(\d+)?m?$/;
  const match = timeString.match(regex);

  if (!match) {
    throw new Error('Invalid time format. Use format like "Xh Ym".');
  }

  const hours = parseInt(match[1], 10) || 0;
  const minutes = parseInt(match[2], 10) || 0;

  return (hours * 60 + minutes) * 60;
}

export function getTimeProgress() {}
