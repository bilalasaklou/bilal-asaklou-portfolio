# Bilal Asaklou — Academic Portfolio

A responsive academic portfolio built with Next.js (App Router) and exported as a static website for GitHub Pages.

## 1. Personalise before publishing

Search the project for `TODO` and replace the sample details:

- `YOUR_EMAIL@example.com` in `components/Portfolio.tsx` with your professional email.
- The LinkedIn and GitHub links with your actual profile URLs.
- Confirm the exact doctoral institution, doctoral programme title and start date. The current entry is deliberately broad because those details were not provided.
- Add your undergraduate degree, institution and dates.
- Add your CV PDF at `public/cv/bilal-asaklou-cv.pdf` (keep this filename, or update the link in `components/Portfolio.tsx`).
- Add publications, GitHub repositories, project reports and a profile photograph if you want them displayed.

The project summary is based on the known description of your Parkinson's disease 16S multi-cohort machine-learning work. Please verify the wording and add exact dates, cohort counts, metrics and repository links only when you are ready to publish them.

## 2. Run locally

Install Node.js 20 or newer, then:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 3. Publish with GitHub Pages

1. Create a GitHub repository, for example `bilal-asaklou-portfolio`.
2. Push the contents of this folder to the repository's `main` branch.
3. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
4. If the repository is a project site (URL includes `/bilal-asaklou-portfolio/`), open **Settings → Secrets and variables → Actions → Variables** and add:
   - Name: `NEXT_PUBLIC_BASE_PATH`
   - Value: `/bilal-asaklou-portfolio` (use your exact repository name)
5. If the repository is named `YOUR_USERNAME.github.io`, leave that variable unset (the site is hosted at the domain root).
6. Push a commit. The included workflow builds the static export and deploys it to GitHub Pages.

Your public URL will normally be `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/` for a project site, or `https://YOUR_USERNAME.github.io/` for a user site.

## 4. Notes

- The site uses Next.js static export (`output: 'export'`) and does not require a Node.js server on GitHub Pages.
- The visual DNA/network illustration is CSS-based; no external image asset is required.
- Google Fonts are loaded from Google Fonts. The site remains readable with system-font fallbacks if those fonts are unavailable.
