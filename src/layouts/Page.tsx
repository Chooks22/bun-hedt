type Props = Html.PropsWithChildren<{
  title?: string
  class?: string
}>

export function Page(p: Props) {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="/public/htmx-1-9-10.min.js" />
        <script src="/public/hyperscript-0-9-12.min.js" />
        <link rel="stylesheet" href="/public/styles.css" />
        <title>{p.title}</title>
      </head>
      <body class="bg-neutral-50 text-neutral-800">
        <div class={p.class}>{p.children}</div>
      </body>
    </html>
  )
}
