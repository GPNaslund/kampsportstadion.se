/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper:   'var(--paper)',
        'paper-dim': 'var(--paper-dim)',
        ink:     'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        graphite: {
          100: 'var(--graphite-100)',
          300: 'var(--graphite-300)',
          500: 'var(--graphite-500)',
          700: 'var(--graphite-700)',
        },
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        cls: {
          fys:  'var(--cls-fys)',
          thai: 'var(--cls-thai)',
          bjj:  'var(--cls-bjj)',
          mma:  'var(--cls-mma)',
          sw:   'var(--cls-sw)',
          barn: 'var(--cls-barn)',
          npf:  'var(--cls-npf)',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Fraunces', 'Times New Roman', 'serif'],
        sans:    ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem',  { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['2.5rem',  { lineHeight: '1.0',  letterSpacing: '-0.025em' }],
        'display-md': ['1.75rem', { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        prose: '65ch',
        standard: '1120px',
        wide: '1320px',
      },
      transitionTimingFunction: {
        'out-quint': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      translate: {
        '-150': '-150%',
        '150': '150%',
      },
      screens: {
        'w-450': { raw: '(min-width: 450px)' },
        'w-625': { raw: '(min-width: 625px)' },
        'w-900': { raw: '(min-width: 900px)' },
        'h-500': { raw: '(max-height: 500px)' },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
