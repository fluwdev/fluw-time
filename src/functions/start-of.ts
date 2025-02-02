/**
 * Obtiene el inicio de la unidad temporal
 * @param date Fecha base
 * @param unit Unidad temporal
 * @example startOf(new Date(), 'M') // Primer día del mes
 */
export function startOf(date: DateInput, unit: TimeUnit): Date {
  const d = new Date(date)
  switch (unit) {
    case 'y':
      return new Date(d.getFullYear(), 0, 1)
    case 'M':
      return new Date(d.getFullYear(), d.getMonth(), 1)
    case 'd':
      return new Date(d.setHours(0, 0, 0, 0))
    case 'h':
      return new Date(d.setMinutes(0, 0, 0))
    case 'm':
      return new Date(d.setSeconds(0, 0))
    case 's':
      return new Date(d.setMilliseconds(0))
    default:
      return d
  }
}
