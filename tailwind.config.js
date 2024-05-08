/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headingColor: "#1B1B1B",
      },
      fontFamily: {
        poetsenOne: ["Poetsen One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
