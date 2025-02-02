/**
 * Obtiene el trimestre del año
 * @param date Fecha a calcular
 * @example
 * quarter('2024-01-01') // 1
 */
export function quarter(date: DateInput): number {
  return Math.ceil((new Date(date).getMonth() + 1) / 3)
}
