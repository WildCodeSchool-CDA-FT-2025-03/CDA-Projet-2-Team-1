export function dateToTime(date: Date): string {
  return `${date.getHours()}:${date.getMinutes()}`;
}

export function dateToDay(date: Date): Date {
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
