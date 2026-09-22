import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{vue,ts,js}'],
  theme: {
    extend: {
      colors: {
        ashen: '#1C1C1E',
        line: '#232a30',
        ink: '#F5F5F7',
        'ink-2': '#b6bcc1',
        // The two quiet steps of the text ramp. Both used to sit below 4.5:1
        // on the surfaces they are printed on — #565c63 could not reach it on
        // any background, black included — so the ramp was lifted rather than
        // the backgrounds darkened. The step between them is kept.
        mute: '#939aa2',
        'mute-2': '#808891',
        'pg-green': '#4ade80',
        'pg-red': '#f87171',
        lavender: '#8aadf4',
        matcha: '#a6da95',
        'gh-text': '#1f2328',
        'code-bg': '#1e1e2e',
        'code-bg-dark': '#181825',
        // Raised from #2F80ED: the old blue carried 4.4:1 as text on `ashen`,
        // just under the line. One blue still, for text, fills and rules.
        ruri: '#3C88EE',
        shibu: '#E05A47',
        paper: '#F7F4EE',
        'paper-2': '#EFEAE0',
        washi: '#D4C9B8',
        'washi-2': '#E5DDD0',
        sumi: '#111111',
        'sumi-2': '#5B544A',
        'sumi-3': '#9A938A',
        shuiro: '#C04846',
      },
      fontFamily: {
        sans: [
          '"IBM Plex Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        grid: '1100px',
      },
      letterSpacing: {
        tightish: '-0.025em',
      },
      boxShadow: {
        'pr-mock':
          '0 30px 80px -30px rgba(74, 222, 128, 0.18), 0 0 0 1px rgba(255,255,255,0.04)',
        'btn-primary': '0 0 0 1px #4ade8033, 0 8px 24px -10px #22c55e88',
        'ai-stage': '0 50px 100px -50px #000, 0 0 0 1px #ffffff04',
        'yaml-card': '0 30px 60px -30px #000',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'nav-drop': {
          from: { opacity: '0', transform: 'translateY(-6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 1.6s infinite',
        'nav-drop': 'nav-drop 0.2s ease-out',
      },
    },
  },
} satisfies Config;
