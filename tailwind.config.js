/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      translate: {
        '-150': '-150%',
        '150': '150%',
      },
      screens: {
        'w-450': {'raw': '(min-width: 450px)'},
        'w-625': {'raw': '(min-width: 625px)'},
        'w-900': {'raw': '(min-width: 900px)'},
        'h-500': {'raw': '(max-height: 500px)'},
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
