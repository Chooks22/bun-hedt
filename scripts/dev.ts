import { $ } from 'bun'
import app from '../src/index.js'

const PORT = Number(process.env.PORT ?? '3000')

await $`bun x tailwindcss -i src/styles.css -o public/styles.css`

app.listen(PORT, c => {
  console.info('Server started on %s 🚀', c.url)
})
