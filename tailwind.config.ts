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
        mute: '#7a8088',
        'mute-2': '#565c63',
        'pg-green': '#4ade80',
        'pg-red': '#f87171',
        lavender: '#8aadf4',
        matcha: '#a6da95',
        'gh-text': '#1f2328',
        'code-bg': '#1e1e2e',
        'code-bg-dark': '#181825',
        ruri: '#2F80ED',
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
