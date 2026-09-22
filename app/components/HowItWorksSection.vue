<template>
  <section id="how" class="py-32">
    <div class="container-grid">
      <!-- ── Header ─────────────────────────────────────── -->
      <div class="max-w-2xl">
        <h2 class="h-display" style="font-size: clamp(32px, 4.4vw, 48px)">
          Regressions caught in the PR.<br />
          <span class="text-ink-2">Not in production.</span>
        </h2>
        <p class="mt-4 max-w-lg text-lg leading-[1.6] text-ink-2">
          Kanso automates Lighthouse audits on every pull request, reads the
          diff to isolate what broke, and posts an actionable fix directly in
          the PR. No extra step in your workflow.
        </p>
      </div>

      <!-- ── Workflow pipeline ──────────────────────────── -->
      <div class="mt-16 pb-2">
        <!-- Mobile: grid pipeline ───────────────────── -->
        <div class="mt-6 md:hidden">
          <!-- Row 1: Ticket → Code → PR -->
          <div class="flex items-stretch gap-2">
            <div class="mobile-node flex-1">
              <svg
                class="mobile-icon"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2.5" y="2" width="11" height="12" rx="1.5" />
                <path d="M5 6.5h6M5 9.5h4" />
              </svg>
              <span class="mobile-label">Ticket</span>
            </div>
            <div class="mobile-conn self-center"></div>
            <div class="mobile-node flex-1">
              <svg
                class="mobile-icon"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5.5 5L2 8l3.5 3M10.5 5L14 8l-3.5 3M9.5 4l-3 8" />
              </svg>
              <span class="mobile-label">Code</span>
            </div>
            <div class="mobile-conn self-center"></div>
            <div class="mobile-node flex-1">
              <svg
                class="mobile-icon"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="4.5" cy="4.5" r="1.5" />
                <circle cx="4.5" cy="11.5" r="1.5" />
                <circle cx="11.5" cy="4.5" r="1.5" />
                <path d="M4.5 6v4M11.5 6c0 3-4 4-7 4" />
              </svg>
              <span class="mobile-label">PR</span>
            </div>
          </div>

          <!-- Down connector: Row 1 → kanso -->
          <div class="my-2 flex justify-center">
            <div class="h-4 w-0.5 bg-ruri/30"></div>
          </div>

          <!-- kanso label -->
          <div class="mb-1.5 flex items-center gap-2">
            <div class="h-px flex-1 bg-ruri/20"></div>
            <span
              class="font-mono text-[9px] uppercase tracking-widest text-ruri"
              >kanso</span
            >
            <div class="h-px flex-1 bg-ruri/20"></div>
          </div>

          <!-- Row 2: Audits → Analyse → Fix (kanso zone) -->
          <div
            class="flex items-stretch gap-2 rounded-xl border border-ruri/20 bg-ruri/[0.04] p-2"
          >
            <div class="mobile-node mobile-node--kanso flex-1">
              <svg
                class="mobile-icon"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M8 13A5 5 0 1 0 3 8" />
                <path d="M8 13A5 5 0 0 0 13 8" />
                <path d="M8 8L5.5 5.5" />
                <circle cx="8" cy="8" r="1" />
              </svg>
              <span class="mobile-label">Audits</span>
            </div>
            <div class="mobile-conn mobile-conn--kanso self-center">
              <div class="conn-flow"></div>
            </div>
            <div class="mobile-node mobile-node--kanso flex-1">
              <svg
                class="mobile-icon"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="7" cy="7" r="4" />
                <path d="M10 10l3 3M5.5 7h3M7 5.5v3" />
              </svg>
              <span class="mobile-label">Analyse</span>
            </div>
            <div class="mobile-conn mobile-conn--kanso self-center">
              <div class="conn-flow conn-flow--delayed"></div>
            </div>
            <div class="mobile-node mobile-node--kanso flex-1">
              <svg
                class="mobile-icon"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M11 3l2 2-7.5 7.5H3.5V11L11 3zM9.5 4.5l2 2" />
              </svg>
              <span class="mobile-label">Fix</span>
            </div>
          </div>

          <!-- Down connector: kanso → Prod -->
          <div class="my-2 flex justify-center">
            <div class="h-4 w-0.5 bg-line"></div>
          </div>

          <!-- Row 3: Prod (centered) -->
          <div class="flex justify-center">
            <div
              class="mobile-node mobile-node--success"
              style="min-width: 96px"
            >
              <svg
                class="mobile-icon"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 8.5l3 3 7-7" />
              </svg>
              <span class="mobile-label">Prod</span>
            </div>
          </div>
        </div>

        <!-- Desktop: horizontal pipeline ───────────── -->
        <!-- pt-10 gives headroom for the kanso label floating above -->
        <div class="hidden md:flex items-center pt-10">
          <!-- Ticket -->
          <div class="pipeline-node">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              class="pipeline-icon"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2.5" y="2" width="11" height="12" rx="1.5" />
              <path d="M5 6.5h6M5 9.5h4" />
            </svg>
            <span class="pipeline-label">Ticket</span>
          </div>

          <div class="pipeline-conn"></div>

          <!-- Code -->
          <div class="pipeline-node">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              class="pipeline-icon"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5.5 5L2 8l3.5 3M10.5 5L14 8l-3.5 3M9.5 4l-3 8" />
            </svg>
            <span class="pipeline-label">Code</span>
          </div>

          <div class="pipeline-conn"></div>

          <!-- PR opened -->
          <div class="pipeline-node">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              class="pipeline-icon"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="4.5" cy="4.5" r="1.5" />
              <circle cx="4.5" cy="11.5" r="1.5" />
              <circle cx="11.5" cy="4.5" r="1.5" />
              <path d="M4.5 6v4M11.5 6c0 3-4 4-7 4" />
            </svg>
            <span class="pipeline-label">PR</span>
          </div>

          <!-- Entry connector to kanso (blue) -->
          <div class="pipeline-conn pipeline-conn--entry"></div>

          <!-- ── KANSO GROUP ───────────────────────────── -->
          <div class="kanso-group">
            <!-- Label floating above -->
            <div class="kanso-label-above">
              <div class="kanso-label-line"></div>
              <span class="kanso-label-text">kanso</span>
              <div class="kanso-label-line"></div>
            </div>

            <!-- Subtle background card -->
            <div class="kanso-bg"></div>

            <!-- Audits -->
            <div class="pipeline-node pipeline-node--kanso">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                class="pipeline-icon"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M8 13A5 5 0 1 0 3 8" />
                <path d="M8 13A5 5 0 0 0 13 8" />
                <path d="M8 8L5.5 5.5" />
                <circle cx="8" cy="8" r="1" />
              </svg>
              <span class="pipeline-label">Audits</span>
            </div>

            <!-- Animated inner connector -->
            <div class="pipeline-conn pipeline-conn--kanso">
              <div class="conn-flow"></div>
            </div>

            <!-- Analyse -->
            <div class="pipeline-node pipeline-node--kanso">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                class="pipeline-icon"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="7" cy="7" r="4" />
                <path d="M10 10l3 3" />
                <path d="M5.5 7h3M7 5.5v3" />
              </svg>
              <span class="pipeline-label">Analyse</span>
            </div>

            <!-- Animated inner connector -->
            <div class="pipeline-conn pipeline-conn--kanso">
              <div class="conn-flow conn-flow--delayed"></div>
            </div>

            <!-- Fix -->
            <div class="pipeline-node pipeline-node--kanso">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                class="pipeline-icon"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M11 3l2 2-7.5 7.5H3.5V11L11 3z" />
                <path d="M9.5 4.5l2 2" />
              </svg>
              <span class="pipeline-label">Fix</span>
            </div>
          </div>
          <!-- ── END KANSO GROUP ────────────────────────── -->

          <!-- Exit connector from kanso -->
          <div class="pipeline-conn pipeline-conn--exit"></div>

          <!-- Prod -->
          <div class="pipeline-node pipeline-node--success">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              class="pipeline-icon"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 8.5l3 3 7-7" />
            </svg>
            <span class="pipeline-label">Prod</span>
          </div>
        </div>
      </div>

      <!-- Connector -->
      <div class="my-8 text-center font-mono text-sm text-mute">↓</div>

      <!-- ── Detail: inputs + verdict ───────────────────── -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
        <!-- Left — What Kanso reads -->
        <div class="md:col-span-2 rounded-2xl border border-line bg-ashen p-5">
          <p class="mb-4 font-mono text-xs text-mute">What Kanso reads</p>

          <!-- 1 — Production baseline -->
          <div class="flex items-start gap-3 border-b border-line py-3">
            <div
              class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line font-mono text-[9px] text-mute"
            >
              1
            </div>
            <div>
              <p class="text-sm font-medium text-ink">Production baseline</p>
              <p class="mt-0.5 text-xs leading-relaxed text-mute">
                Lighthouse on
                <code
                  class="rounded border border-line bg-black/30 px-1 py-px text-ruri"
                  >main</code
                >
                — or your
                <code
                  class="rounded border border-line bg-black/30 px-1 py-px text-ruri"
                  >budgets</code
                >
                if defined. Skipped when budgets are set.
              </p>
            </div>
          </div>

          <!-- 2 — PR preview audit -->
          <div class="flex items-start gap-3 border-b border-line py-3">
            <div
              class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line font-mono text-[9px] text-mute"
            >
              2
            </div>
            <div>
              <p class="text-sm font-medium text-ink">PR preview audit</p>
              <p class="mt-0.5 text-xs leading-relaxed text-mute">
                Same Lighthouse run on the deploy preview. Multi-page,
                auto-detected.
              </p>
            </div>
          </div>

          <!-- 3 — PR diff -->
          <div class="flex items-start gap-3 pt-3">
            <div
              class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line font-mono text-[9px] text-mute"
            >
              3
            </div>
            <div>
              <p class="text-sm font-medium text-ink">The PR diff</p>
              <p class="mt-0.5 text-xs leading-relaxed text-mute">
                Only what changed — lockfiles, snapshots, and tests excluded.
              </p>
            </div>
          </div>
        </div>

        <!-- Right — What gets posted -->
        <div class="md:col-span-3 rounded-2xl border border-line bg-ashen p-5">
          <p class="mb-4 font-mono text-xs text-mute">
            What gets posted to the PR
          </p>

          <!-- GitHub PR comment mockup -->
          <div
            class="overflow-hidden rounded-md border bg-white text-gh-text"
            style="border-color: #d1d9e0"
          >
            <div
              class="flex items-center gap-2 border-b px-3.5 py-2.5 text-xs"
              style="
                border-color: #d1d9e0;
                background: #f6f8fa;
                font-family: 'IBM Plex Sans', sans-serif;
              "
            >
              <span class="font-semibold" style="color: #1f2328"
                >components/Hero.vue</span
              >
              <span style="color: #59636e">· line 14</span>
            </div>

            <pre
              class="px-3.5 py-3 font-mono text-xs leading-relaxed"
              style="background: #ffffff"
            ><span style="background:#ffe1e1;color:#c8212c;display:block;padding:0 6px">- &lt;img src="/hero.webp" class="hero-img" /&gt;</span><span style="background:#d4f8d4;color:#197b35;display:block;padding:0 6px">+ &lt;img src="/hero.webp" class="hero-img" loading="lazy" /&gt;</span></pre>

            <div
              class="border-t px-3.5 py-3 text-xs leading-relaxed"
              style="
                border-color: #d1d9e0;
                background: #fbfcfd;
                font-family: 'IBM Plex Sans', sans-serif;
                color: #1f2328;
              "
            >
              <div class="flex items-center gap-2">
                <div
                  class="grid h-5 w-5 place-items-center rounded-full font-mono text-[10px] font-semibold bg-gradient-to-r from-ruri to-lavender"
                >
                  K
                </div>
                <span class="font-semibold">kanso</span>
                <span style="color: #59636e">commented</span>
              </div>
              <p class="mt-2" style="color: #1f2328">
                <strong>LCP regressed by +2.6s.</strong> This PR added
                <code
                  class="rounded px-1 py-px font-mono text-[11px]"
                  style="background: #eaeef2"
                  >loading="lazy"</code
                >
                to the hero image — but it's the LCP element. The lazy attribute
                bypasses the browser preload scanner, deferring the fetch until
                after layout. Remove it on above-the-fold images, and prefer
                <code
                  class="rounded px-1 py-px font-mono text-[11px]"
                  style="background: #eaeef2"
                  >fetchpriority="high"</code
                >
                instead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Node base ────────────────────────────────────────── */
.pipeline-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid #232a30;
  background: #1c1c1e;
  padding: 14px 18px;
  min-width: 84px;
  position: relative;
  z-index: 1;
  transition: border-color 0.2s;
}

.pipeline-icon {
  width: 20px;
  height: 20px;
  color: #939aa2;
}

.pipeline-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  color: #939aa2;
  white-space: nowrap;
}

/* ── Kanso node variant ───────────────────────────────── */
.pipeline-node--kanso {
  border-color: rgba(60, 136, 238, 0.35);
  background: rgba(60, 136, 238, 0.05);
}
.pipeline-node--kanso .pipeline-icon {
  color: #3c88ee;
}
.pipeline-node--kanso .pipeline-label {
  color: #3c88ee;
}

/* ── Success node variant ─────────────────────────────── */
.pipeline-node--success {
  border-color: rgba(166, 218, 149, 0.35);
  background: rgba(166, 218, 149, 0.05);
}
.pipeline-node--success .pipeline-icon {
  color: #a6da95;
}
.pipeline-node--success .pipeline-label {
  color: #a6da95;
}

/* ── Connectors ───────────────────────────────────────── */
.pipeline-conn {
  flex: 1;
  height: 2px;
  background: #232a30;
  min-width: 36px;
  flex-shrink: 0;
  position: relative;
}

.pipeline-conn--entry {
  background: linear-gradient(to right, #232a30, rgba(60, 136, 238, 0.4));
}

.pipeline-conn--exit {
  background: linear-gradient(to right, rgba(60, 136, 238, 0.4), #232a30);
}

.pipeline-conn--kanso {
  background: rgba(60, 136, 238, 0.2);
  overflow: hidden;
  min-width: 36px;
  flex: 1;
}

/* Animated flow dot */
.conn-flow {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent,
    rgba(60, 136, 238, 0.95),
    transparent
  );
  animation: flow 2s linear infinite;
}
.conn-flow--delayed {
  animation-delay: 0.7s;
}

@keyframes flow {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(300%);
  }
}

/* ── Mobile nodes ─────────────────────────────────────── */
.mobile-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border-radius: 10px;
  border: 1px solid #232a30;
  background: #1c1c1e;
  padding: 10px 6px;
}
.mobile-icon {
  width: 16px;
  height: 16px;
  color: #939aa2;
}
.mobile-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  color: #939aa2;
  white-space: nowrap;
}
.mobile-node--kanso {
  border-color: rgba(60, 136, 238, 0.35);
  background: rgba(60, 136, 238, 0.05);
}
.mobile-node--kanso .mobile-icon {
  color: #3c88ee;
}
.mobile-node--kanso .mobile-label {
  color: #3c88ee;
}
.mobile-node--success {
  border-color: rgba(166, 218, 149, 0.35);
  background: rgba(166, 218, 149, 0.05);
}
.mobile-node--success .mobile-icon {
  color: #a6da95;
}
.mobile-node--success .mobile-label {
  color: #a6da95;
}

/* ── Mobile connectors ────────────────────────────────── */
.mobile-conn {
  width: 12px;
  height: 2px;
  flex-shrink: 0;
  background: #232a30;
}
.mobile-conn--kanso {
  position: relative;
  overflow: hidden;
  background: rgba(60, 136, 238, 0.2);
}

/* ── Kanso group wrapper ──────────────────────────────── */
.kanso-group {
  display: flex;
  align-items: center;
  position: relative;
  flex-shrink: 0;
}

/* Subtle bg card behind the 3 nodes + 2 inner connectors */
.kanso-bg {
  position: absolute;
  inset: -10px -12px;
  border-radius: 18px;
  background: rgba(60, 136, 238, 0.025);
  border: 1px solid rgba(60, 136, 238, 0.12);
  pointer-events: none;
}

/* "kanso" label above the group */
.kanso-label-above {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  pointer-events: none;
}
.kanso-label-line {
  flex: 1;
  height: 1px;
  background: rgba(60, 136, 238, 0.2);
}
.kanso-label-text {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  /* Full strength: at 55% the label read 2.3:1 against the page. The rules
     on either side of it stay faint — they are decoration, not text. */
  color: #3c88ee;
  white-space: nowrap;
}
</style>
