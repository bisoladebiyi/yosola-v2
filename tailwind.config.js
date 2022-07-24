/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#7A81F3",
        "dark": "#434343",
        "light": "#D9D9D9"
      },
      width: {
        "medium": "44%"
      }
    },
  },
  plugins: [],
}
