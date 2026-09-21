<template>
  <section class="relative pt-16 pb-24">
    <div
      class="container-grid grid items-center gap-14 md:grid-cols-[1.05fr_1fr]"
    >
      <div>
        <h1 class="h-display mt-5" style="font-size: clamp(40px, 6vw, 68px)">
          You'll know<br />
          <span class="underline decoration-ruri">why</span>
          it broke.
        </h1>

        <p class="mt-6 mb-9 max-w-lg text-lg leading-[1.65] text-ink-2">
          Kanso runs Lighthouse tests on every PR, cross-references regressions
          across builds, and uses AI to pinpoint the exact code change that
          caused the regression.
        </p>

        <div class="flex items-center gap-3">
          <a
            href="https://tally.so/r/pbky2J"
            target="_blank"
            class="btn bg-ruri text-black font-semibold"
          >
            Book a demo <span class="arrow">→</span>
          </a>
          <a href="#how" class="btn">See how it works</a>
        </div>

        <div
          class="mt-9 flex gap-6 border-t border-dashed border-line pt-6 font-mono text-sm text-mute"
        >
          <div><b class="font-medium text-ink">30s</b> setup</div>
          <div><b class="font-medium text-ink">Zero</b> CI changes</div>
          <div><b class="font-medium text-ink">Auto</b> preview detection</div>
        </div>
      </div>

      <PrCommentMock />
    </div>
  </section>
</template>
