# SvelteKit + Vite

- Skill：[SvelteKit](https://kit.svelte.dev/) (Svelte 5)、[TypeScript](https://www.typescriptlang.org/)
- Support Tool：[ESLint](https://eslint.org/)、[Prettier](https://prettier.io/)
- Package Manager: [pnpm](https://pnpm.io/)
- Frontend Tool：[Vite](https://vitejs.dev/)

## Features

- **Svelte 5 Support**: Optimized with Runes (`$props`, `$derived`) and Snippets (`{@render}`).
- **SEO Ready**: Built-in dynamic metadata management with `APP_CONFIG`.
- **Clean Architecture**: Idiomatic SvelteKit structure (layout-based styles, server hooks).
- **Type Safe**: Full TypeScript integration for both components and configurations.

## How to run

1. Install [Node.js](https://nodejs.org/en) LTS Version.

2. Install pnpm.

   Node.js version > `v16.13`

   ```bash
   corepack enable pnpm
   ```

   Node.js version < `v16.13`

   ```bash
   npm install pnpm -g
   ```

3. Install dependencies.

   ```bash
   pnpm install
   ```

4. Run app in dev env.

   ```bash
   pnpm run dev
   ```

## How to build and preview

1. Build app.

   ```bash
   pnpm run build
   ```

2. Preview your prod env.

   ```bash
   pnpm run preview
   ```

## How to lint and format

1. Check types and lint your app.

   ```bash
   pnpm run check
   pnpm run lint
   ```

## Other Styling demo

- [Sass](https://github.com/cdcd72/vite-svelte/tree/pure-sass)
- [Tailwind CSS](https://github.com/cdcd72/vite-svelte/tree/tailwindcss)
