/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01437d",
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        },
      },
    },
  },
  plugins: [],
}

