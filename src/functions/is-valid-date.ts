/**
 * Valida si una fecha es válida
 * @param input Entrada de fecha
 * @returns true si es válida
 * @example
 * isValidDate("2024-02-30") // false
 */
export function isValidDate(input: DateInput): boolean {
  return !isNaN(new Date(input).getTime())
}
