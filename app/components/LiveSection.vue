<template>
  <section class="border-y border-line">
    <div class="container-grid">
      <a
        href="#"
        class="group flex flex-col items-center gap-3 py-6 md:flex-row md:justify-between md:gap-6"
      >
        <div class="flex items-center gap-3">
          <span
            class="relative grid h-7 w-7 place-items-center rounded-full bg-gradient-to-r from-ruri to-lavender font-mono text-xs font-semibold text-ink"
          >
            K
            <span
              class="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-matcha animate-pulse-soft"
            />
          </span>
          <div class="text-center text-sm text-ink-2 md:text-left">
            This landing page is
            <strong class="font-semibold text-ink">audited by Kanso</strong>, on
            every commit.
          </div>
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs"
        >
          <span class="text-mute"
            >LCP <span class="text-matcha">0.9s</span></span
          >
          <span class="text-line">·</span>
          <span class="text-mute"
            >TBT <span class="text-matcha">40ms</span></span
          >
          <span class="text-line">·</span>
          <span class="text-mute"
            >CLS <span class="text-matcha">0.01</span></span
          >
          <span class="ml-2 text-ink-2 transition-colors group-hover:text-ink"
            >View live report →</span
          >
        </div>
      </a>
    </div>
  </section>
</template>
