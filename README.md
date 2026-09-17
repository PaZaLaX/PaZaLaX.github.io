# Pazalax portfolio

Plain React + Vite + TypeScript, with a standalone CSS stylesheet and Lucide icons. No Next.js, Vinext, Cloudflare, database, or server required. Animations use CSS.

## Run locally (Windows, macOS, or Linux)

Install Node.js 22.13+ (22 LTS), then open a terminal in this folder:

```sh
npm install -g pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed by Vite. To check production output:

```sh
pnpm build
pnpm preview
```

## Publish on GitHub Pages

1. Create a repository in your GitHub account. For your main personal site, use `PaZaLaX.github.io` if it is available. Do not replace an existing repository without checking its contents.
2. Upload this folder's contents to the repository root, including the `.github` folder and `pnpm-lock.yaml`. Do not upload this ZIP, `node_modules`, or `dist`.
3. In repository Settings → Pages, set Source to GitHub Actions.
4. Push to `main`, or run Deploy portfolio to GitHub Pages in the Actions tab.
5. Wait for a successful deployment and use the URL shown in its deployment summary.

The workflow builds `dist` and derives Vite's asset prefix from GitHub Pages settings. Both a root user site and a repository subdirectory are supported. For a future custom domain, configure it in GitHub Pages and rebuild.

Publishing makes the portfolio content, email, and linked profiles public. A public repository also makes its source public.

## Editing

- `src/App.tsx`: biography, project descriptions, skills and contact links.
- `src/styles.css`: palette, layout, responsive styles and animations.
- `public/`: add real project images here when ready.
- `index.html`: page title, description and favicon.

Deployment reference: https://vite.dev/guide/static-deploy.html#github-pages
