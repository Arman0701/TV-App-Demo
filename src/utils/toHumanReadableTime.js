export const toHumanReadableTime = (seconds) => {
  if (isNaN(seconds) || seconds < 0) return '0m';
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  let result = '';
  if (hours > 0) {
    result += `${hours}h`;
  }
  if (minutes > 0 || hours === 0) {
    if (result) result += ' ';
    result += `${minutes}m`;
  }
  return result;
};
