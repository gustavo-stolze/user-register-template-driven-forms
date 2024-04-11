export const convertPtBrDateToDateObj = (date: string): Date | null => {
    const [day, month, year] = date.split('/').map(Number);

  if (isValidDate(day, month, year)) {
    return new Date(year, month, day);
  }

  return null;
};
const isValidDate = (day: number, month: number, year: number): boolean => {
  const date = new Date(year, month - 1, day);
  return (
    date.getDate() === day &&
    date.getMonth() === month - 1 &&
    date.getFullYear() === year
  );
};
