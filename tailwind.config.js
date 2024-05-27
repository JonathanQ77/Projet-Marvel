/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "6xl": "10rem",
      },
      spacing: {
        1.1: "5px",
      },
      colors: {
        red: {
          marvel: "#ED171E",
        },
        black: {
          marvel: "#202020",
        },
      },
    },
  },
  plugins: [],
};
