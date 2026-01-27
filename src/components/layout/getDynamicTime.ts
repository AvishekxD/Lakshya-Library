export function getDynamicTime(
  capturedAt: string,
  originalTime: string,
  now: number
) {
  const capturedDate = new Date(capturedAt).getTime()
  const msSinceCapture = now - capturedDate

  const cleanTime = originalTime
    .toLowerCase()
    .replace("edited ", "")
    .replace(" ago", "")
    .replace(/^an?\s+/, "1 ")

  const match = cleanTime.match(/(\d+)\s+(minute|hour|day|week|month|year)/)
  if (!match) return originalTime

  const value = Number(match[1])
  const unit = match[2]

  const multipliers: Record<string, number> = {
    minute: 60_000,
    hour: 3_600_000,
    day: 86_400_000,
    week: 604_800_000,
    month: 2_592_000_000,
    year: 31_536_000_000,
  }

  const totalAgeMs = value * multipliers[unit] + msSinceCapture
  const days = Math.floor(totalAgeMs / multipliers.day)

  if (days < 1) return "Today"
  if (days < 7) return `${days} days ago`
  if (days < 14) return `${Math.floor(days / 7)} week ago`
  if (days < 30) return `${Math.floor(days / 7)} week ago`
  if (days < 60) return `${Math.floor(days / 30)} month ago`
  if (days < 365) return `${Math.floor(days / 30)} months ago`

  const years = Math.floor(days / 365)
  return years === 1 ? "a year ago" : `${years} years ago`
}
