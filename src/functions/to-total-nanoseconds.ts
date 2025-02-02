import { TimeData } from '../types'

export function toTotalNanoseconds(time: TimeData): bigint {
  return BigInt(time.timestamp) * BigInt(1e6) + BigInt(time.nanoseconds)
}
