import { TimeData, TimeUnit } from '../types'
import { conversionFactors } from './conversion-factors'
import { toTotalNanoseconds } from './to-total-nanoseconds'

/**
 * Calcula la diferencia entre dos TimeData
 * @param start Tiempo inicial
 * @param end Tiempo final
 * @param unit Unidad para el resultado
 */
export function diffTime(
  start: TimeData,
  end: TimeData,
  unit: TimeUnit = 'milliseconds'
): number {
  const startNs = toTotalNanoseconds(start)
  const endNs = toTotalNanoseconds(end)
  return Number(endNs - startNs) / conversionFactors[unit]
}
