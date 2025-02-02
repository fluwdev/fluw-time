import { parseTimeString } from './parser-time-string'

/**
 * Resta tiempo a una fecha usando cadenas
 * @param date Fecha base
 * @param timeString Cadena de tiempo a restar
 * @example subtractTime(new Date(), '2d') // Resta 2 días
 */
export function subtractTime(date: DateInput, timeString: string): Date {
  const ms = parseTimeString(timeString)
  return new Date(new Date(date).getTime() - ms)
}
