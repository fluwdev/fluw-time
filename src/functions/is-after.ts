/**
 * Compara si una fecha es posterior a otra
 * @param date Fecha a comparar
 * @param compareDate Fecha de comparación
 */
export function isAfter(date: DateInput, compareDate: DateInput): boolean {
  return new Date(date).getTime() > new Date(compareDate).getTime()
}
