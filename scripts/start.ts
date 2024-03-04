import app from '../src/index.js'

const PORT = Number(process.env.PORT ?? '3000')

app.listen(PORT, c => {
  console.info('Server started at %s', c.url)
})
