<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Mi-u7kyo1pK4U7HZT0kyveg7ryp6pHlk

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key
3. Run the app: `npm run dev`

## Automatic GitHub Pages publishing (overview)

This repository is configured to publish the production build to GitHub Pages automatically.

**What happens:**
1. Vite is configured to build into the `docs/` folder and use the repository path as the base URL (see `vite.config.ts`).
2. A GitHub Actions workflow (placed at `.github/workflows/build-and-commit-docs.yml`) runs on every push to `main`.
3. The workflow runs `npm ci`, builds the site (`npm run build`), and commits the `docs/` folder back to `main` if there are changes.
4. GitHub Pages serves the site from `main` -> `/docs` (you must enable Pages in the repository settings the first time).

This setup lets you push source changes (React/TSX/etc.) and have the production HTML/assets generated and published automatically.

### Using this on Windows (step‑by‑step)

These instructions assume you have Git and Node.js (with npm) installed on Windows.

#### 1. Clone the repo (if you don't have it already):
* Open PowerShell (Win key → type "PowerShell" → Enter)
* Run: 
  ```powershell
  git clone https://github.com/abubakerasif202/fucktheweb.com.au.git
  cd fucktheweb.com.au
  ```
* Install dependencies: `npm install`

#### 2. Build locally (this produces the `docs/` folder that Pages will serve):
`npm run build`

* After a successful build, you should see a `docs/` folder with `index.html` and static assets.
* Quick local preview (optional):
  * Open the file in your browser: `start .\docs\index.html`
  * Or serve it with a small server (recommended so module imports work): `npx serve docs` (or) `npx live-server docs`

#### 3. Commit and push the generated docs (only necessary if you don't use the Actions workflow or want to push a manual build):
```powershell
git add docs
git commit -m "Add production build in docs for GitHub Pages"
git push origin main
```

#### 4. Enable GitHub Pages (one-time setup via web UI):
* Visit: https://github.com/abubakerasif202/fucktheweb.com.au
* Go to **Settings** → **Pages** (or Settings → Pages & deployment)
* Under "Source" choose: **Branch: main**, **Folder: /docs**
* Save. Wait a few minutes for the site to appear at: https://abubakerasif202.github.io/fucktheweb.com.au

---

### How the automated workflow works (for maintainers)

File: `.github/workflows/build-and-commit-docs.yml` (if present)

* **Trigger:** runs on push to `main`.
* **Steps:** 
  1. Checkout the repo (full history, persist credentials).
  2. Setup Node.js and cache npm.
  3. Run `npm ci` to install dependencies.
  4. Run `npm run build` which produces `docs/` (Vite is configured with `build.outDir: 'docs'`).
  5. If `docs/` changed, commit it and push back to `main` using the actions bot identity.

**Important details:**
* The workflow is written to skip running when the actor is `github-actions[bot]` (this prevents an infinite loop when the workflow commits the `docs/` changes back to main).
* The workflow uses the `GITHUB_TOKEN` (provided by Actions) to push the commit.
* If the build fails, check the Actions run log (GitHub → repo → Actions → select the failed run) for errors.

---

### Troubleshooting & tips

* **404 / missing assets after Pages publish:**
  * Confirm `vite.config.ts` has `base: '/fucktheweb.com.au/'` (trailing slash is required).
  * Confirm `docs/` exists on the `main` branch (view files on GitHub).
  * Ensure `npm run build` completed without errors in the workflow logs.

* **To force a rebuild locally and push the result:**
  * Run `npm run build`, commit `docs/`, and push.

* **To switch to deploying via `gh-pages` branch instead of committing `docs/` to `main`,** consider using `peaceiris/actions-gh-pages` or `gh-pages` package. I can provide a workflow for that if desired.