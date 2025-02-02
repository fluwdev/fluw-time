import { TimeData } from '../types'

/**
 * Ajusta la precisión de un TimeData
 * @param time Tiempo original
 * @param precision Nueva precisión
 * @param method Método de ajuste (trunc | round)
 */
export function adjustPrecision(
  time: TimeData,
  precision: TimeData['precision'],
  method: 'trunc' | 'round' = 'trunc'
): TimeData {
  const divisor = 10 ** (9 - precision)
  const adjustedNs =
    method === 'round'
      ? Math.round(time.nanoseconds / divisor) * divisor
      : Math.floor(time.nanoseconds / divisor) * divisor

  return {
    timestamp: time.timestamp,
    nanoseconds: adjustedNs,
    precision,
  }
}
