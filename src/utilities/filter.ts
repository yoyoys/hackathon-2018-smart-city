export function floor (value: number): string {
  if (value > 0) return `${value} F`
  return `B${-value} F`
}
