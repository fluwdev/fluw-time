import { parseTimeString } from './parser-time-string'

/**
 * Realiza operaciones matemáticas con fechas
 * @param expression Expresión temporal (ej: "now+2d-1w")
 * @example
 * dateMath("now+2d-1w") // Date object
 */
export function dateMath(expression: string): Date {
  const now = Date.now()
  const operators = expression.split(/([+-])/).filter(Boolean)
  let result = now

  for (let i = 0; i < operators.length; i += 2) {
    const op = operators[i]
    const val = operators[i + 1]

    if (i === 0 && !['+', '-'].includes(op)) {
      result = parseTimeString(op + val)
      continue
    }

    const amount = parseTimeString(val)
    result += op === '+' ? amount : -amount
  }

  return new Date(result)
}
