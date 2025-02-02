import { TimeUnit } from '../types'

export const conversionFactors: Record<TimeUnit, number> = {
  years: 3.154e16,
  months: 2.628e15,
  days: 8.64e13,
  hours: 3.6e12,
  minutes: 6e10,
  seconds: 1e9,
  milliseconds: 1e6,
  microseconds: 1e3,
  nanoseconds: 1,
}
