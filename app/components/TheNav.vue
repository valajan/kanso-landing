<template>
  <nav class="sticky top-0 z-50 border-b border-line backdrop-blur-md">
    <div class="container-grid flex items-center justify-between py-3.5">
      <a
        href="#"
        class="inline-flex items-center gap-2.5 font-mono font-semibold tracking-tight text-xl bg-gradient-to-r from-ruri to-lavender bg-clip-text text-transparent"
      >
        Kanso</a
      >

      <!-- Desktop links -->
      <div class="hidden items-center gap-7 text-sm text-ink-2 md:flex">
        <a href="#how" class="transition-colors duration-200 hover:text-ink">How it works</a>
        <a href="#ai-agent" class="transition-colors duration-200 hover:text-ink">AI Agent</a>
        <a href="#config" class="transition-colors duration-200 hover:text-ink">Configure</a>
        <a href="#faq" class="transition-colors duration-200 hover:text-ink">FAQ</a>
      </div>

      <div class="flex items-center gap-3">
        <a href="#book-a-demo" class="btn">Early Access</a>

        <!-- Mobile menu -->
        <details class="group md:hidden">
          <!-- Hamburger -->
          <summary
            class="flex list-none cursor-pointer flex-col items-center justify-center gap-1.5 h-8 w-8"
            aria-label="Menu"
          >
            <span
              class="block h-px w-5 bg-ink-2 transition-all duration-200 origin-center group-open:rotate-45 group-open:translate-y-[7px]"
            />
            <span
              class="block h-px w-5 bg-ink-2 transition-all duration-200 group-open:opacity-0 group-open:scale-x-0"
            />
            <span
              class="block h-px w-5 bg-ink-2 transition-all duration-200 origin-center group-open:-rotate-45 group-open:-translate-y-[7px]"
            />
          </summary>

          <div
            class="absolute inset-x-0 top-full animate-nav-drop border-b border-line bg-ashen"
          >
            <div class="container-grid flex flex-col gap-1 py-3 text-sm text-ink-2">
              <a href="#how" class="py-2 transition-colors duration-200 hover:text-ink">How it works</a>
              <a href="#ai-agent" class="py-2 transition-colors duration-200 hover:text-ink">AI Agent</a>
              <a href="#config" class="py-2 transition-colors duration-200 hover:text-ink">Configure</a>
              <a href="#faq" class="py-2 transition-colors duration-200 hover:text-ink">FAQ</a>
            </div>
          </div>
        </details>
      </div>
    </div>
  </nav>
</template>
