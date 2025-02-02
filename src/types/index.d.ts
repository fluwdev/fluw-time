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
