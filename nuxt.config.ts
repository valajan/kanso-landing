// The page is served from one origin and shared under one title: naming
// them once keeps the canonical, the Open Graph tags and the <title> from
// drifting apart.
const SITE = 'https://kanso.sh';
const TITLE =
  'Kanso | Automated Lighthouse audits and analysis for every GitHub PR';
const DESCRIPTION =
  'Kanso is a GitHub App that automates Lighthouse on PRs, blocking merges if performance regresses, while our agent identifies the exact cause.';
const OG_IMAGE_ALT =
  'Kanso — you\'ll know why it broke. Lighthouse on every pull request.';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // The landing page has no data fetching and no client state, so it is
  // prerendered at build time and ships without the Vue/Nuxt client bundle.
  features: {
    noScripts: true,
    // Both stylesheets are already render-blocking <link>s, so inlining the
    // component styles only duplicates them inside the HTML.
    inlineStyles: false,
  },

  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      routes: ['/'],
    },
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  fonts: {
    defaults: {
      // The page is English-only; nothing on it renders cyrillic, greek,
      // vietnamese or latin-ext through a family that covers those ranges.
      subsets: ['latin'],
      preload: true,
    },
    families: [
      { name: 'IBM Plex Sans', weights: [400, 500, 600], display: 'swap' },
      { name: 'IBM Plex Mono', weights: [400, 600], display: 'swap' },
    ],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: TITLE,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: DESCRIPTION },

        // What a link preview is built from. The page answers at both
        // kanso.sh and www.kanso.sh; a scraper fetches og:image on its own,
        // from the tag alone, so every URL here is absolute.
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: SITE + '/' },
        { property: 'og:title', content: TITLE },
        { property: 'og:description', content: DESCRIPTION },
        { property: 'og:image', content: SITE + '/og.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: OG_IMAGE_ALT },
        { property: 'og:site_name', content: 'Kanso' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        // The Redirect Rule sends www to the apex at the edge; this is what
        // says so in the HTML, so a search engine ranks one page and not two.
        { rel: 'canonical', href: SITE + '/' },
        // Named, so the browser stops asking for /favicon.ico and logging the
        // 404 that comes back.
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      ],
      script: [
        {
          // The mobile menu in TheNav is a plain <details>, so it works with no
          // JS at all. This only collapses it after tapping an anchor link —
          // the one behaviour CSS cannot express.
          innerHTML:
            "document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('nav details[open] a');if(a){a.closest('details').open=false}})",
        },
      ],
    },
  },
});
