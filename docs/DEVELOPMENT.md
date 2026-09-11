# Portfolio development

This repository serves two purposes: the root README appears on the GitHub profile, and the React site is deployed to GitHub Pages.

## Local setup

Use a Node.js version supported by the project's existing Vite version. The current Pages workflow uses Node.js 20.

```bash
npm ci
npm run dev
```

Open the Vite URL with the project base path: `/abrar0205/`.

## Build

```bash
npm run build
npm run preview
```

The build runs TypeScript checking and creates the static site in `dist/`.

## Editing

| Content | Location |
| --- | --- |
| Name, summary, contact links, availability | `src/data/profile.ts` |
| Professional experience | `src/data/experience.ts` |
| Featured and selected projects | `src/data/projects.ts` |
| Toolkit | `src/data/skills.ts` |
| Page order | `src/App.tsx` |
| Sections and reusable UI | `src/sections/`, `src/components/` |
| Theme, layout, responsive behavior | `src/index.css` |
| Page title and metadata | `index.html` |
| GitHub profile | `README.md`, `public/profile-banner.svg` |

Keep the README, metadata, and portfolio consistent when changing availability or background. Label synthetic data, simulations, academic group work, and research interests accurately. Include achievement metrics only when they are verified personal contributions.

The design uses a charcoal background and lime accent, with responsive grids at 1100, 899, and 560 pixels. Navigation includes a skip link, an accessible mobile disclosure menu, Escape dismissal, and visible keyboard focus. Reduced-motion preferences disable scroll movement and reveal transforms.

## Publishing

The existing `.github/workflows/deploy.yml` builds and deploys pushes to `main`. It can also be run manually in GitHub Actions. GitHub Pages must use **GitHub Actions** as its source.

The Vite base path is `/abrar0205/`; preserve it while the site remains at:

https://abrar0205.github.io/abrar0205/

Review the changes and run the build before publishing. After publication, check the GitHub Actions build and deploy jobs for the published commit.

To undo a published change, revert its commit on `main`; the existing workflow will deploy the restored source. Do not force-push or rewrite history.
