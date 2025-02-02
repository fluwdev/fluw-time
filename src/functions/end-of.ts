/**
 * Obtiene el final de la unidad temporal
 * @param date Fecha base
 * @param unit Unidad temporal
 * @example endOf(new Date(), 'M') // Último día del mes
 */
export function endOf(date: DateInput, unit: TimeUnit): Date {
  const d = new Date(date)
  switch (unit) {
    case 'y':
      return new Date(d.getFullYear() + 1, 0, 0)
    case 'M':
      return new Date(d.getFullYear(), d.getMonth() + 1, 0)
    case 'd':
      return new Date(d.setHours(23, 59, 59, 999))
    case 'h':
      return new Date(d.setMinutes(59, 59, 999))
    case 'm':
      return new Date(d.setSeconds(59, 999))
    case 's':
      return new Date(d.setMilliseconds(999))
    default:
      return d
  }
}
