# Kanso — landing page

The marketing site for [Kanso](https://kanso.sh), a GitHub App that runs
Lighthouse on every pull request, blocks the merge when performance
regresses, and explains what caused it.

This repository holds the landing page only. It is a single prerendered
page that ships no framework JavaScript: the markup is built ahead of
time, and the one interactive element — the mobile menu — is a native
`<details>` element with a few lines of inline script to close it.

## Stack

Nuxt 4 · Tailwind CSS · deployed to Cloudflare Pages

## Local development

Requires Node 20 or later.

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build    # outputs to dist/
npm run preview  # serve that build locally
```

`nuxt.config.ts` prerenders `/` and disables the client bundle, so the
build output is static HTML, CSS and fonts. Cloudflare Pages deploys
`dist/` on every push to `main`, and builds a preview for every pull
request.
