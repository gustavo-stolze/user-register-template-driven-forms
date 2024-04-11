export const convertDateObjToPtBrDate = (date: Date): string => {
  const day = pazZero(date.getDate());
  const month = pazZero(date.getMonth() + 1);
  const year = pazZero(date.getFullYear());

  return `${day}/${month}/${year}`;
};
const pazZero = (value: number): string => {
  if (value > 9) return value.toString();
  return `0${value}`;
};
