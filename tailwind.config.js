/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#f3eff5',
        'secondary': '#00262d',
        'accent': '#ffb30f'
      },
      colors: {
        'primary': '#f3eff5',
        'secondary': '#00262d',
        'accent': '#ffb30f'
      }
    },
  },
  plugins: [],
}

