import { TimeUnit } from '../types'
import { conversionFactors } from './conversion-factors'

export function convertToNanoseconds(amount: number, unit: TimeUnit): number {
  return amount * conversionFactors[unit]
}
