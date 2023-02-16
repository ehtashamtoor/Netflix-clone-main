/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-b": "linear-gradient(to bottom,  rgba(255,255,255, 0),  rgba(0,0,0, 1) 80%);"
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}
