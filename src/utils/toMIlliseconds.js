export const toMilliseconds = (datetimeString) => {
  const date = new Date(datetimeString);
  return date.getTime();
};
