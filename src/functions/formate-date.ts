/**
 * Formatea una fecha según el estilo especificado
 * @param date Fecha a formatear
 * @param format Objeto con opciones de formato
 * @returns Fecha formateada
 * @example
 * formatDate(new Date(), { dateStyle: 'long', timeStyle: 'short' })
 */
export function formatDate(
  date: DateInput,
  options: {
    dateStyle?: FormatStyle
    timeStyle?: FormatStyle
    customFormat?: string
  } = {}
): string {
  const d = new Date(date)

  if (options.customFormat) {
    return options.customFormat
      .replace(/yyyy/g, d.getFullYear().toString())
      .replace(/MM/g, (d.getMonth() + 1).toString().padStart(2, '0'))
      .replace(/dd/g, d.getDate().toString().padStart(2, '0'))
      .replace(/HH/g, d.getHours().toString().padStart(2, '0'))
      .replace(/mm/g, d.getMinutes().toString().padStart(2, '0'))
      .replace(/ss/g, d.getSeconds().toString().padStart(2, '0'))
  }

  return d.toLocaleString(undefined, {
    dateStyle: options.dateStyle,
    timeStyle: options.timeStyle,
  })
}
