/**
 * Verifica si es año bisiesto
 * @param date Fecha o año a verificar
 * @example isLeapYear(new Date()) // true
 */
export function isLeapYear(date: DateInput | number): boolean {
  const year = typeof date === 'number' ? date : new Date(date).getFullYear()
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
