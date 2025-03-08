/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#8B001C',
          dark: '#6B0015',
          light: '#AB0022'
        }
      }
    },
  },
  plugins: [],
};