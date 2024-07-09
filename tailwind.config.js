/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E53E3E", // Red
        secondary: "#FFFFFF", // White
        dark: "#000000", // Black
      },
    },
  },
  plugins: [],
};
