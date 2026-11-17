/** Today's date in India as YYYY-MM-DD. */
export function istToday(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date())
}

/** 'YYYY-MM-DD' → 'Sat, 21 Nov 2026' */
export function prettyDate(d: string | null | undefined): string {
  if (!d) return 'Date to be fixed'
  return new Date(`${d}T00:00:00+05:30`).toLocaleDateString('en-IN', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata',
  })
}
