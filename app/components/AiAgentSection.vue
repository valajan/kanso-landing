<template>
  <section id="ai-agent" class="relative py-32">
    <div class="container-grid relative">
      <!-- Head -->
      <div class="mb-14 grid items-start gap-14 md:grid-cols-2">
        <div>
          <h2 class="h-display" style="font-size: clamp(32px, 4.4vw, 48px)">
            When it regresses,<br />
            it tells you
            <span class="underline decoration-ruri">why</span>.
          </h2>
        </div>
        <p class="max-w-xl text-lg leading-[1.55] text-ink-2">
          Detection is the easy part. The hard part is
          <code
            class="rounded border border-line bg-ashen px-1.5 py-px font-mono text-[0.92em] text-ink-2"
            >fixing it</code
          >. On every regression, our agent reads the diff, the Lighthouse
          trace, and the fetch waterfall. Then he writes a
          <code
            class="rounded border border-line bg-ashen px-1.5 py-px font-mono text-[0.92em] text-ink-2"
            >Likely cause</code
          >
          +
          <code
            class="rounded border border-line bg-ashen px-1.5 py-px font-mono text-[0.92em] text-ink-2"
            >Code suggestions</code
          >
          straight in the PR.
        </p>
      </div>

      <!-- The split-panel stage -->
      <div
        class="relative overflow-hidden rounded-2xl border border-line shadow-ai-stage"
        style="background: linear-gradient(180deg, #0d1014 0%, #0a0d10 100%)"
      >
        <!-- Stage header -->
        <div
          class="flex items-center gap-2 border-b border-line px-4 py-3.5"
          style="background: linear-gradient(90deg, #11141a 0%, #0d1014 100%)"
        >
          <div class="flex shrink-0 gap-1.5">
            <span class="h-2.5 w-2.5 rounded-full bg-line" />
            <span class="h-2.5 w-2.5 rounded-full bg-line" />
            <span class="h-2.5 w-2.5 rounded-full bg-line" />
          </div>
          <span class="min-w-0 truncate font-mono text-xs text-mute-2">
            PR #142 · perf/hero-lazy-load · Agent Analysis
          </span>
          <div
            class="ml-auto flex shrink-0 items-center gap-2 font-mono text-xs text-mute"
          >
            <span class="hidden sm:inline">claude-sonnet-4.6</span>
          </div>
        </div>

        <!-- Body grid -->
        <div class="grid min-h-[540px] md:grid-cols-[1.1fr_1.3fr]">
          <!-- Left: analysis -->
          <div
            class="flex flex-col gap-5 border-line p-7 md:border-r"
            style="background: linear-gradient(180deg, transparent, #11101a40)"
          >
            <!-- Detected impact -->
            <div>
              <div
                class="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-mute"
              >
                <span class="h-px w-3.5" style="background: #8b7dff33" />
                Detected impact
              </div>
              <div class="mt-2.5 grid grid-cols-3 gap-2.5">
                <div class="rounded-xl border border-line bg-ashen p-3">
                  <div
                    class="font-mono text-xs uppercase tracking-widest text-mute"
                  >
                    Perf
                    <span style="color: #f87171">-28</span>
                  </div>
                  <div
                    class="mt-1.5 flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5"
                  >
                    <span class="font-mono text-sm text-mute line-through"
                      >91</span
                    >
                    <span
                      class="font-mono text-base font-semibold"
                      style="color: #f87171"
                      >63</span
                    >
                  </div>
                </div>
                <div class="rounded-xl border border-line bg-ashen p-3">
                  <div
                    class="font-mono text-xs uppercase tracking-widest text-mute"
                  >
                    Lcp
                    <span style="color: #f87171">+3.6s</span>
                  </div>
                  <div
                    class="mt-1.5 flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5"
                  >
                    <span class="font-mono text-sm text-mute line-through"
                      >1.2s</span
                    >
                    <span
                      class="font-mono text-base font-semibold"
                      style="color: #f87171"
                      >4.8s</span
                    >
                  </div>
                </div>
                <div class="rounded-xl border border-line bg-ashen p-3">
                  <div
                    class="font-mono text-xs uppercase tracking-widest text-mute"
                  >
                    Si
                    <span style="color: #f87171">+2.7s</span>
                  </div>
                  <div
                    class="mt-1.5 flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5"
                  >
                    <span class="font-mono text-sm text-mute line-through"
                      >1.4s</span
                    >
                    <span
                      class="font-mono text-base font-semibold"
                      style="color: #f87171"
                      >4.1s</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Likely cause -->
            <div>
              <div
                class="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-mute"
              >
                <span class="h-px w-3.5" style="background: #8b7dff33" />
                ✷ Likely cause
              </div>
              <h4
                class="mt-2.5 mb-2.5 text-base font-medium tracking-tight text-ink"
              >
                LCP delay caused by <code>loading="lazy"</code> on the hero
                image
              </h4>
              <ul class="m-0 list-none p-0 likely-causes">
                <li
                  class="ai-li relative pb-2.5 pt-2.5 pl-5 text-sm leading-[1.55] text-ink-2 border-b border-dashed border-line"
                >
                  The LCP element — <code>&lt;img class="hero-img"&gt;</code> —
                  received <strong>loading="lazy"</strong> in this PR.
                </li>
                <li
                  class="ai-li relative pb-2.5 pt-2.5 pl-5 text-sm leading-[1.55] text-ink-2 border-b border-dashed border-line"
                >
                  <code>loading="lazy"</code> bypasses the browser preload
                  scanner, deferring the network fetch until the image enters
                  the viewport.
                </li>
                <li
                  class="ai-li relative pb-2.5 pt-2.5 pl-5 text-sm leading-[1.55] text-ink-2 border-b border-dashed border-line"
                >
                  Since this image IS the above-the-fold viewport, the fetch is
                  delayed by a full layout cycle — directly causing the
                  <strong>+3.6s LCP</strong>.
                </li>
                <li
                  class="ai-li relative pb-2.5 pt-2.5 pl-5 text-sm leading-[1.55] text-ink-2"
                >
                  Confirmed in trace: LCP resource fetch begins at
                  <strong>4 210 ms</strong> on this PR vs
                  <strong>650 ms</strong> on <code>main</code>.
                </li>
              </ul>
            </div>

            <!-- Prioritized actions -->
            <div>
              <div
                class="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-mute"
              >
                <span class="h-px w-3.5" style="background: #8b7dff33" />
                ↳ Prioritized actions
              </div>
              <ul class="m-0 list-none p-0">
                <li
                  class="ai-li relative pb-2.5 pt-2.5 pl-5 text-sm leading-[1.55] text-ink-2 border-b border-dashed border-line"
                >
                  <strong>1.</strong> Remove <code>loading="lazy"</code> — never
                  apply it to above-the-fold images.
                </li>
                <li
                  class="ai-li relative pb-2.5 pt-2.5 pl-5 text-sm leading-[1.55] text-ink-2 border-b border-dashed border-line"
                >
                  <strong>2.</strong> Add <code>fetchpriority="high"</code> to
                  explicitly signal the LCP element to the browser.
                </li>
                <li
                  class="ai-li relative pb-2.5 pt-2.5 pl-5 text-sm leading-[1.55] text-ink-2"
                >
                  <strong>3.</strong> Pair with
                  <code
                    >&lt;link rel="preload" as="image"
                    href="/assets/hero.webp"&gt;</code
                  >
                  in <code>&lt;head&gt;</code> for maximum fetch priority.
                </li>
              </ul>
            </div>
          </div>

          <!-- Right: code suggestion -->
          <div class="flex flex-col bg-code-bg">
            <div
              class="flex items-stretch gap-0 border-b border-line bg-code-bg-dark px-3"
            >
              <div
                class="cursor-pointer px-3.5 py-2.5 font-mono text-xs text-lavender"
                style="border-bottom: 2px solid #fbbf24"
              >
                index.html
              </div>
              <div
                class="cursor-pointer px-3.5 py-2.5 font-mono text-xs text-mute"
                style="border-bottom: 2px solid transparent"
              >
                head.html
              </div>
              <div class="ml-auto px-3.5 py-2.5 font-mono text-xs text-mute-2">
                view raw ↗
              </div>
            </div>

            <!-- Code -->
            <div
              class="flex-1 overflow-x-auto px-5 py-5 font-mono text-sm leading-[1.7]"
            >
              <!-- 24: comment -->
              <div
                class="grid items-baseline"
                style="grid-template-columns: 32px 18px 1fr"
              >
                <span class="select-none pr-3 text-right text-mute-2">24</span>
                <span class="select-none text-mute-2"> </span>
                <span
                  ><span class="italic text-mute-2"
                    >&lt;!-- hero section --&gt;</span
                  ></span
                >
              </div>
              <!-- 25: section open -->
              <div
                class="grid items-baseline"
                style="grid-template-columns: 32px 18px 1fr"
              >
                <span class="select-none pr-3 text-right text-mute-2">25</span>
                <span class="select-none text-mute-2"> </span>
                <span>
                  <span class="text-pg-red">&lt;section</span>
                  <span class="text-lavender"> class</span>=<span
                    class="text-matcha"
                    >"hero"</span
                  >
                  <span class="text-pg-red">&gt;</span>
                </span>
              </div>
              <!-- 26- removed: img open -->
              <div
                class="grid items-baseline"
                style="
                  grid-template-columns: 32px 18px 1fr;
                  background: linear-gradient(
                    90deg,
                    #2a0e12 0%,
                    transparent 80%
                  );
                "
              >
                <span class="select-none pr-3 text-right text-mute-2">26</span>
                <span class="select-none text-pg-red">−</span>
                <span>
                  &nbsp;&nbsp;<span class="text-pg-red">&lt;img</span>
                  <span class="text-lavender"> src</span>=<span
                    class="text-matcha"
                    >"/assets/hero.webp"</span
                  >
                </span>
              </div>
              <!-- 27- removed: alt -->
              <div
                class="grid items-baseline"
                style="
                  grid-template-columns: 32px 18px 1fr;
                  background: linear-gradient(
                    90deg,
                    #2a0e12 0%,
                    transparent 80%
                  );
                "
              >
                <span class="select-none pr-3 text-right text-mute-2">27</span>
                <span class="select-none text-pg-red">−</span>
                <span style="padding-left: 7ch">
                  <span class="text-lavender">alt</span>=<span
                    class="text-matcha"
                    >"Kanso dashboard"</span
                  >
                </span>
              </div>
              <!-- 28- removed: class + close -->
              <div
                class="grid items-baseline"
                style="
                  grid-template-columns: 32px 18px 1fr;
                  background: linear-gradient(
                    90deg,
                    #2a0e12 0%,
                    transparent 80%
                  );
                "
              >
                <span class="select-none pr-3 text-right text-mute-2">28</span>
                <span class="select-none text-pg-red">−</span>
                <span style="padding-left: 7ch">
                  <span class="text-lavender">class</span>=<span
                    class="text-matcha"
                    >"hero-img"</span
                  ><span class="text-pg-red">&gt;</span>
                </span>
              </div>
              <!-- 26+ added: img open -->
              <div
                class="grid items-baseline"
                style="
                  grid-template-columns: 32px 18px 1fr;
                  background: linear-gradient(
                    90deg,
                    #0e2a18 0%,
                    transparent 80%
                  );
                "
              >
                <span class="select-none pr-3 text-right text-mute-2">26</span>
                <span class="select-none text-matcha">+</span>
                <span>
                  &nbsp;&nbsp;<span class="text-pg-red">&lt;img</span>
                  <span class="text-lavender"> src</span>=<span
                    class="text-matcha"
                    >"/assets/hero.webp"</span
                  >
                </span>
              </div>
              <!-- 27+ added: alt -->
              <div
                class="grid items-baseline"
                style="
                  grid-template-columns: 32px 18px 1fr;
                  background: linear-gradient(
                    90deg,
                    #0e2a18 0%,
                    transparent 80%
                  );
                "
              >
                <span class="select-none pr-3 text-right text-mute-2">27</span>
                <span class="select-none text-matcha">+</span>
                <span style="padding-left: 7ch">
                  <span class="text-lavender">alt</span>=<span
                    class="text-matcha"
                    >"Kanso dashboard"</span
                  >
                </span>
              </div>
              <!-- 28+ added: class -->
              <div
                class="grid items-baseline"
                style="
                  grid-template-columns: 32px 18px 1fr;
                  background: linear-gradient(
                    90deg,
                    #0e2a18 0%,
                    transparent 80%
                  );
                "
              >
                <span class="select-none pr-3 text-right text-mute-2">28</span>
                <span class="select-none text-matcha">+</span>
                <span style="padding-left: 7ch">
                  <span class="text-lavender">class</span>=<span
                    class="text-matcha"
                    >"hero-img"</span
                  >
                </span>
              </div>
              <!-- 29+ added: loading="lazy" — the culprit -->
              <div
                class="grid items-baseline"
                style="
                  grid-template-columns: 32px 18px 1fr;
                  background: linear-gradient(
                    90deg,
                    #0e2a18 0%,
                    transparent 80%
                  );
                "
              >
                <span class="select-none pr-3 text-right text-mute-2">29</span>
                <span class="select-none text-matcha">+</span>
                <span style="padding-left: 7ch">
                  <span class="text-lavender">loading</span>=<span
                    class="text-matcha"
                    >"lazy"</span
                  ><span class="text-pg-red">&gt;</span>
                </span>
              </div>
              <!-- 30: h1 -->
              <div
                class="grid items-baseline"
                style="grid-template-columns: 32px 18px 1fr"
              >
                <span class="select-none pr-3 text-right text-mute-2">30</span>
                <span class="select-none text-mute-2"> </span>
                <span>
                  &nbsp;&nbsp;<span class="text-pg-red">&lt;h1&gt;</span>Catch
                  regressions before they ship<span class="text-pg-red"
                    >&lt;/h1&gt;</span
                  >
                </span>
              </div>
              <!-- 31: section close -->
              <div
                class="grid items-baseline"
                style="grid-template-columns: 32px 18px 1fr"
              >
                <span class="select-none pr-3 text-right text-mute-2">31</span>
                <span class="select-none text-mute-2"> </span>
                <span><span class="text-pg-red">&lt;/section&gt;</span></span>
              </div>
              <!-- blank -->
              <div
                class="grid items-baseline"
                style="grid-template-columns: 32px 18px 1fr"
              >
                <span class="select-none pr-3 text-right text-mute-2">32</span>
                <span class="select-none text-mute-2"> </span>
                <span></span>
              </div>
              <!-- agent suggestion comment -->
              <div
                class="grid items-baseline"
                style="
                  grid-template-columns: 32px 18px 1fr;
                  background: linear-gradient(
                    90deg,
                    #1a1730 0%,
                    transparent 80%
                  );
                "
              >
                <span class="select-none pr-3 text-right text-mute-2">33</span>
                <span class="select-none text-mute-2"> </span>
                <span
                  ><span class="italic text-mute-2"
                    >/* — agent suggestion — */</span
                  ></span
                >
              </div>
              <!-- 29- remove loading="lazy" -->
              <div
                class="grid items-baseline"
                style="
                  grid-template-columns: 32px 18px 1fr;
                  background: linear-gradient(
                    90deg,
                    #2a0e12 0%,
                    transparent 80%
                  );
                "
              >
                <span class="select-none pr-3 text-right text-mute-2">29</span>
                <span class="select-none text-pg-red">−</span>
                <span style="padding-left: 7ch">
                  <span class="text-lavender">loading</span>=<span
                    class="text-matcha"
                    >"lazy"</span
                  ><span class="text-pg-red">&gt;</span>
                </span>
              </div>
              <!-- 29+ add fetchpriority="high" -->
              <div
                class="grid items-baseline"
                style="
                  grid-template-columns: 32px 18px 1fr;
                  background: linear-gradient(
                    90deg,
                    #0e2a18 0%,
                    transparent 80%
                  );
                "
              >
                <span class="select-none pr-3 text-right text-mute-2">29</span>
                <span class="select-none text-matcha">+</span>
                <span style="padding-left: 7ch">
                  <span class="text-lavender">fetchpriority</span>=<span
                    class="text-matcha"
                    >"high"</span
                  ><span class="text-pg-red">&gt;</span>
                </span>
              </div>
            </div>

            <!-- Suggested fix -->
            <div
              class="flex flex-wrap items-center gap-x-3.5 gap-y-2 border-t border-line bg-ashen px-5 py-4 text-sm"
            >
              <div
                class="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-lavender"
                style="background: #8b7dff14; border: 1px solid #8b7dff33"
              >
                ✦
              </div>
              <div class="min-w-0 flex-1 text-ink-2">
                <b class="font-semibold text-ink">Suggested fix</b> — removing
                <code
                  class="rounded border px-1.5 py-px font-mono text-xs text-lavender"
                  style="background: #14111e; border-color: #8b7dff33"
                  >loading="lazy"</code
                >
                and adding
                <code
                  class="rounded border px-1.5 py-px font-mono text-xs text-lavender"
                  style="background: #14111e; border-color: #8b7dff33"
                  >fetchpriority="high"</code
                >
                recovers <b class="text-ink">LCP −3.6s</b> on the homepage.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bullets -->
      <div class="mt-9 grid grid-cols-1 gap-3.5 md:grid-cols-3">
        <div class="rounded-xl border border-line bg-ashen p-4">
          <h3 class="font-mono text-xs uppercase tracking-wider text-mute">
            Reads the diff
          </h3>
          <h4 class="mb-1 mt-2 text-base font-medium text-ink">Source-aware</h4>
          <p class="m-0 text-sm leading-[1.55] text-ink-2">
            The agent traces the regression back to the actual lines you
            changed, not a vague Lighthouse hint.
          </p>
        </div>
        <div class="rounded-xl border border-line bg-ashen p-4">
          <div class="font-mono text-xs uppercase tracking-wider text-mute">
            Reads the trace
          </div>
          <h4 class="mb-1 mt-2 text-base font-medium text-ink">
            Lighthouse-grounded
          </h4>
          <p class="m-0 text-sm leading-[1.55] text-ink-2">
            Cross-references the Lighthouse trace timings and fetch waterfall
            before pointing to a cause.
          </p>
        </div>
        <div class="rounded-xl border border-line bg-ashen p-4">
          <div class="font-mono text-xs uppercase tracking-wider text-mute">
            Posts to the PR
          </div>
          <h4 class="mb-1 mt-2 text-base font-medium text-ink">
            Where you already work
          </h4>
          <p class="m-0 text-sm leading-[1.55] text-ink-2">
            The analysis lands in the PR comment thread. No new dashboard. No
            Slack. No tab to keep open.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.likely-causes .ai-li::before {
  content: '';
  position: absolute;
  left: 4px;
  top: 18px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: theme('colors.lavender');
  opacity: 0.6;
}

.ai-li :deep(strong) {
  color: #e8ecee;
  font-weight: 600;
}

.ai-li :deep(code) {
  background: #14111e;
  border: 1px solid #8b7dff33;
  padding: 1px 6px;
  border-radius: 4px;
  color: theme('colors.lavender');
  font-size: 12px;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
}
</style>
