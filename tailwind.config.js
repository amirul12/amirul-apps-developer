/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0BCEAF',
          light: '#0DD4B4',
          dark: '#09A389',
        },
        secondary: '#6c757d',
      },
    },
  },
  plugins: [],
}
