import { parseTimeString } from './parser-time-string'

/**
 * Calcula la diferencia entre dos fechas
 * @param start Fecha inicial
 * @param end Fecha final
 * @param unit Unidad de retorno
 * @returns Diferencia en la unidad especificada
 * @example
 * dateDiff('2024-01-01', '2024-01-03', 'd') // 2
 */
export function dateDiff(
  start: DateInput,
  end: DateInput,
  unit: TimeUnit
): number {
  const diff = new Date(end).getTime() - new Date(start).getTime()
  return Math.floor(diff / parseTimeString(`1${unit}`))
}
