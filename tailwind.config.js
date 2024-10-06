/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        fixel: ["Fixel", "sans-serif"],
      },
      colors: {
        separator: "#1f1f1f",
        title: "#cbd5e1"
      },
    },
  },
  plugins: [],
};
