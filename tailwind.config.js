/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f7f4',
          100: '#e8eae3',
          200: '#d1d6c8',
          300: '#b4bca5',
          400: '#959581',
          500: '#768064',
          600: '#4c583e',
          700: '#2c3424',
          800: '#1f241a',
          900: '#161a12',
        },
        sage: {
          50: '#f8f9f7',
          100: '#f0f2ed',
          200: '#daded8',
          300: '#c4c9bd',
          400: '#a8b09a',
          500: '#959581',
          600: '#768064',
          700: '#5d6b4f',
          800: '#4c583e',
          900: '#3e4733',
        }
      },
      fontFamily: {
        sans: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}