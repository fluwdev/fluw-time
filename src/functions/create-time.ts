import { TimeData } from '../types'

/**
 * Crea un objeto TimeData con la hora actual
 * @param precision Nivel de precisión (0: segundos, 3: mili, 6: micro, 9: nano)
 */
export function createTime(precision: TimeData['precision'] = 3): TimeData {
  const now = Date.now()
  return {
    timestamp: now,
    nanoseconds: (performance.now() % 1) * 1e9,
    precision,
  }
}
