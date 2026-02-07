

---

### Troubleshooting & tips

* **404 / missing assets after Pages publish:**
  * Confirm `vite.config.ts` has `base: '/fuckthebug.com.au/'` (trailing slash is required).
  * Confirm `dist/` exists on the `main` branch (view files on GitHub).
  * Ensure `npm run build` completed without errors in the workflow logs.

* **To force a rebuild locally and push the result:**
  * Run `npm run build`, commit `dist/`, and push.

* **To switch to deploying via `gh-pages` branch instead of committing `docs/` to `main`,** consider using `peaceiris/actions-gh-pages` or `gh-pages` package. I can provide a workflow for that if desired.
