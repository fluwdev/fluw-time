import { TimeData } from '../types'

/**
 * Formatea un TimeData según el patrón especificado
 * @param time Objeto TimeData a formatear
 * @param pattern Patrón de formato (ej: 'YYYY-MM-DD HH:mm:ss.SSSSSS')
 */
export function formatTime(time: TimeData, pattern: string): string {
  const date = new Date(time.timestamp)
  const pad = (n: number, len = 2) => n.toString().padStart(len, '0')

  const replacements: Record<string, string> = {
    YYYY: pad(date.getFullYear(), 4),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds()),
    SSS: pad(time.nanoseconds / 1e6, 3),
    SSSSSS: pad(time.nanoseconds / 1e3, 6),
    SSSSSSSSS: pad(time.nanoseconds, 9),
    ns: time.nanoseconds.toString(),
  }

  return Object.entries(replacements).reduce(
    (str, [token, value]) => str.replace(token, value),
    pattern
  )
}
