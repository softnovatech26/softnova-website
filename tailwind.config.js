/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",   //  This enables class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        impact: ["Impact", "sans-serif"],

        futura: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
