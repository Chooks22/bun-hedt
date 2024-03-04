// eslint-disable-next-line spaced-comment
/// <reference types="@kitajs/html/htmx.d.ts" />
import { html } from '@elysiajs/html'
import staticPlugin from '@elysiajs/static'
import { Elysia } from 'elysia'
import routes from './routes/index.js'

export default new Elysia()
  .use(html())
  .use(staticPlugin({ prefix: '/public' }))
  .use(routes)
