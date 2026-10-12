# Blookgle

A lightweight, Blooket-styled search engine powered by Google Programmable Search Engine.

- **Stack:** npm · TypeScript (`src/`) · HTML + CSS (`public/`)
- **Live pages:** `index.html` (home) → `results.html` (custom on-site results page)

## Local dev

```bash
npm install
npm run build      # compile src/*.ts → public/js/
npm run dev        # watch mode
```

Serve `public/` (e.g. `npx serve public` or `python3 -m http.server -d public 3000`)
and open http://localhost:3000/.

## Deploy as a GitHub Project Pages subrepo

This repo is ready to live at `https://<user>.github.io/<repo>/`:

- All local asset paths are **relative** (`./styles.css`, `./js/main.js`,
  `./blooket-logo.png`, …), so the site works under any subpath.
- Search results stay on-site via `data-resultsurl="results.html"` (relative).
- `.github/workflows/deploy-pages.yml` builds TypeScript and publishes
  `public/` to Pages on every push to `main`.

Setup:

1. Create the repo on GitHub and push:
   ```bash
   git remote add origin git@github.com:<user>/<repo>.git
   git push -u origin main
   ```
2. In repo **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` — the site deploys to `https://<user>.github.io/<repo>/`.
