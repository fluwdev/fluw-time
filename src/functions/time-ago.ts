import { TIME_UNITS } from './constanst'

/**
 * Formatea la diferencia de tiempo en formato "hace X"
 * @param date Fecha a comparar
 * @param baseDate Fecha base (default: ahora)
 */
export function timeAgo(
  date: DateInput,
  baseDate: DateInput = new Date()
): string {
  const formatter = new Intl.RelativeTimeFormat('es', { style: 'long' })
  const diff = new Date(baseDate).getTime() - new Date(date).getTime()

  type RelativeTimeFormatUnit =
    | 'year'
    | 'month'
    | 'week'
    | 'day'
    | 'hour'
    | 'minute'
    | 'second'

  const units: { unit: RelativeTimeFormatUnit; ms: number }[] = [
    { unit: 'year', ms: TIME_UNITS.y },
    { unit: 'month', ms: TIME_UNITS.M },
    { unit: 'week', ms: TIME_UNITS.w },
    { unit: 'day', ms: TIME_UNITS.d },
    { unit: 'hour', ms: TIME_UNITS.h },
    { unit: 'minute', ms: TIME_UNITS.m },
    { unit: 'second', ms: TIME_UNITS.s },
  ]

  for (const { unit, ms } of units) {
    if (Math.abs(diff) >= ms) {
      return formatter.format(-Math.round(diff / ms), unit)
    }
  }

  return formatter.format(-Math.round(diff / TIME_UNITS.s), 'second')
}
