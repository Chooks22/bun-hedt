# Bun HEDT Stack

- [HTMX](https://htmx.org)/[Hyperscript](https://hyperscript.org)
- [ElysiaJS](https://elysiajs.com)
- [Drizzle ORM](https://orm.drizzle.team)
- [TailwindCSS](https://tailwindcss.com)

## What's in this Repo

This example repo was made to be pretty barebones and hackable.
It doesn't even use any Drizzle migration so as to not need to fuzz
about with reverting anything using `drizzle-kit`.

Feel free to use this repo as a scaffold for your project—install
Vite for hot reloads, use Turso as your database, etc.

## Scripts

- `bun dev` - Start a dev server.

- `bun run build` - Compile Tailwind `styles.css` file for production.

- `bun start` - Start a production server.

- `bun run migrate` - Generate Drizzle migrations from your schema.

## Acknowledgements

This was most definitely inspired by [The BETH Stack](https://github.com/ethanniser/the-beth-stack).

Since [Ethan Niser's video](https://youtu.be/cpzowDDJj24) on the
stack came out, a lot of things have changed (for the better),
and so I wanted to make a starter template with less steps that
I could easily extend from.

The HEDT acronym also stands for High-End Desktops, coined by Intel.
