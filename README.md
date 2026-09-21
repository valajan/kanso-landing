# Kanso — landing page

Chasing web performance. This repository holds the page behind
[kanso.sh](https://kanso.sh).

The page is built with Nuxt, but none of Nuxt reaches the browser. The
markup is prerendered at build time and the client bundle is switched
off, so what ships is static HTML, CSS and fonts. The one interactive
element — the mobile menu — is a native `<details>`, with a few lines of
inline script to close it after a tap.

## Stack

Nuxt 4 · Tailwind CSS · deployed to Cloudflare Pages

## Local development

Requires Node 20.19+ or 22.12+.

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build    # outputs to dist/
npm run preview  # serve that build locally
```

Cloudflare Pages deploys `dist/` on every push to `main`, and builds a
preview for every pull request.

## License

The code in this repository is [MIT licensed](LICENSE). The Kanso name,
the written content of the page and its visual design are not covered by
that license and remain reserved.
