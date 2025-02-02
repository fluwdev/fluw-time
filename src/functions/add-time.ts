import { TimeData, TimeUnit } from '../types'
import { convertToNanoseconds } from './convert-to-nanoseconds'
import { applyNanoseconds } from './apply-nanoseconds'

/**
 * Añade tiempo a un TimeData existente
 * @param time Objeto TimeData original
 * @param amount Cantidad a añadir
 * @param unit Unidad de tiempo (hasta nanosegundos)
 */
export function addTime(
  time: TimeData,
  amount: number,
  unit: TimeUnit
): TimeData {
  const ns = convertToNanoseconds(amount, unit)
  return applyNanoseconds(time, ns)
}
