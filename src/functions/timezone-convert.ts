/**
 * Convierte entre zonas horarias
 * @param date Fecha original
 * @param targetTimezone Zona horaria objetivo
 * @example timezoneConvert(new Date(), 'America/Mexico_City') // Fecha convertida
 */
export function timezoneConvert(date: DateInput, targetTimezone: string): Date {
  return new Date(
    new Date(date).toLocaleString('en-US', { timeZone: targetTimezone })
  )
}
