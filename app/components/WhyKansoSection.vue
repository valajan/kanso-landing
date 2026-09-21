<template>
  <section id="why" class="py-32">
    <div class="container-grid">
      <div class="max-w-2xl">
        <h2 class="mt-5 h-display" style="font-size: clamp(32px, 4.4vw, 48px)">
          Why not just<br />Lighthouse CI?
        </h2>
        <p class="mt-4 max-w-lg text-lg leading-[1.6] text-ink-2">
          It's a great tool, but Lighthouse CI only tells you
          <b>what</b> regressed, not <b>why</b>.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
        <!-- Lighthouse CI -->
        <article class="rounded-2xl border border-line bg-ashen p-6">
          <div class="font-mono text-xs text-mute">Lighthouse CI</div>
          <h3 class="mt-2 text-lg font-semibold text-ink">
            Numbers, no narrative.
          </h3>
          <ul class="mt-5 space-y-2.5 text-sm leading-relaxed">
            <li class="flex items-start gap-2.5">
              <span class="mt-0.5 font-mono text-xs text-matcha">✓</span>
              <span class="text-ink-2">Runs Lighthouse on every PR</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-0.5 font-mono text-xs text-matcha">✓</span>
              <span class="text-ink-2">Tracks scores over time</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-0.5 font-mono text-xs text-mute">−</span>
              <span class="text-mute">Never reads your code</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-0.5 font-mono text-xs text-mute">−</span>
              <span class="text-mute"
                >"LCP regressed" : you go investigate</span
              >
            </li>
          </ul>
        </article>

        <!-- AI code review -->
        <article class="rounded-2xl border border-line bg-ashen p-6">
          <div class="font-mono text-xs text-mute">AI code review</div>
          <h3 class="mt-2 text-lg font-semibold text-ink">Code, no runtime.</h3>
          <ul class="mt-5 space-y-2.5 text-sm leading-relaxed">
            <li class="flex items-start gap-2.5">
              <span class="mt-0.5 font-mono text-xs text-matcha">✓</span>
              <span class="text-ink-2">Smart feedback on the diff</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-0.5 font-mono text-xs text-matcha">✓</span>
              <span class="text-ink-2">Catches bugs and style issues</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-0.5 font-mono text-xs text-mute">−</span>
              <span class="text-mute">Never runs your app</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-0.5 font-mono text-xs text-mute">−</span>
              <span class="text-mute">Blind to runtime performance</span>
            </li>
          </ul>
        </article>

        <!-- Kanso — highlighted -->
        <article class="rounded-2xl border border-ruri bg-ashen p-6">
          <div class="font-mono text-xs text-ruri">Kanso</div>
          <h3 class="mt-2 text-lg font-semibold text-ink">
            Metrics + the line that broke them.
          </h3>
          <ul class="mt-5 space-y-2.5 text-sm leading-relaxed">
            <li class="flex items-start gap-2.5">
              <span class="mt-0.5 font-mono text-xs text-matcha">✓</span>
              <span class="text-ink-2">Lighthouse on every PR</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-0.5 font-mono text-xs text-matcha">✓</span>
              <span class="text-ink-2">Reads the PR diff</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-0.5 font-mono text-xs text-matcha">✓</span>
              <span class="text-ink">
                <strong>Cross-references both</strong>
              </span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-0.5 font-mono text-xs text-matcha">✓</span>
              <span class="text-ink-2">Find the root cause</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
