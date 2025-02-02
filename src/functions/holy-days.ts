type CountryCode = 'MX' | 'US' | 'ES' | 'FR' | 'DE' | 'UK' | 'AR' | 'CO' | 'BR'

/**
 *
 * @param date
 * @param country
 * @example holidays(new Date(), 'MX') // true
 */
export function holidays(date: DateInput, country?: CountryCode): boolean {
  const d = new Date(date)
  const year = d.getFullYear()

  // Festivos internacionales comunes
  const internationalHolidays = [
    `${year}-01-01`, // Año Nuevo
    `${year}-05-01`, // Día del Trabajo
    `${year}-12-25`, // Navidad
    getEasterDate(year), // Domingo de Pascua
    getGoodFridayDate(year), // Viernes Santo
    getEasterMondayDate(year), // Lunes de Pascua (algunos países)
  ]

  // Festivos específicos por país
  const countrySpecific = country ? getCountryHolidays(year, country) : []

  // Combinar y verificar
  const allHolidays = [...internationalHolidays, ...countrySpecific]

  return allHolidays.some((holiday) => {
    const holidayDate = new Date(holiday)
    return isSameDate(d, holidayDate)
  })
}

// Funciones auxiliares
function getCountryHolidays(year: number, country: CountryCode): string[] {
  const holidays: Record<CountryCode, string[]> = {
    MX: [
      // México
      `${year}-09-16`, // Día de la Independencia
      `${year}-11-02`, // Día de Muertos
      `${year}-02-05`, // Día de la Constitución
      getNthWeekdayOfMonth(year, 2, 1, 1), // Primer lunes de febrero (Día de la Constitución móvil)
    ],
    US: [
      // Estados Unidos
      `${year}-07-04`, // Día de la Independencia
      getNthWeekdayOfMonth(year, 11, 4, 4), // Cuarto jueves de noviembre (Thanksgiving)
      `${year}-01-20`, // Inauguration Day (cada 4 años)
      getNthWeekdayOfMonth(year, 1, 1, 3), // Tercer lunes de enero (Martin Luther King Jr. Day)
    ],
    ES: [
      // España
      `${year}-10-12`, // Día de la Hispanidad
      `${year}-08-15`, // Asunción de María
      getNthWeekdayOfMonth(year, 12, 1, 6), // Día de la Constitución (6 de diciembre)
    ],
    FR: [
      // Francia
      `${year}-07-14`, // Día de la Bastilla
      `${year}-11-11`, // Armisticio
      `${year}-05-08`, // Victoria 1945
    ],
    DE: [
      // Alemania
      `${year}-10-03`, // Día de la Unificación Alemana
      `${year}-11-01`, // Todos los Santos (algunos estados)
      getNthWeekdayOfMonth(year, 11, 3, 3), // Día del Duelo (tercer domingo de noviembre)
    ],
    UK: [
      // Reino Unido
      getNthWeekdayOfMonth(year, 8, 1, 1), // Bank Holiday de agosto
      getNthWeekdayOfMonth(year, 5, 1, -1), // Último lunes de mayo
    ],
    AR: [
      // Argentina
      `${year}-05-25`, // Día de la Revolución de Mayo
      `${year}-07-09`, // Día de la Independencia
      getNthWeekdayOfMonth(year, 3, 1, 3), // Malvinas (2 de abril)
    ],
    CO: [
      // Colombia
      `${year}-07-20`, // Día de la Independencia
      `${year}-08-07`, // Batalla de Boyacá
      getNthWeekdayOfMonth(year, 6, 1, 3), // Sagrado Corazón (lunes siguiente al 3er domingo de junio)
    ],
    BR: [
      // Brasil
      `${year}-09-07`, // Día de la Independencia
      `${year}-10-12`, // Día de Nuestra Señora Aparecida
      getNthWeekdayOfMonth(year, 2, 5, 1), // Carnaval (fecha móvil)
    ],
  }

  return holidays[country] || []
}

// Calcula fecha de Pascua (algoritmo de Butcher)
function getEasterDate(year: number): string {
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31)
  const day = ((h + l - 7 * m + 114) % 31) + 1

  return formatDateParts(year, month, day)
}

function getGoodFridayDate(year: number): string {
  const easter = new Date(getEasterDate(year))
  easter.setDate(easter.getDate() - 2)
  return formatDateParts(
    easter.getFullYear(),
    easter.getMonth() + 1,
    easter.getDate()
  )
}

function getEasterMondayDate(year: number): string {
  const easter = new Date(getEasterDate(year))
  easter.setDate(easter.getDate() + 1)
  return formatDateParts(
    easter.getFullYear(),
    easter.getMonth() + 1,
    easter.getDate()
  )
}

function getNthWeekdayOfMonth(
  year: number,
  month: number,
  weekday: number, // 0 (Domingo) - 6 (Sábado)
  n: number // 1-4 (positive) o -1 (último)
): string {
  const date = new Date(year, month - 1, 1)
  let count = 0

  while (date.getMonth() === month - 1) {
    if (date.getDay() === weekday) {
      count++
      if (
        (n > 0 && count === n) ||
        (n === -1 && date.getDate() + 7 > monthDays(month, year))
      ) {
        return formatDateParts(year, month, date.getDate())
      }
    }
    date.setDate(date.getDate() + 1)
  }

  return ''
}

function monthDays(month: number, year: number): number {
  return new Date(year, month, 0).getDate()
}

function formatDateParts(year: number, month: number, day: number): string {
  return `${year}-${month.toString().padStart(2, '0')}-${day
    .toString()
    .padStart(2, '0')}`
}

function isSameDate(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}
