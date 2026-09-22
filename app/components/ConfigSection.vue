<template>
  <section id="config" class="py-32">
    <div class="container-grid">
      <div class="grid items-start gap-14 md:grid-cols-[1.1fr_1.3fr]">
        <!-- Left -->
        <div>
          <h2 class="h-display" style="font-size: clamp(32px, 4.4vw, 48px)">
            Configure once,<br />enforced on every PR.
          </h2>
          <p class="mt-5 max-w-xl text-lg leading-[1.55] text-ink-2">
            Kanso auto-detects your preview URL from Vercel, Netlify, Render,
            Railway, Cloudflare Pages, and AWS Amplify. Manage your
            configuration through a
            <code
              class="rounded border border-line bg-ashen px-1.5 py-px font-mono text-base text-ruri"
              >.kanso.yml</code
            >
            file at the root of your repository to define custom pages and
            performance thresholds.
          </p>
          <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div class="rounded-xl border border-line bg-ashen p-3.5">
              <div class="font-mono text-xs text-ruri">staging</div>
              <p class="mt-1.5 text-sm leading-[1.55] text-ink-2 config-feat-p">
                Dynamic URL with <code>{branch}</code> or <code>{pr}</code>.
                Works with any host.
              </p>
            </div>
            <div class="rounded-xl border border-line bg-ashen p-3.5">
              <div class="font-mono text-xs text-ruri">urls</div>
              <p class="mt-1.5 text-sm leading-[1.55] text-ink-2 config-feat-p">
                Audit every critical page, not just the homepage. Each one gets
                its own report.
              </p>
            </div>
            <div class="rounded-xl border border-line bg-ashen p-3.5">
              <div class="font-mono text-xs text-ruri">budgets</div>
              <p class="mt-1.5 text-sm leading-[1.55] text-ink-2 config-feat-p">
                Per-metric thresholds. Block only what matters to your team.
              </p>
            </div>
          </div>
        </div>

        <!-- Right: yaml card -->
        <div
          class="overflow-hidden rounded-2xl border border-line shadow-yaml-card bg-code-bg"
        >
          <div
            class="flex items-center gap-2 border-b border-line bg-code-bg-dark px-3.5 py-2.5 font-mono text-xs text-mute"
          >
            <span
              class="rounded px-2 py-0.5 text-xs text-ink-2"
              style="background: #1a2024"
              >yml</span
            >
            <span>.kanso.yml</span>
          </div>
          <pre
            class="m-0 px-5 py-4 font-mono text-sm leading-[1.75] whitespace-pre"
          ><span class="yaml-com"># .kanso.yml</span>

<span class="yaml-com"># Your production URL</span>
<span class="yaml-key">base_url</span>: <span class="yaml-str">"https://my-domain.com"</span>

<span class="yaml-key">staging</span>:
  <span class="yaml-com"># optional · auto-detected for Vercel, Netlify, Render, Railway, Cloudflare Pages, Amplify</span>
  <span class="yaml-key">url</span>: <span class="yaml-str">"https://acme-git-{branch}.staging.app"</span>

<span class="yaml-key">urls</span>:
  <span class="yaml-dash">-</span> <span class="yaml-key">path</span>: <span class="yaml-str">/</span>
    <span class="yaml-key">name</span>: <span class="yaml-str">Homepage</span>
  <span class="yaml-dash">-</span> <span class="yaml-key">path</span>: <span class="yaml-str">/pricing</span>
    <span class="yaml-key">name</span>: <span class="yaml-str">Pricing</span>
  <span class="yaml-dash">-</span> <span class="yaml-key">path</span>: <span class="yaml-str">/blog</span>
    <span class="yaml-key">name</span>: <span class="yaml-str">Blog</span>

<span class="yaml-com"># If your production configuration differs, prefer using budgets</span>
<span class="yaml-key">budgets</span>:
  <span class="yaml-key">performance</span>: <span class="yaml-num">90</span>   <span class="yaml-com"># score / 100 · blocks merge if below</span>
  <span class="yaml-key">lcp</span>: <span class="yaml-num">2500</span>     <span class="yaml-com"># ms · Largest Contentful Paint</span>
  <span class="yaml-key">tbt</span>: <span class="yaml-num">200</span>      <span class="yaml-com"># ms · Total Blocking Time</span>
  <span class="yaml-key">cls</span>: <span class="yaml-num">0.1</span>      <span class="yaml-com"># Cumulative Layout Shift</span>
  <span class="yaml-key">fcp</span>: <span class="yaml-num">1800</span>     <span class="yaml-com"># ms · First Contentful Paint</span>

<span class="yaml-key">ai_analysis</span>: <span class="yaml-num">true</span>  <span class="yaml-com"># root-cause analysis on regressions</span></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.yaml-com {
  color: #808891;
}
.yaml-key {
  color: theme('colors.lavender');
}
.yaml-str {
  color: theme('colors.matcha');
}
.yaml-num {
  color: theme('colors.matcha');
}
.yaml-dash {
  color: #939aa2;
}

.config-feat-p :deep(code) {
  background: #0e1214;
  border: 1px solid #1a2024;
  padding: 1px 6px;
  border-radius: 5px;
  color: #e8ecee;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 0.92em;
}
</style>
