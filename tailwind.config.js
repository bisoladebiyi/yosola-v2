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
        "light-purp": "#CFDEF3D1",
        "primary-dark": "#021B79",
        "dark": "#434343",
        "darker": "#242424",
        "light": "#D9D9D9"
      },
      width: {
        "medium": "44%"
      }
    },
  },
  plugins: [],
}
