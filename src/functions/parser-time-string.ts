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

  const conversions: Record<TimeUnit, number> = {
    ms: 1,
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
    w: 7 * 24 * 60 * 60 * 1000,
    M: 30 * 24 * 60 * 60 * 1000,
    y: 365 * 24 * 60 * 60 * 1000,
  }

  return value * (conversions[unit] || 0)
}
