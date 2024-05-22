/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

