// tailwind.config.mjs
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-merriweather)"],
      },
    },
  },
  plugins: [],
};
