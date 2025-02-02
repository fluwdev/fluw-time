import { TimeData } from '../types'

export function parseTime(input: string | number | Date): TimeData {
  if (typeof input === 'number') {
    return {
      timestamp: Math.floor(input / 1e3),
      nanoseconds: (input % 1e3) * 1e6,
      precision: 9,
    }
  }

  if (input instanceof Date) {
    return {
      timestamp: input.getTime(),
      nanoseconds: 0,
      precision: 3,
    }
  }

  // Parsing avanzado para strings (ISO 8601, RFC 2822, formatos personalizados)
  const isoRegex =
    /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})(\.(\d{1,9}))?([Z+-].*)?$/
  const match = input.match(isoRegex)

  if (match) {
    const [, date, time, , fraction = '0', zone] = match
    const baseDate = new Date(`${date}T${time}${zone || 'Z'}`)
    const ns = fraction.padEnd(9, '0').slice(0, 9)

    return {
      timestamp: baseDate.getTime(),
      nanoseconds: parseInt(ns),
      precision: Math.min(9, ns.length) as TimeData['precision'],
    }
  }

  throw new Error(`Format not supported: ${input}`)
}
