import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { defineNuxtModule } from 'nuxt/kit';

/**
 * `@nuxt/fonts` emits its preload links through the client build manifest,
 * which `features.noScripts` empties — so no link ever reaches the HTML.
 *
 * This walks the stylesheets the prerendered page loads and preloads the
 * upright faces only. Italics are left out: nothing above the fold uses
 * them, so preloading them would compete with the faces that do.
 */
export default defineNuxtModule({
  meta: { name: 'preload-fonts' },
  setup(_options, nuxt) {
    nuxt.hook('nitro:init', (nitro) => {
      nitro.hooks.hook('prerender:generate', async (route) => {
        if (!route.contents || !route.fileName?.endsWith('.html')) return;

        // Client assets still live in the build dir at this point — they are
        // only copied into the output dir once prerendering is done.
        const dirs = [
          join(nuxt.options.buildDir, 'dist/client', nuxt.options.app.buildAssetsDir),
          ...nitro.options.publicAssets.map((asset) => asset.dir),
        ];

        const hrefs = new Set<string>();
        for (const dir of dirs) {
          let files: string[] = [];
          try {
            files = (await readdir(dir)).filter((f) => f.endsWith('.css'));
          } catch {
            continue;
          }
          for (const file of files) {
            if (!route.contents.includes(file)) continue;
            const css = await readFile(join(dir, file), 'utf-8');
            for (const [, block] of css.matchAll(/@font-face\s*\{(.*?)\}/gs)) {
              if (/font-style:\s*italic/.test(block) || /Italic/.test(block)) {
                continue;
              }
              // Emitted as `url(../_fonts/…)`, relative to the stylesheet.
              const url = block.match(/url\([^)]*?(_fonts\/[^)]+\.woff2)\)/);
              if (url) hrefs.add(`/${url[1]}`);
            }
          }
        }
        if (!hrefs.size) return;

        const links = [...hrefs]
          .map(
            (href) =>
              `<link rel="preload" as="font" type="font/woff2" href="${href}" crossorigin>`,
          )
          .join('');
        route.contents = route.contents.replace('</head>', `${links}</head>`);
      });
    });
  },
});
