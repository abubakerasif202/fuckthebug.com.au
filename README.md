# fuckthebug.com.au

Marketing site for `https://fuckthebug.com.au/`, built with Vite, React, TypeScript, and Tailwind CSS.

## Scripts

- `npm run dev` starts the local development server on port `3000`.
- `npm run build` creates the production bundle in `dist/`.
- `npm run preview` serves the production bundle locally.
- `npm run lint` runs ESLint across `src/`.
- `npm run test` runs the Vitest suite.

## Deployment Notes

`vite.config.ts` is currently set to `base: '/'`, which is correct for the live root-domain deployment at `https://fuckthebug.com.au/`.

If you deploy this project under a repository subpath instead of the root domain, update `base` to that subpath before building. Example: `'/repo-name/'`.

## Troubleshooting

- If assets 404 after deploy, verify the built files in `dist/` were generated from the intended `base` setting.
- If the site feels heavy on first load, run `npm run build` and inspect the bundle output before shipping.
