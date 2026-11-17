import { neon } from '@neondatabase/serverless'

type Sql = ReturnType<typeof neon>
let client: Sql | null = null

/** Lazily creates the Neon client so builds don't need DATABASE_URL. */
export function sql(): Sql {
  if (!client) {
    const url = process.env.DATABASE_URL
    if (!url) throw new Error('DATABASE_URL is not set')
    client = neon(url)
  }
  return client
}
