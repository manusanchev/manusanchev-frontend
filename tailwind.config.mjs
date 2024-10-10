/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        fixel: ["Fixel", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        separator: "#262626",
        title: "#cbd5e1",
      },
    },
  },
  plugins: [],
};
