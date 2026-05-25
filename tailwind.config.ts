import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Vivant 2 · nuit Paris, festif, vin nature ──
        nuit: {
          DEFAULT: '#0D1117', // fond principal sombre
          deep: '#080C10',    // footer / contrastes
        },
        terracotta: {
          DEFAULT: '#C4714A', // accent chaud — vin, feu, festif
          light: '#D98A63',
        },
        creme: '#F5EDE0',     // textes clairs / sections claires
        vin: {
          DEFAULT: '#2D4A35', // vert vin naturel
          deep: '#21392A',
        },
        or: '#C4A255',        // touches lumineuses
      },
      fontFamily: {
        abril: ['var(--font-abril)', 'Georgia', 'serif'],
        dm: ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.02em',
        widest2: '0.34em',
      },
      maxWidth: { wrap: '1240px' },
      transitionTimingFunction: { vivant: 'cubic-bezier(0.16, 1, 0.3, 1)' },
      keyframes: {
        eq: {
          '0%,100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'eq': 'eq 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
