/**
 * Compara si una fecha es anterior a otra
 * @param date Fecha a comparar
 * @param compareDate Fecha de comparación
 * @example isBefore(new Date(), '2024-01-01') // false
 */
export function isBefore(date: DateInput, compareDate: DateInput): boolean {
  return new Date(date).getTime() < new Date(compareDate).getTime()
}
