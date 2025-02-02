import { isSame } from './is-same'

/**
 * Calcula días hábiles entre dos fechas
 * @param start Fecha inicial
 * @param end Fecha final
 * @param options Opciones de cálculo
 * @example
 * businessDays('2024-01-01', '2024-01-03') // 2
 */
export function businessDays(
  start: DateInput,
  end: DateInput,
  options: BusinessDaysOptions = {}
): number {
  let count = 0
  const current = new Date(start)
  const final = new Date(end)

  while (current <= final) {
    if (current.getDay() !== 0 && current.getDay() !== 6) {
      if (!options.holidays?.some((h) => isSame(h, current, 'd'))) {
        count++
      }
    }
    current.setDate(current.getDate() + 1)
  }

  return options.inclusive ? count : count - 1
}
