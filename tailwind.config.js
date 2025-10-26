/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ama-blue': '#002855',
        'ama-orange': '#F5A623',
        'ama-deep-blue': '#003366',
      },
    },
  },
  plugins: [],
}
