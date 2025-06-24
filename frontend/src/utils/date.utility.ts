export function dateToTime(date: Date): string {
  return `${date.getHours()}:${date.getMinutes()}`;
}

export function dateToDay(date: Date): Date {
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/**
 * Formate une date en français court (ex: "15/01/2024")
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('fr-FR');
}

/**
 * Formate une heure en français (ex: "14:30")
 */
export function formatTime(date: Date): string {
  return date.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Calcule la durée entre deux dates en minutes
 */
export function calcDurationInMinutes(startDate: Date, endDate: Date): number {
  return Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60));
}
