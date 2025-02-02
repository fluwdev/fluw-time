type PrecisionLevel = 0 | 3 | 6 | 9 // Precisión para mili, micro y nanosegundos

export type TimeUnit =
  | 'years'
  | 'months'
  | 'days'
  | 'hours'
  | 'minutes'
  | 'seconds'
  | 'milliseconds'
  | 'microseconds'
  | 'nanoseconds'

export type TimeData = {
  timestamp: number // Tiempo en milisegundos
  nanoseconds: number // Fracción nanosegundos (0-999999)
  precision: PrecisionLevel
}

type FormatStyle = 'long' | 'short'

export type FormatTimeOptions = {
  /** Tipo de formato predefinido */
  style?: FormatStyle
  /**
   * Patrón de formato a usar, en caso de definirse se utiliza en lugar del estilo predefinido.
   * Ejemplo: 'YYYY-MM-DD HH:mm:ss.SSSSSS'
   */
  pattern?: string
}
