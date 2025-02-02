import { TimeData } from '../types'
import { adjustPrecision } from './adjust-precision'

/**
 * Compara dos tiempos con precisión configurable
 * @param a Primer tiempo
 * @param b Segundo tiempo
 * @param precision Nivel de precisión para la comparación
 */
export function isSameTime(
  a: TimeData,
  b: TimeData,
  precision: TimeData['precision'] = 3
): boolean {
  const aAdj = adjustPrecision(a, precision)
  const bAdj = adjustPrecision(b, precision)
  return (
    aAdj.timestamp === bAdj.timestamp && aAdj.nanoseconds === bAdj.nanoseconds
  )
}
