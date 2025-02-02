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

export type HumanUnit =
  | 'now'
  | 'seconds'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'year'

interface FluwTimeOptions {
  locale?: string
  strict?: boolean
  realTimeUpdate?: number
}
