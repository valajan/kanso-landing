<template>
  <section id="faq" class="py-32">
    <div class="container-grid">
      <div class="grid items-start gap-14 md:grid-cols-[1fr_1.5fr]">
        <!-- Left -->
        <div>
          <h2 class="h-display" style="font-size: clamp(32px, 4.4vw, 48px)">
            Questions,<br />answered.
          </h2>
          <p class="mt-4 max-w-sm text-lg leading-[1.6] text-ink-2">
            The ones we get most often — before they come up in the demo.
          </p>
        </div>

        <!-- Right: accordion -->
        <div class="overflow-hidden rounded-2xl border border-line bg-ashen">
          <details class="group border-b border-line last:border-b-0">
            <summary
              class="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 text-base font-medium text-ink hover:bg-black/20"
            >
              <span>How is this different from CodeRabbit or Greptile?</span>
              <span
                class="font-mono text-xl leading-none text-mute transition-transform duration-200 group-open:rotate-45"
                >+</span
              >
            </summary>
            <div class="px-6 pb-5 text-sm leading-relaxed text-ink-2">
              <p>
                Those tools review your code. Kanso reviews what happens
                <em>when your code runs</em>. We cross-reference Lighthouse
                audits with your PR diff to name the exact line that regressed a
                metric — code review tools never run your app.
              </p>
            </div>
          </details>

          <details class="group border-b border-line last:border-b-0">
            <summary
              class="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 text-base font-medium text-ink hover:bg-black/20"
            >
              <span>Will it slow down my CI?</span>
              <span
                class="font-mono text-xl leading-none text-mute transition-transform duration-200 group-open:rotate-45"
                >+</span
              >
            </summary>
            <div class="px-6 pb-5 text-sm leading-relaxed text-ink-2">
              <p>
                No. Kanso runs on your preview deploy, separately from your CI.
                Each PR gets two parallel audits (preview + production/budgets
                reference) — typically under 2 minutes total. Nothing on your
                critical path, nothing blocking your merge queue.
              </p>
            </div>
          </details>

          <details class="group border-b border-line last:border-b-0">
            <summary
              class="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 text-base font-medium text-ink hover:bg-black/20"
            >
              <span>What if I don't use Vercel or Netlify?</span>
              <span
                class="font-mono text-xl leading-none text-mute transition-transform duration-200 group-open:rotate-45"
                >+</span
              >
            </summary>
            <div class="px-6 pb-5 text-sm leading-relaxed text-ink-2">
              <p>
                Render, Railway, Cloudflare Pages and AWS Amplify are supported
                out of the box. For any other host, point Kanso at your preview
                URL pattern with a
                <code
                  class="rounded border border-line bg-black/30 px-1.5 py-px font-mono text-xs text-ruri"
                  >{branch}</code
                >
                or
                <code
                  class="rounded border border-line bg-black/30 px-1.5 py-px font-mono text-xs text-ruri"
                  >{pr}</code
                >
                token in your
                <code
                  class="rounded border border-line bg-black/30 px-1.5 py-px font-mono text-xs text-ruri"
                  >.kanso.yml</code
                >.
              </p>
            </div>
          </details>

          <details class="group border-b border-line last:border-b-0">
            <summary
              class="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 text-base font-medium text-ink hover:bg-black/20"
            >
              <span>How accurate is the AI root-cause analysis?</span>
              <span
                class="font-mono text-xl leading-none text-mute transition-transform duration-200 group-open:rotate-45"
                >+</span
              >
            </summary>
            <div class="px-6 pb-5 text-sm leading-relaxed text-ink-2">
              <p>
                The agent only fires when Lighthouse confirms a measurable
                regression (above 10% on a tracked metric). It reads your PR
                diff plus the Lighthouse trace — not your whole codebase. The
                output is always grounded in a measurable signal, never in
                guesswork.
              </p>
            </div>
          </details>

          <details class="group border-b border-line last:border-b-0">
            <summary
              class="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 text-base font-medium text-ink hover:bg-black/20"
            >
              <span>Is my code sent to a third party?</span>
              <span
                class="font-mono text-xl leading-none text-mute transition-transform duration-200 group-open:rotate-45"
                >+</span
              >
            </summary>
            <div class="px-6 pb-5 text-sm leading-relaxed text-ink-2">
              <p>
                Only the relevant slice of the diff on a failing PR — never your
                full repo, never your secrets. Lockfiles, snapshots and test
                files are skipped. A self-hosted option is on the roadmap for
                teams with stricter isolation requirements.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
summary::-webkit-details-marker {
  display: none;
}
summary {
  list-style: none;
}
</style>
