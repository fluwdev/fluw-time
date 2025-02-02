/**
 * Obtiene el número de semana ISO
 * @param date Fecha a calcular
 * @example weekNumber('2024-01-01') // 1
 */
export function weekNumber(date: DateInput): number {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() + 4 - (d.getDay() || 7))
  return Math.ceil(
    ((d.getTime() - new Date(d.getFullYear(), 0, 1).getTime()) / 86400000 + 1) /
      7
  )
}
