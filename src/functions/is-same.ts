import { startOf } from './start-of'

/**
 * Compara si dos fechas son iguales en una unidad específica
 * @param date1 Primera fecha
 * @param date2 Segunda fecha
 * @param unit Unidad de comparación
 */
export function isSame(
  date1: DateInput,
  date2: DateInput,
  unit: TimeUnit
): boolean {
  const d1 = startOf(date1, unit)
  const d2 = startOf(date2, unit)
  return d1.getTime() === d2.getTime()
}
