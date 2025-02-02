import { TimeData, TimeUnit } from '../types'
import { addTime } from './add-time'

/**
 * Resta tiempo a un TimeData existente
 * @param time Objeto TimeData original
 * @param amount Cantidad a restar
 * @param unit Unidad de tiempo
 */
export function subtractTime(
  time: TimeData,
  amount: number,
  unit: TimeUnit
): TimeData {
  return addTime(time, -amount, unit)
}
