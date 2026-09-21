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
      title:
        'Kanso | Automated Lighthouse audits and analysis for every GitHub PR',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Kanso is a GitHub App that automates Lighthouse on PRs, blocking merges if performance regresses, while our agent identifies the exact cause.',
        },
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
