/**
 * Parsea una cadena de fecha a objeto Date
 * @param dateString Cadena de fecha en múltiples formatos
 * @returns Objeto Date
 * @example
 * parseDate("2024-03-15") // Date object
 * parseDate("15/03/2024") // Date object
 */
export function parseDate(dateString: string): Date {
  const formats = [
    // ISO 8601
    /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?)?$/,
    // DD/MM/YYYY
    /^\d{2}\/\d{2}\/\d{4}$/,
    // MM/DD/YYYY
    /^\d{2}\/\d{2}\/\d{4}$/,
  ]

  for (const fmt of formats) {
    if (fmt.test(dateString)) {
      const parsed = new Date(dateString)
      if (!isNaN(parsed.getTime())) return parsed
    }
  }

  throw new Error(`Formato no reconocido: ${dateString}`)
}
