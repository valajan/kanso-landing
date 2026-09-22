<script setup lang="ts">
type Status = 'fail' | 'warn' | 'pass';

interface MetricRow {
  metric: string;
  main: string;
  pr: string;
  delta: string;
  status: Status;
}

const rows: MetricRow[] = [
  { metric: 'Performance', main: '94', pr: '71', delta: '−23', status: 'fail' },
  { metric: 'LCP', main: '1.2s', pr: '3.8s', delta: '+2.6s', status: 'fail' },
  {
    metric: 'TBT',
    main: '120ms',
    pr: '896ms',
    delta: '+776ms',
    status: 'fail',
  },
  { metric: 'CLS', main: '0.02', pr: '0.04', delta: '+0.02', status: 'warn' },
  { metric: 'FCP', main: '0.9s', pr: '1.1s', delta: '+0.2s', status: 'pass' },
];

const icon = (s: Status) => (s === 'fail' ? '❌' : s === 'warn' ? '⚠️' : '✅');
</script>

<template>
  <div
    class="relative overflow-hidden rounded-xl border bg-white text-gh-text shadow-pr-mock"
    style="border-color: #d1d9e0; transform: rotate(-0.4deg); font-size: 13px"
  >
    <!-- Head -->
    <div
      class="flex items-center gap-2 border-b px-3.5 py-3"
      style="
        border-color: #d1d9e0;
        background: #f6f8fa;
        font-family: 'IBM Plex Sans', sans-serif;
      "
    >
      <div
        class="grid h-7 w-7 place-items-center rounded-full font-mono text-xs font-semibold bg-gradient-to-r from-ruri to-lavender"
      >
        K
      </div>
      <span class="font-semibold text-gh-text">kanso</span>
      <span
        class="rounded-xl font-mono font-semibold text-xs"
        style="color: #59636e; padding: 1px 6px; border: 1px solid #d1d9e0"
      >
        Bot
      </span>
      <span class="ml-auto text-xs" style="color: #59636e">2 min ago</span>
    </div>

    <!-- Body -->
    <div class="px-4 py-4" style="font-family: 'IBM Plex Sans', sans-serif">
      <!-- The title of the comment in the picture, not a heading of this
           page: between the hero's h1 and the next section's h2 there is
           nothing for an h4 to sit under. -->
      <div class="mb-2.5 text-base font-semibold text-gh-text">
        Kanso | Performance Report
      </div>

      <div class="my-2 mb-3.5 flex flex-wrap items-center gap-1.5 text-xs">
        <span
          class="rounded font-mono"
          style="background: #ddf4ff; color: #0969da; padding: 2px 8px"
        >
          feature/new-hero
        </span>
        <span style="color: #59636e">→</span>
        <span
          class="rounded font-mono"
          style="background: #dafbe1; color: #1a7f37; padding: 2px 8px"
        >
          main
        </span>
        <span style="color: #59636e"
          >· Vercel preview detected automatically</span
        >
      </div>

      <table
        class="w-full overflow-hidden rounded-md border-collapse border font-mono text-xs"
        style="border-color: #d1d9e0"
      >
        <thead>
          <tr>
            <th
              scope="col"
              class="border-b px-2.5 py-2 text-left font-semibold"
              style="background: #f6f8fa; border-color: #d1d9e0"
            >
              Metric
            </th>
            <th
              scope="col"
              class="border-b px-2.5 py-2 text-left font-semibold"
              style="background: #f6f8fa; border-color: #d1d9e0"
            >
              main
            </th>
            <th
              scope="col"
              class="border-b px-2.5 py-2 text-left font-semibold"
              style="background: #f6f8fa; border-color: #d1d9e0"
            >
              PR
            </th>
            <th
              scope="col"
              class="border-b px-2.5 py-2 text-left font-semibold"
              style="background: #f6f8fa; border-color: #d1d9e0"
            >
              Δ
            </th>
            <th
              scope="col"
              class="w-5 border-b px-2.5 py-2"
              style="background: #f6f8fa; border-color: #d1d9e0"
            >
              <!-- The column of ❌ / ⚠️ / ✅ needs a name like the others;
                   the picture of the comment does not need to show it. -->
              <span class="sr-only">Status</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in rows" :key="row.metric">
            <td
              class="px-2.5 py-2 text-left"
              :class="i < rows.length - 1 ? 'border-b' : ''"
              style="border-color: #d1d9e0"
            >
              {{ row.metric }}
            </td>
            <td
              class="px-2.5 py-2 text-left"
              :class="i < rows.length - 1 ? 'border-b' : ''"
              style="border-color: #d1d9e0"
            >
              {{ row.main }}
            </td>
            <td
              class="px-2.5 py-2 text-left"
              :class="[
                i < rows.length - 1 ? 'border-b' : '',
                row.status !== 'pass' ? '' : '',
              ]"
              :style="{
                borderColor: '#d1d9e0',
                color: row.status === 'fail' ? '#cf222e' : undefined,
              }"
            >
              {{ row.pr }}
            </td>
            <td
              class="px-2.5 py-2 text-left font-semibold"
              :class="i < rows.length - 1 ? 'border-b' : ''"
              :style="{
                borderColor: '#d1d9e0',
                color:
                  row.status === 'fail'
                    ? '#cf222e'
                    : row.status === 'warn'
                      ? '#cf222e'
                      : '#1a7f37',
              }"
            >
              {{ row.delta }}
            </td>
            <td
              class="w-5 px-2.5 py-2 text-center"
              :class="i < rows.length - 1 ? 'border-b' : ''"
              style="border-color: #d1d9e0"
            >
              {{ icon(row.status) }}
            </td>
          </tr>
        </tbody>
      </table>

      <div
        class="mt-3.5 rounded-md font-mono text-xs"
        style="
          padding: 10px 12px;
          background: #fffbeb;
          border: 1px solid #fbbf2466;
          color: #92400e;
        "
      >
        🤖 Regression detected · Agent analysis in progress…
      </div>
    </div>

    <!-- Check row -->
    <div
      class="flex items-center gap-2.5 border-t px-3.5 py-2.5 text-xs text-gh-text"
      style="border-color: #d1d9e0; background: #fbfcfd"
    >
      <div
        class="grid h-4 w-4 place-items-center rounded-full text-xs font-semibold text-white"
        style="background: #cf222e"
      >
        ✕
      </div>
      <div class="font-semibold">kanso</div>
      <div style="color: #59636e">— Performance regression detected</div>
      <div class="ml-auto" style="color: #0969da">Details</div>
    </div>
  </div>
</template>
