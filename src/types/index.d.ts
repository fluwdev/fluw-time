type TimeUnit = 'ms' | 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y'
type FormatStyle = 'short' | 'long' | 'full' | 'medium'
type DateInput = Date | string | number
type BusinessDaysOptions = {
  holidays?: Date[]
  inclusive?: boolean
}
