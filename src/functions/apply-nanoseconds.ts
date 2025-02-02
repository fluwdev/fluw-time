import { PrecisionLevel, TimeData } from '../types'
import { toTotalNanoseconds } from './to-total-nanoseconds'

export function applyNanoseconds(time: TimeData, nsDelta: number): TimeData {
  const totalNs = toTotalNanoseconds(time) + BigInt(nsDelta)
  const newTimestamp = Number(totalNs / BigInt(1e6))
  const newNanoseconds = Number(totalNs % BigInt(1e6))

  return {
    timestamp: newTimestamp,
    nanoseconds: newNanoseconds,
    precision: Math.max(time.precision, 9) as PrecisionLevel,
  }
}
