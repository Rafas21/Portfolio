/** Anos completos desde 'AAAA-MM' até hoje. Mantém o indicador de experiência sempre atualizado. */
export function fullYearsSince(start: string, now = new Date()) {
  const [year, month] = start.split('-').map(Number)
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month)
  return Math.floor(months / 12)
}
