import { parseTimeString } from './parser-time-string'

/**
 * Añade tiempo a una fecha
 * @param date Fecha base
 * @param timeString Cadena de tiempo a añadir
 * @returns Nueva fecha
 * @example
 * addTime(new Date('2024-01-01'), '2d') // 2024-01-03
 */
export function addTime(date: DateInput, timeString: string): Date {
  const ms = parseTimeString(timeString)
  return new Date(new Date(date).getTime() + ms)
}
