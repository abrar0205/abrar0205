# Portfolio development

This repository serves two purposes: the root README appears on the GitHub profile, and the React site is deployed to GitHub Pages.

## Local setup

The current Pages workflow uses Node.js 20.

```bash
npm ci
npm run dev
```

Open the Vite URL with the project base path: `/abrar0205/`.

## Validation

```bash
npm run build
npm run check:content
npm run preview
```

The build runs strict TypeScript checks and produces the static site in `dist/`. The content check verifies the rendered page's internal anchors, accessible section structure, project links, key copy, and GitHub Pages asset paths. It uses server rendering, so it does not replace testing in a browser.

Before publishing, inspect desktop and mobile layouts, the mobile menu (including Escape), project filters, expandable case studies, copy-email feedback, external links, and keyboard focus. Check reduced-motion settings and the JavaScript-disabled fallback.

## Editing

| Content | Location |
| --- | --- |
| Summary, contact links, availability | `src/data/profile.ts` |
| Professional experience | `src/data/experience.ts` |
| Featured case studies and project notebook | `src/data/projects.ts` |
| Toolkit | `src/data/skills.ts` |
| Page order | `src/App.tsx` |
| Sections and reusable UI | `src/sections/`, `src/components/` |
| Theme and responsive behavior | `src/index.css` |
| Page metadata and no-JavaScript fallback | `index.html` |
| GitHub profile | `README.md`, `public/profile-banner.svg` |
| Social preview | `public/social-card.svg`, `public/social-card.png` |

Keep the README, metadata, and site consistent when changing availability or background. Education is a background detail; the professional positioning spans software, backend, applied AI, data, and automotive engineering. Only publish verified contributions. Identify synthetic examples and simulation boundaries clearly.

The theme uses warm ivory, forest green, serif display typography, a custom AM monogram, and authored vector illustrations. Project illustrations are design sketches, not screenshots or measured results. The site includes a skip link, mobile navigation with Escape dismissal, visible keyboard focus, native expandable case studies, project-filter announcements, and reduced-motion styles.

The CV link opens a pre-addressed email request. It does not promise a downloadable file. Add a public PDF only when a reviewed CV is available.

The social preview PNG is rendered from the SVG at 1200 × 630. With CairoSVG and DejaVu fonts installed:

```bash
cairosvg public/social-card.svg -o public/social-card.png
```

## Demo links

Only add a live-demo button after confirming that the public URL works. ModalityOps has a public hosted demo. IgnitionTrace currently links to its repository and local setup; its public Pages URL returned 404 when this portfolio was refreshed.

## Publishing

Pull requests run `.github/workflows/check.yml`. Pushes to `main` run `.github/workflows/deploy.yml`, which checks, builds, and publishes to GitHub Pages. Pages must use **GitHub Actions** as its source.

Preserve the Vite base path `/abrar0205/` while the site remains at:

https://abrar0205.github.io/abrar0205/

After publishing, check the build and deploy jobs and load the public URL. Revert the commit on `main` to restore an earlier version; do not rewrite history.
