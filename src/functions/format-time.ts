import { FormatTimeOptions, TimeData } from '../types'

/**
 * Formatea un TimeData según el patrón especificado o un estilo predefinido.
 * @param time Objeto TimeData a formatear
 * @param pattern Patrón de formato (se ignora si se pasa un `pattern` en las opciones)
 * @param options Opciones para formatear: se puede indicar un estilo predefinido o un patrón.
 */
export function formatTime(
  time: TimeData,
  pattern: string = '',
  options?: FormatTimeOptions
): string {
  // Si en las opciones se especifica un patrón, se utiliza en lugar del parámetro.
  if (options?.pattern) {
    pattern = options.pattern
  } else if (!pattern) {
    // Si no se proporciona patrón, se elige uno por defecto según el estilo.
    pattern =
      options?.style === 'short' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm:ss.SSSSSS' // estilo "long" por defecto
  }

  const date = new Date(time.timestamp)
  const pad = (n: number, len: number = 2): string =>
    n.toString().padStart(len, '0')

  // Precalcular los valores de cada token.
  const tokens: Record<string, string> = {
    YYYY: pad(date.getFullYear(), 4),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds()),
    // Se usa Math.floor para asegurarse de obtener un entero.
    SSS: pad(Math.floor(time.nanoseconds / 1e6), 3),
    SSSSSS: pad(Math.floor(time.nanoseconds / 1e3), 6),
    SSSSSSSSS: pad(time.nanoseconds, 9),
    ns: time.nanoseconds.toString(),
  }

  // Para evitar conflictos (por ejemplo, que "SSSSSS" se reemplace parcialmente por "SSS"),
  // se ordenan los tokens por longitud descendente.
  const tokenKeys = Object.keys(tokens).sort((a, b) => b.length - a.length)
  // Crear una expresión regular que busque cualquiera de los tokens.
  const tokenRegex = new RegExp(tokenKeys.join('|'), 'g')

  // Reemplazar todos los tokens encontrados en el patrón.
  return pattern.replace(tokenRegex, (token) => tokens[token])
}
