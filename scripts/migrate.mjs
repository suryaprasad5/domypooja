// Usage:  npm run db:migrate     (reads DATABASE_URL from .env.local)
import { readFileSync } from 'node:fs'
import { neon } from '@neondatabase/serverless'

const url = process.env.DATABASE_URL
if (!url) {
  console.error('DATABASE_URL is not set. Add it to .env.local first.')
  process.exit(1)
}

const sql = neon(url)
const raw = readFileSync(new URL('../db/schema.sql', import.meta.url), 'utf8')
const statements = raw
  .split('\n')
  .filter((l) => !l.trim().startsWith('--'))
  .join('\n')
  .split(';')
  .map((s) => s.trim())
  .filter(Boolean)

for (const stmt of statements) {
  await sql.query(stmt)
  console.log('OK  ', stmt.split('\n')[0].slice(0, 70))
}
console.log(`\nDone — ${statements.length} statements applied.`)
