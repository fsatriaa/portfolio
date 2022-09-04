/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#64748b",
        dark: "#312e81",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
