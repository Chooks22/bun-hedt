import { $ } from 'bun'
import { migrate } from 'drizzle-orm/bun-sqlite/migrator'
import { db } from '../src/db/index.js'

await $`bun x drizzle-kit generate:sqlite --schema src/db/schema.ts`
migrate(db, { migrationsFolder: 'drizzle' })

console.info('Finished migrating in %d ms 🚀', Bun.nanoseconds() / 1_000_000)
