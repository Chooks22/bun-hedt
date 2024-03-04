import { Database } from 'bun:sqlite'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import * as schema from './schema.js'

const sqlite = new Database('drizzle/app.db')
sqlite.exec('PRAGMA journal_mode = WAL;')

export const db = drizzle(sqlite, { schema })
