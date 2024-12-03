/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#DEF1FC",
        primary: "#57C3FD",
        secondary: "#A7D5EB",
        accent: "#2190C3",
        accentHover: "#166b93",
        lightGray: "#D9D9D9C9",
        darkGray: "#B2B2B2C9",
      },
    },
  },
  plugins: [],
};
