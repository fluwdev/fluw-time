import { TIME_UNITS } from './constanst'

/**
 * Parsea una cadena de tiempo a milisegundos
 * @param timeString Cadena en formato [número][unidad] (ej: "1d", "2w")
 * @returns Tiempo en milisegundos
 * @example
 * parseTimeString("1h") // 3600000
 * parseTimeString("2d") // 172800000
 */
export function parseTimeString(timeString: string): number {
  const match = timeString.match(/^(\d+)([a-zA-Z]+)$/)
  if (!match) throw new Error(`Format is invalid: ${timeString}`)

  const value = parseInt(match[1])
  const unit = match[2].toLowerCase() as TimeUnit

  return value * (TIME_UNITS[unit] || 0)
}
