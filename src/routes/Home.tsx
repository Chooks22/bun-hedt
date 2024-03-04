import { Elysia } from 'elysia'
import { Page as Page } from '../layouts/Page.js'

declare global {
  // eslint-disable-next-line no-var
  var count: number
}

globalThis.count ??= 0

function Count() {
  return <span id="count">{count}</span>
}

export default new Elysia()
  .get('/', () => {
    return (
      <Page class="flex min-h-dvh items-center justify-center">
        <main class="flex flex-col items-center gap-8">
          <h1 class="text-5xl font-black">Hello, HEDT!</h1>
          <p class="text-neutral-700">Made in Bun using HTMX/Hyperscript, ElysiaJS, Drizzle ORM, and TailwindCSS.</p>
          <p class="text-lg font-bold">
            Times clicked: <Count />
          </p>
          <button
            hx-post="/count"
            hx-target="#count"
            hx-swap="outerHTML"
            class="bg-orange-500 px-4 py-2 text-sm uppercase tracking-wide text-white hover:brightness-110 active:brightness-125"
          >
            Click Me
          </button>
        </main>
      </Page>
    )
  })
  .post('/count', () => {
    count++
    return <Count />
  })
