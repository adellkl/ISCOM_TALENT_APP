module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
      black: "#000000",
      red: "#A5201E",
      blue: "#006C9B",
      white: "#FFFFFF",
      greyLT: "#D9D9D9",
      greyLD: "#8A8A8A",
      green: "#008000",
      red1: "#FF0000",
      red2: "#DC143C",
    },
  },
  variants: {
    extend: {},
  },
};
